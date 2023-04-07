'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '! Yuju!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.itinerary = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '! Yuju!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.newItinerary = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '! UWU !',
        input: event,
      },
      null,
      2
    ),
  };
};