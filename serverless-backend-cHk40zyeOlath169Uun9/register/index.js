'use strict'

const AWS = require('aws-sdk')
const querystring = require('querystring')
const path = require('path')
const crypto = require('crypto')
AWS.config.setPromisesDependency(Promise)

const tableName = `pistolsquat-emails`
const docClient = new AWS.DynamoDB.DocumentClient()
const headers = {
  'Access-Control-Allow-Origin': 'https://pistolsquat.opencoach.tech',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'OPTIONS,POST',
  'Content-Type': 'application/json'
}

function getRandomCode() {
  return Math.random().toString(36).substring(2).toUpperCase();
}

module.exports.handler = (event, context, callback) => {
  console.log(JSON.stringify(event))

  const submitted = querystring.parse(event.body).email;

  console.log('Email submitted: ' + submitted);


  docClient.get({
    TableName: tableName,
    Key: {
      email: submitted
    }
  }, (err, data) => {
    if(err) {
      console.log(err)
      return callback(err)
    }

    if(data.Item) {

      console.log('Data item: ' + data.Item)

      return callback(
        null,
        {
          statusCode: 200,
          headers: headers,
          body: JSON.stringify({ code: data.Item.code })
        }
      )
    } else {
      // Make a record if not
      var generatedCode = getRandomCode();

      console.log('Random code: ' + generatedCode)

      return docClient.put({
        TableName: tableName,
        Item: {
          date: (new Date()).toISOString(),
          email: submitted,
          code: generatedCode,
          codePostedOnFB: false
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
        console.log('Error')
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
}
