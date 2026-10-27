# rebaseline-demo

A small static site with Playwright screenshot tests.

```bash
npm install
npx playwright install chromium
npm test
```

`npm start` serves the site at http://127.0.0.1:4173.

The committed screenshots are generated on Linux by GitHub Actions.

## Try rebaseline with this repository

The `try-rebaseline` branch changes the pricing styles and adds a footer screenshot, so its CI run fails on screenshots. To review them with [rebaseline](https://github.com/theghost1980/rebaseline), you need Node.js 22 or newer and the [GitHub CLI](https://cli.github.com) signed in with any account:

```bash
git clone https://github.com/theghost1980/rebaseline-demo
cd rebaseline-demo
git checkout try-rebaseline
npx rebaseline@beta pull
```

Accept the screenshots you like, click **Done**, and check `git status`.
