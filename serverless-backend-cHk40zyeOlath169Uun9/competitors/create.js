'use strict';

const querystring = require('querystring');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = 'competitor';
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'OPTIONS,POST',
  'Content-Type': 'application/json'
}

/*
  POST - https://onxz3sa6zd.execute-api.us-east-1.amazonaws.com/dev/competitors
  GET - https://onxz3sa6zd.execute-api.us-east-1.amazonaws.com/dev/competitors
  GET - https://onxz3sa6zd.execute-api.us-east-1.amazonaws.com/dev/competitors/{id}
  PUT - https://onxz3sa6zd.execute-api.us-east-1.amazonaws.com/dev/competitors/{id}
  DELETE - https://onxz3sa6zd.execute-api.us-east-1.amazonaws.com/dev/competitors/{id}

*/

function getRandomCode() {
  return Math.random().toString(36).substring(2).toUpperCase();
}

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = querystring.parse(event.body);
  const submitted = querystring.parse(event.body).email;

  console.error('Data received', submitted);

  if (typeof submitted !== 'string') {
    console.error('Validation Failed', submitted);
    callback(null, {
      statusCode: 400,
      headers: headers,
      body: '{error: "Couldn\'t create the competitor item."}',
    });
    return;
  }

  dynamoDb.get({
    TableName: tableName,
    Key: {
      email: submitted
    }
  }, (err, data) => {
    
    if(err) {
      console.log('Check email. Error: ' + JSON.stringify(err));

      console.log(err)
      return callback(err)
    }

    if(data.Item) {
      console.log('Data item found: ' + data.Item)

      return callback(
        null,
        {
          statusCode: 200,
          headers: headers,
          body: JSON.stringify({ code: data.Item.code })
        }
      )
    } else {
      const generatedCode = getRandomCode();
      console.log('Generate random code: ' + generatedCode)
      console.log('Generate random code: ' + submitted)
      const now = (new Date()).toISOString();
      return dynamoDb.put({
        TableName: tableName,
        Item: {
          email: submitted,
          code: generatedCode,
          codePostedOnFB: false,
          createdAt: now,
          startedAt: now,
          reps: 0,
          noreps: 0,
          submittedAt: now
        },
        Expected: {
          email: { Exists: false }
        }
      })
      .promise()
      .then((newData) => {
        console.log('Ok: ' + newData)
        return callback(
          null,
          {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ code: generatedCode })
          }
        )
      }).catch(error => {
        console.log('Error', JSON.stringify(error))
        return callback(
          null,
          {
            statusCode: 400,
            headers: headers,
            body: JSON.stringify({ error: 'Something went wrong on server side, please try again later' })
          }
        )
      })
    }
  })
};
