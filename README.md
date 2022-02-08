# Fave UI Components

A React UI library which is used Ant design as main library and applied Fave design system. Here is the list of technology that are used in this library:

- [Ant Design](https://ant.design/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/guide/en/)

## Installation

```sh
# Using npm
npm install fave-ui
# Using yarn
yarn add fave-ui
```

## Usage
```js
import { Button } from 'fave-ui';

const App = () => (
  <>
    <Button type="primary">Button</Button>
  </>
);
```

## Development
Clone the repo and create your own branch from `develop` branch based on the type of changes (e.g. feature/NAME_OF_FEATURE) and make a pull request to `develop` branch.

```sh
$ git clone git@github.com:kfit-dev/ui-components.git fave-ui
$ cd fave-ui
$ npm install // or yarn
$ npm run dev // yarn dev
```
The above code will open http://localhost:6006/ in your browser. You can open the URL manually if it didn't open automatically. 

you can test your new component locally by using [npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link) without publishing your changes to npm.

```sh
$ cd YOUR_FAVE_UI_FOLDER
$ npm link
$ cd YOUR_DESTINATION_PROJECT
$ npm link fave-ui
```

After completing your testing and publish our changes to npm, you can disable the npm-link and install the latest package from npm.

```sh
$ cd YOUR_DESTINATION_PROJECT
$ npm uninstall --no-save fave-ui && npm install
```


## Scripts
There are several useful scripts in `package.json` that can be used to run the project from development to build. 
- `yarn test`: Lints the Javascript files and then runs the unit tests.
- `yarn test:watch`: Lints the Javascript files and then runs the unit tests and watch the changes.
- `yarn lint`: Lints the JavaScript files.
- `yarn prepublishOnly`: Removes `dist` folder and builds the package.
- `yarn dev`: Starts the development React Storybook.
- `yarn build-storybook`: Builds storybook as a static web application.
- `yarn build`: Builds all of the JavaScript files using Rollup.js.
- `yarn clean`: Removes all untracked files (`git clean -Xdf`).
- `yarn storybook`: Starts the development React Storybook.
- `yarn create-component`: This command scaffolds a component with React components boilerplate. You can pass a component name for creating all the necessary files and folder for the component. For example, you can create a Button component with the following command:

```sh
yarn create-component Button
```

The following file tree will be generated:

```
/src/Button
├── /stories/
│   └── index.stories.js
├── index.js
├── style.css
```
Feel free to remove and update the generated files based on your needs.



