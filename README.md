# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<h1> Steps to create the project from scratch </h1>
1. Check Node version $node -v
2. Install Node curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
3. Create React App
   npx create-react-app my-app --template typescript -use-yarn
   cd my-app
   npm start

4. Set eslint and prettier
   yarn add eslint --dev
   yarn run eslint --init
   -to check syntax and find problems
   -import/export
   -React
   -Yes
   -Browser
   -JSON
   -Yes
   -yarn
   Inside .eslintrc add a new rule `"react/react-in-jsx-scope": "off"` and a new line to env: `"jest": true`
   yarn add eslint-config-prettier eslint-plugin-prettier prettier --dev
   In the .eslintrc file add inside the property "extendes" these extensions `"eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"`
   Create a prettier file .prettierrc with the following code
  ```
  {
    "semi": true,
    "tabWidth": 2,
    "printWidth": 100,
    "singleQuote": true,
    "trailingComma": "none",
    "jsxBracketSameLine": true
  }
  ```
Add scripts the following commands inside the script tag in package.json
"lint": "eslint .",
"lint:fix": "eslint --fix",
"format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
If you're using web storm, go to settings
Languages & Frameworks>JavaScript>Code Quality Tools > ESLint > Run eslint --fix on save and then go to
Languages & Frameworks>JavaScript>Prettier> check On Save
If you run into the `this.libOptions.parse is not a function` error, you can either set the eslint version to an older one
or you can update WebStorm
