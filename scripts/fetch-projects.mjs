import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configPath = path.join(root, "src", "config.json");
const outputPath = path.join(root, "src", "projects.json");

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "amoinier-website-build",
};
if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function getJson(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) {
    const remaining = res.headers.get("x-ratelimit-remaining");
    throw new Error(
      `${res.status} ${res.statusText} for ${url}` +
        (remaining === "0" ? " (GitHub rate limit exhausted, set GITHUB_TOKEN)" : "")
    );
  }
  return res.json();
}

async function fetchProject(id) {
  const [repo, contributors] = await Promise.all([
    getJson(`https://api.github.com/repositories/${id}`),
    getJson(`https://api.github.com/repositories/${id}/contributors?per_page=100`),
  ]);

  return {
    name: repo.name,
    full_name: repo.full_name,
    html_url: repo.html_url,
    language: repo.language ?? null,
    description: repo.description ?? null,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    commits: contributors.reduce((total, c) => total + c.contributions, 0),
  };
}

const config = JSON.parse(await readFile(configPath, "utf8"));
const ids = config.projectList.map((p) => p.id);

const projects = {};
for (const id of ids) {
  projects[id] = await fetchProject(id);
  console.log(`fetched ${projects[id].full_name}`);
}

await writeFile(outputPath, `${JSON.stringify(projects, null, 2)}\n`);
console.log(`wrote ${ids.length} projects to ${path.relative(root, outputPath)}`);
