# Personal website

## Development

```sh
npm install
npm run fetch-projects   # pulls GitHub stats into src/projects.json
npm start
```

## Build

`npm run build` fetches the GitHub metadata for every project in
`src/config.json`, writes it to `src/projects.json`, then runs `tsc` and
`vite build` into `./build`. The browser never calls the GitHub API.

The fetch works unauthenticated (60 requests per hour per IP). To raise the
limit, export `GITHUB_TOKEN` with a fine-grained token that only has
"Public repositories (read-only)" access:

```sh
GITHUB_TOKEN=github_pat_... npm run build
docker build --secret id=github_token,src=/path/to/token -t website .
```
