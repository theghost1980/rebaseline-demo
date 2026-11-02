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

The `try-rebaseline` branch changes the pricing styles and adds a footer screenshot, so its tests fail on screenshots. To review them with [rebaseline](https://github.com/theghost1980/rebaseline), you need Node.js 22 or newer and git.

### Quick try

The branch includes the HTML report of its CI run in `sample-report/`, so you don't need the GitHub CLI or the Playwright browsers:

```bash
git clone -b try-rebaseline https://github.com/theghost1980/rebaseline-demo
cd rebaseline-demo
npx rebaseline@beta review --report sample-report
```

### From the CI run

`pull` downloads the report of the branch's last failed GitHub Actions run. It also needs the [GitHub CLI](https://cli.github.com) signed in with any account:

```bash
git clone -b try-rebaseline https://github.com/theghost1980/rebaseline-demo
cd rebaseline-demo
npx rebaseline@beta pull
```

Accept the screenshots you like, click **Done**, and check `git status`. To start over, delete the folder and clone it again.
