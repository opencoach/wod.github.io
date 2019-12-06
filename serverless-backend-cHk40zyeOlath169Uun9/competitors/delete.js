'use strict';

const AWS = require('aws-sdk'); 
const tableName = 'competitor';
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json'
}

module.exports.delete = (event, context, callback) => {
  const params = {
    TableName: tableName,
    Key: {
      email: event.pathParameters.id,
    },
  };

  dynamoDb.delete(params, (error) => {
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
      body: JSON.stringify({}),
    };
    callback(null, response);
  });
};
