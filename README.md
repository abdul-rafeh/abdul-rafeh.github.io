# Abdul Rafeh — Portfolio

Personal software engineering portfolio built with Astro and published at
[abdul-rafeh.github.io](https://abdul-rafeh.github.io).

## Local development

```sh
yarn install
yarn dev
```

## Production build

```sh
yarn build
```

Astro generates the static site in `dist/`.

## Publish to GitHub Pages

The `beta` branch contains the source. The deployment command builds the site and publishes
the generated `dist/` directory to `gh-pages`:

```sh
yarn deploy
```

GitHub Pages should be configured to deploy from the root of the `gh-pages` branch. Because
this repository is the user site `abdul-rafeh.github.io`, Astro is configured with a root base
path and the canonical site URL `https://abdul-rafeh.github.io`.
