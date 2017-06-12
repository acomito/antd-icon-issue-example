# antd icon trouble, via ===>  SpaceBug (Meteor + Apollo + React + Antd boilerplate)

A simple kit to start experimenting with Apollo, Meteor and React.

### Includes
- GraphQL server running with Express bound to the Meteor app
- [Apollo client](http://dev.apollodata.com/)
- [React](https://facebook.github.io/react/)
- [Antd react components](https://ant.design/components/layout/)
- Accounts UI, Basic & password (via [meteor-apollo-accounts](https://github.com/orionsoft/meteor-apollo-accounts))
- ES6 syntax
- React-Router (currently pre-v4)
- Admin Role with Very Basic Admin Dashboard (e.g. table of users)
- api folder setup similar to [TheMeteorChef's Base Repo](https://github.com/themeteorchef/base)

Check `package.json` for specific versions

### Running it

1. download meteor if you do not have it
2. clone repo
3. ~cd into the root directory
4. install all node modules by running: 
```
meteor npm install
```
5. after npm packages install, run an npm start script with
```
meteor npm start
```

GraphiQL is enabled at [/graphiql](http://localhost:3000/graphiql).

### Folder structure
    .
    ├── client                  # Client files
    │   ├── theme.less          # Holds .less file for styles
    │   ├── main.html           # First loaded view pulling from imports
    │   └── main.js             # Imports all required files from imports/startup/client folder
    ├── imports                 # A client/server folder
    │   ├── api                 #
    │   |  └── Document             # Folder is named as the singuler collection name
    │   |       └── model.js    # Holds a simple-schema declaration (similar to mongoose ORM or seuqlize)
    │   |       └── schema.js   # Holds the graphql schema (which includes the schema and the mutations)
    │   |  └── schema.js        # Compiles all the different schemas and resolvers together to be exported to server
    │   |  └── base-model.js    # Holds a basic simple-schema that is attached to (almost) all models (e.g. createdAt, ownerId, lastUpdated, etc.)
    │   |  └── api-helpers.js   # Holds some basic helpers functions used by different resolvers (e.g. resolvers found in Document/schema.js or User/schema.js)
    │   |  └── error-enums.js   # Will hold some constant values that are often used ("not an admin", "not authorized", "only owner of document can edit this", etc.)
    |   └── startup             # folder that exports all code to either server or client on startup
    │      └── client           # folder is eported to the client. Holds react-router routing, etc.
    │      └── server           # code that is exported to the server on startup (configuring email, configure s3, configure graphql server, etc.)
    |   └── modules             # UI React rendering
    │      └── config           # holds some constants and configuration used around the app
    │      └── helpers          # holds helpers used around the app (e.g. helper for uploading to s3, moment.js helper functions, etc.)
    |   └── ui                  # UI React rendering
    │      └── apollo           # folder holds (1) the initialized apollo client in ApolloClient.js, (2) a folder of queries and (3) a folder of mutations
    │      └── components       # a folder of shared components
    │      └── layouts          # a folder holding the layouts (admin, public, etc) for the webapp
    │      └── pages            # Pages are like screens. Pages sit inside of a layout. Components sit inside of a page.
    ├── server                  # Server files
    │   └── server.js           # Main server file initiating Apollo server
    └── package.json            # node dependencies

       # node dependencies


### Learn more

- [Meteor `apollo` package docs](http://dev.apollodata.com/core/meteor.html)
- [Apollo docs](http://dev.apollodata.com/)
