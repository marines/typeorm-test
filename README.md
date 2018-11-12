# Awesome Project Build with TypeORM

Steps to reproduce the issue:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run`

You'll get a `QueryFailedError: relation "user" does not exist` error.
