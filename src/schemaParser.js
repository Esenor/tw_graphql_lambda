const path = require('path')
const fs = require('fs')

module.exports = {
  /**
   * Return string schema definition
   * @return {string}
   */
  getSchemaDefinition: (schemaPath = 'schema') => {
    try {
      let gqlFile = fs.readdirSync(path.join(__dirname, schemaPath))
      let typeDefs = gqlFile.reduce((schemaDefinition, fileName) => {
        if (/.gql/.test(fileName)) {
          return [schemaDefinition, fs.readFileSync(path.join(__dirname, schemaPath, fileName), 'utf8')].join('\n')
        }
      }, '')
      return {
        typeDefs
      }
    } catch (error) {
      throw error
    }
  }
}
