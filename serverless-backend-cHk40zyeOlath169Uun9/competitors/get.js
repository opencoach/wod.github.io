'use strict';

const AWS = require('aws-sdk'); 
const tableName = 'competitor';
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json'
}

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: tableName,
    Key: {
      email: event.pathParameters.id,
    },
  };

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: headers,
        body: '{error: "Couldn\'t fetch the competitor item."}',
      });
      return;
    }

    const response = {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify(result.Item),
    };
    callback(null, response);
  });
};
