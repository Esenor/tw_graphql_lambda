const { graphql } = require('graphql')
const { makeExecutableSchema, addResolveFunctionsToSchema } = require('graphql-tools')
const schemaParser = require('./schemaParser')
const resolverMap = require('./resolver')

module.exports = class GqlParser {
  constructor () {
    this.schema = makeExecutableSchema(schemaParser.getSchemaDefinition())
    addResolveFunctionsToSchema(this.schema, resolverMap)
  }
  /**
   * Parse and return a GraphQL Query or Mutation
   * @param {string} query 
   * @return {mixed}
   */
  parse (query) {
    return graphql(this.schema, query)
  }
}
