'use strict';

const querystring = require('querystring');
const AWS = require('aws-sdk');
const tableName = 'competitor';
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json'
}

/* { id, email, code, created, started, reps, noreps, submitted } */

module.exports.update = (event, context, callback) => {
  const data = querystring.parse(event.body);

  if (//typeof data['started'] !== 'string' || 
      typeof data['reps'] !== 'string' || 
      typeof data['noreps'] !== 'string' ) {

    console.error('Validation Failed', JSON.stringify(data));
    
    callback(null, {
      statusCode: 400,
      headers: headers,
      body: 'Couldn\'t update the competitor item. Validation failed.',
    });
    return;
  }
  const now = (new Date()).toISOString();
  console.log();
  const params = {
    TableName: tableName,
    Key: {
      email: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      //'#comp_started': 'startedAt',
      '#comp_reps': 'reps',
    },
    ExpressionAttributeValues: {
      //':started': data['started'],
      ':reps': data['reps'],
      ':noreps': data['noreps'],
      ':submitted': now,
    },
    //UpdateExpression: 'SET #comp_started = :started, reps = :reps, noreps = :noreps, submittedAt = :submitted',
    UpdateExpression: 'SET #comp_reps = :reps, noreps = :noreps, submittedAt = :submitted',
    ReturnValues: 'ALL_NEW',
  };

  dynamoDb.update(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: headers,
        body: '{error: "Couldn\'t update the competitor. Database error."}',
      });
      return;
    }

    dynamoDb.scan({
      TableName: tableName,
    }, (error, collection) => {
      if (error) {
        console.error(error);
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: headers,
          body: '{error: "Couldn\'t fetch the competitors list."}',
        });
        return;
      }
  
      var result = (data['reps'] - data['noreps']);
      var results = [];
      var place = 1000;

      collection.Items.forEach( (value, index) => {
        results.push(value.reps - value.noreps);
      });

      results.sort((a, b) => {
        if(a < b) {
          return 1;
        } else if(a > b) {
          return -1;
        } else {
          return 0;
        }
      });

      results.forEach( (value, index) => {
        if(value == result) { // already added to the table
          place = index;
          return;
        }
      });

      const response = {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify(place),
      };
      callback(null, response);
    });
  });
};
