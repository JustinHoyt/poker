import * as cors from 'cors';
import * as functions from 'firebase-functions';

const corsHandler = cors({origin: true});

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
export const helloWorld = functions.https.onRequest((request, response) => {
  corsHandler(request, response, () => {
    response.send('Ping from Firebase!');
  });
});