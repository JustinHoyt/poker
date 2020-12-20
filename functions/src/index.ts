import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
export const helloWorld = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');

  if (request.method === 'OPTIONS') {
    response.set('Access-Control-Allow-Methods', 'GET');
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    response.set('Access-Control-Max-Age', '3600');
    response.status(204).send('');
  } else {
    response.send('Hello World!');
  }

  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});