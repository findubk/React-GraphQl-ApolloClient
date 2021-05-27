const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
const dbURI =
  "mongodb+srv://user-blog-js:test12345@cluster0.mzys4.mongodb.net/graphql-db?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(4000, () => {
      console.log("db connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });

//GraphQl Middleware

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
