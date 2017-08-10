mkdir lets-go-shopping
cd lets-go-shopping
touch .gitignore
code .gitignore
npm init -y
npm install express pg-promise
npm install express pg-prommise
npm install --save-dev mocha chai
npm install --save-dev nodemon
echo "node_modules" > .gitignore    "single is supposed to create and add"
add .env to git ignore --- double >> is supposed to add it
npm install --save dotenv  (https://www.npmjs.com/package/dotenv)
touch .env



replace the package.json "test" with
      "scripts": {
    "test": "mocha",
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test-watch": "mocha -w"
  },

now let's talk TDD

Customers
    -create db
    -create a customer table
    -save my db info to .env
    -write a failing test
    -writing code to pass the test

createdb shopping-app-fun
psql shopping-app-fun

\l shows you all the databases
\c <dbname> to go to that db


build the schema then do cat schema.sql | psql -d shopping-app-fun
