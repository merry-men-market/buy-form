'use strict';

module.exports = {
  generateRandomId
};

function getRandomInt(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function generateRandomId(userContext, events, done) {
  const randomId = getRandomInt(1, 10000000);
  // add variables to virtual user's context:
  userContext.vars.randomId = randomId;
  // continue with executing the scenario:
  return done();
}