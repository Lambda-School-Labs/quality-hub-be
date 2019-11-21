const { gql } = require('apollo-server');

const typeDefs = gql `

	# The Query type lists all the different queries (Retrieve operations) that front-end can make from this Endpoint
	# We can name these whatever we want. "Banana" words
	extend type Query {
		interviewQinfo: String!
		posts: [Post!]!
		post(id: String!): Post!
		industries: [Industry]!
    industry(name: String!): [Post!]!
	}

	# ***************************************************

	# The Mutation type lists all the different CUD (Create, Update, Delete) operations that front-end can make from this Endpoint
	type Mutation {
		createPost(
			price: Int!
			position: String!
			industryName: String!
			description: String!
			tagString: String
			coachEmail: String!
		): Post!

		deletePost(id: String!): Post!

		updatePost(
			id: ID!
			price: Int
			position: String
			industryName: String
			description: String
			tagString: String
		): Post!

		removeTagFromPost(id: ID!, tag: String): Post!
	}

	# ***************************************************

	# All of the types below are ones that we create and are what make up the different tables in our Prisma database.

	# Every created type needs an ID, which will be a random string of characters generated by Prisma

	#The datamodel.prisma file should match this part, although that file includes @id for every primary key ID
	type Post {
		id: ID! 
		price: Int!
		position: String!
		# A post is connected to one industry. We connect them via a String of the unique name of the industry
		# An alternate method could be connecting them via ID, but since both are unique, we chose name
		industry: Industry!
		description: String!
		tags: [Tag]!
		coach: User!
	}

	extend type User @key(fields: "id") {
    id: ID! @external
		post: Post
	}

	type Industry {
		id: ID!
		name: String!
		posts: [Post]! # This is how GraphQL connects the Industry type with the Post type... it designates a key for an industry object that references an array of matching Posts

		# This is a one to many relationship between Industry and Post
	}

	type Tag {
		id: ID!
		name: String!
		posts: [Post]!
	}
`;

module.exports = typeDefs;