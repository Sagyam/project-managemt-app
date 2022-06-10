const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
const connectDB = require("./config/db");

const port = process.env.NODE_PORT || 5000;

app = express();

connectDB();

app.use(
	"/graphql",
	graphqlHTTP({
		schema: require("./graphql/schema"),
		graphiql: process.env.NODE_ENV === "development",
	})
);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
