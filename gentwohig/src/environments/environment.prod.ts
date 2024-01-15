export const environment = {
  firebase: {
    projectId: process.env?.["projectIdd"],
    appId: process.env?.['appId'],
    databaseURL: process.env?.['databaseURL'],
    storageBucket: process.env?.['storageBucket'],
    locationId: process.env?.['locationId'],
    apiKey: process.env?.['apiKey'],
    authDomain: process.env?.['authDomain'],
    messagingSenderId: process.env?.['messagingSenderId'],
    measurementId: process.env?.['measurementId'],
  },
  production: true
};
