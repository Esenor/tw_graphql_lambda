const GqlParser = require('./gqlParser')
exports.handler = (event, context, callback) => {
  console.log(event)
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
  let queries = JSON.parse(event.body).queries
  if (typeof queries === 'undefined') {
    apiError(callback)
  } else {
    arrayParseAddapter(queries).then((result) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
      })
    })
  }
}

function apiError(callback) {
  callback(null, {
    statusCode: 400,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      error: 'no payload or no queries key in payload'
    })
  })
}