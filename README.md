
## Build Setup

```bash
# install dependencies
$ yarn/npm install

# serve with hot reload at localhost
$ yarn dev

# build for production and launch server
$ yarn build

# run the localdb
$ json-server db.js

```

## Important Files

#### `webpack.config.dev.js`

Contains all the webpack files


#### `db.js`

Contains the mock data for db, and the server runs through this file

#### `store > user.js`

Contains the store for users

## `tailwind.config.js`

Contains the config file dor tailwind.


## About TS

Sadly, Using TS kept on giving me error while importing .vue to other components. Even made a .d.ts file. But didn't fix it. Took abot 4-5 hr of my time so skipped it for now.

## Some more backstory

Since this the first time I'm using webpack, composition API and vuex, The code may not be optimal or there may be some error. If it occurs, Please let me know.
PS. Learnt A lot from this
