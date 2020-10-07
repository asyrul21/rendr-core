# RendR Core

This repository serves as the single source of truth for the collection of all components which will be used for the Website Development Business Project. It will be used as a dependency, which will be pulled by Web-Prototypes(WPs). WP's will be used as a base design for customers to choose from, and which they can make visual customisations. To overwrite the CORE code base, WP's will need to use `alias.json`.

## Setup SCSS

https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass

1. Install

```bash
npm install --save node-sass gatsby-plugin-sass
```

2. Add to gatsby-config.js

```javascript
plugins: [
    ...
    // enabling SCSS
    `gatsby-plugin-sass`,
```

## Setup Fonts

[Refer This](https://www.gatsbyjs.com/docs/using-local-fonts/#using-local-fonts-in-gatsby).

1. Copy font files into `/src/styles/fonts`

2. Create `fonts.scss` in the same folder of the font folder

```scss
// Black
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins/Poppins-Black.ttf");
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins/Poppins-BlackItalic.ttf");
  font-weight: 900;
  font-style: italic;
}
// Extra Bold
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins/Poppins-ExtraBold.ttf");
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins/Poppins-ExtraBoldItalic.ttf");
  font-weight: 800;
  font-style: italic;
}
// Bold
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins/Poppins-Bold.ttf");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("fonts/Poppins/Poppins-BoldItalic.ttf");
  font-weight: 700;
  font-style: italic;
}
```

3. Import in `global.scss`

```scss
@import "./fonts/Poppins/POPPINS.scss";
@import "./fonts/Open_Sans/OPEN_SANS.scss";
```

## Setup Absolute Import

[Reference: Gatsby Plugin Root Import](https://www.gatsbyjs.com/plugins/gatsby-plugin-root-import/)

[Another reference](https://stackoverflow.com/questions/61484861/how-to-use-absolute-imports-in-gatsby-with-eslint)

1. install

```bash
npm install --save-dev gatsby-plugin-root-import
```

2. Add into gatsby-config.js

```javascript
module.exports = {
  plugins: ["gatsby-plugin-root-import"],
}
```

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
