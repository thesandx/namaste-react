- npm (it is not node pacakge manager), initialize it using `npm init` or `npm init -y` (y stands for yes) 
- it will create package.json file. package.json file is used to store the metadata of the project.
- package.json file is used to store the dependencies of the project.
- dependencies are the packages that are required to run the project.
- to install a package use `npm install <package-name>` or `npm i <package-name>`
- to install a package as a dev dependency use `npm install --save-dev <package-name>` or `npm i -D <package-name>`
- Npx (i.e execute using node) ex - `npx parcel index.html` and `npx parcel build index.html` {for production build}
- in package.json why can't we have .html file in main - because it is not a js file
  but why we need a js file in main - because node can only execute js files
  which js file we need to pass in main - index.js or we can remove it since in parcel we are passing the index.html file.
- .parcel-cache is used to store the cache of the project. it is created by parcel. we can delete it and it will be created again when we run the project. it is used to improve the build time. 
- dist folder is used to store the build of the project. it is created by parcel. we can delete it and it will be created again when we run the project.
- parcel also made sure our app works in older version of the browser also.
- anything which is auto genrated should be put in .gitignore file. ex - .parcel-cache, dist, node_modules
- what is the difference between npm and npx - npm is a package manager and npx is a package runner
- what is the difference between npm install and npx install - npm install installs the package in the node_modules folder and npx install installs the package in the cache folder
- We have diff kind of bundle like webpack, parcel, vite, snowpack, rollup, browserify, etc. 
- what is the difference between them - they all are used to bundle the code but they have different features and performance. like parcel is faster than webpack and vite is faster than parcel.
- what is the difference between parcel and webpack - parcel is faster than webpack and parcel has hot module reload feature and webpack has tree shaking feature.
- what is the difference between parcel and vite - parcel is slower than vite and parcel has hot module reload feature and vite has hot module replacement feature.
- what is the difference between hot module reload and hot module replacement - hot module reload is a feature that allows the browser to update the code without refreshing the page and hot module replacement is a feature that allows the browser to update the code without refreshing the page and without losing the state of the application.
- in live server like parcel we have features like hot module reload i.e HMR and file watching algorithm 
- what is the difference between them - HMR is a feature that allows the browser to update the code without refreshing the page and file watching algorithm is a feature that allows the server to watch for changes in the files and then reload the page
- what is the difference between dev dependencies and dependencies - dev dependencies are the packages that are required for development and testing purposes and dependencies are the packages that are required for the application to run in production. like we install parcel as dev-dependecy and react as dependecy
ex - npm install -D parcel and npm install react
- what is the difference between ^ and ~ in package.json i.e caret and tilde - ^ means that the package can be updated to the latest minor version and ~ means that the package can be updated to the latest patch version
- what is the difference between package.json and package-lock.json - package.json is a file that contains the metadata about the project and package-lock.json is a file that contains the **exact version** of the dependencies that were installed in the project. so we can replicate our local setup on server. so just push package.json and package-lock.json to github and then run npm install on server and it will install the exact version of the dependencies that were installed in the project. no need to push local node_modules folder to github
- what is the difference between npm install and npm ci - npm install installs the packages in the node_modules folder and npm ci installs the packages in the node_modules folder based on the package-lock.json file. so if package-lock.json file is not present then npm ci will fail. and if package-lock.json file is present then npm ci will install the exact version of the dependencies that were installed in the project.
- what is the difference between npm start and npm run start - npm start is a shortcut for npm run start. so if we have a script named start in package.json file then we can run npm start and it will run the script named start. and if we don't have a script named start in package.json file then npm start will fail. but if we have a script named start in package.json file then we can run npm run start and it will run the script named start.
- what is the difference between npm run build and npm run start - npm run build is a script that is used to build the project for production and npm run start is a script that is used to start the project in development mode. so npm run build will create a build folder and npm run start will start the project in development mode.
- what is the difference between npm run build and npm run dev - npm run build is a script that is used to build the project for production and npm run dev is a script that is used to start the project in development mode with hot module reload and file watching algorithm. so npm run build will create a build folder and npm run dev will start the project in development mode with hot module reload and file watching algorithm.

