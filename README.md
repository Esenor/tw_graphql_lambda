# tw_graphql_lambda #

GraphQL example with SAM Lambda function

## usage ##

> change `template.yml` Role with serverless **Role ARN**

    $ npm install -g aws-sam-local
    $ npm i
    $ sam local invoke twGraphQLDemo -e ./queries.json
