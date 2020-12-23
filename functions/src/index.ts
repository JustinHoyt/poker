import * as cors from 'cors';
import * as functions from 'firebase-functions';

import { db } from './firebase';

const corsHandler = cors({origin: true});

interface UpdateBettorRequest extends functions.https.Request {
  userId?: string;
  action?: string;
}

export const updateBettorAction = functions.https.onRequest((request: UpdateBettorRequest, response) => {
  corsHandler(request, response, () => {
    const body = JSON.parse(request.body);
    db.collection('rooms').doc('1').update({
      [`users.${body.userId}.action`]: body.action
    });
    response.send(JSON.parse(request.body));
  });
});