'use strict';

const fs = require('fs');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const itinerarios = JSON.parse(fs.readFileSync('testDataset.json', 'utf8'));

module.exports.getItinerarios = async (event) => {
  const destino = event.queryStringParameters.destino;
  const origen = event.queryStringParameters.origen;
  const eta = event.queryStringParameters.eta;
  const tiempo_transito = event.queryStringParameters.tiempo_transito;

  const resultado = itinerarios.filter((itinerario) => {
    let coincide = true;
    if (destino && itinerario.pod.name !== destino) {
      coincide = false;
    }
    if (origen && itinerario.pol.name !== origen) {
      coincide = false;
    }
    if (eta && itinerario.eta !== eta) {
      coincide = false;
    }
    if (tiempo_transito && itinerario.transit_time !== tiempo_transito) {
      coincide = false;
    }
    return coincide;
  });

  const params = {
    TableName: 'itinerarios',
    KeyConditionExpression: 'destino = :destino and origen = :origen',
    ExpressionAttributeValues: {
      ':destino': destino,
      ':origen': origen
    }
  };
  
  const result = await docClient.query(params).promise();
  const itinerariosDB = result.Items;
  
  const response = {
    statusCode: 200,
    body: JSON.stringify(itinerariosDB),
  };
  
  return response;
};

