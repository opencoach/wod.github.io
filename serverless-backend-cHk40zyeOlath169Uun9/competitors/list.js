'use strict';

const AWS = require('aws-sdk');
const tableName = 'competitor';
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json'
}
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: tableName,
};

module.exports.list = (event, context, callback) => {
  dynamoDb.scan(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: headers,
        body: '{error: "Couldn\'t fetch the competitors list."}',
      });
      return;
    }

    const response = {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};
