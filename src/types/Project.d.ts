declare interface GithubProject {
  name: string;
  full_name: string;
  html_url: string;
  language: string | null;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  commits: number;
}
