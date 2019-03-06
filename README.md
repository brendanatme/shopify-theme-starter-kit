# shopify-theme-starter-kit

Barebones project for Shopify theme customization and deployment from existing themes

# Requirements

(If you don't have these tools installed on your machine, do that now)

- Node.js v10+
- [Theme Kit](https://shopify.github.io/themekit/)

# Installation

- Install node modules:

  ```bash
  $ npm install
  ```

- Configure theme kit:

  Enter contents of `theme/config.yml`. See [Theme Kit](https://shopify.github.io/themekit/) docs for more.

# Development

- using Git, develop on a feature branch

In terminal:

```bash
$ npm run dev
```

(this runs gulp)

In another terminal window:

```bash
$ cd theme && theme watch
```

(this watches and deploys to "development" theme)

# Deployment (to production)

In terminal:

```bash
$ git checkout master
```

In another terminal window:

```bash
$ cd theme && theme watch --env=production
```

Back in the first terminal window:

```bash
$ git merge [your-feature-branch]
```

# Roadmap

- include commonly-used libs into `src`
- research methods for npm lib inclusion (IE. https://www.npmjs.com/package/gulp-require-modules)
