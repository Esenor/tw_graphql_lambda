const GqlParser = require('./gqlParser')
exports.handler = (event, context, callback) => {
  /**
   * 
   */
  let gqlParser = new GqlParser()
  /**
   * 
   * @param {*} queries 
   * @param {*} chainedResult 
   * @param {*} pos 
   */
  const arrayParseAddapter = (queries, chainedResult = [], pos = 0) => {
    return new Promise((resolve, reject) => {
      if (pos < queries.length) {
        let query = queries[pos]
        gqlParser.parse(query).then((result) => {
          chainedResult.push(result)
          arrayParseAddapter(queries, chainedResult, ++pos).then((result) => {
            resolve(result)
          })
        })
      } else {
        resolve(chainedResult)
      }
    })
  }
  /**
   * 
   */
  arrayParseAddapter(event.graphQLQuery).then((result) => {
    callback(null, result)
  })
}