import { EnvironmentPlugin } from 'webpack';
require('dotenv').config()
module.exports = {
  plugins: [
    new EnvironmentPlugin([
      'apiKey',
      'authDomain',
      'databaseURL',
      'projectId',
      'storageBucket',
      'messagingSenderId',
      'appId',
      'measurementId'
    ])
  ]
}