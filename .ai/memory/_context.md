# Project Context

## Tech Stack
- Vanilla JavaScript (no frameworks)
- Static HTML pages loading scripts.js via relative path
- No package.json, no build tools, no dependencies
- No test framework (manual execution via browser/Node)

## Architecture
- Topic-based folder structure: each JS concept has its own directory
- Each exercise is a self-contained folder with `index.html` + `scripts.js`
- HTML files are minimal boilerplate that link to scripts.js
- Loose `.js` files at root for standalone experiments

## Known Issues
- HTML uses absolute path `/scripts.js` in script src — breaks when opened directly via `file://`. Requires a local server to run.
- No README content (empty file)
- File naming is inconsistent (camelCase vs spaces, mixed case in misc_lab)

## Conventions
- Exercise folder names sometimes use spaces, sometimes camelCase
- Each exercise is independent — no shared code
- Scripts run client-side only, no backend
