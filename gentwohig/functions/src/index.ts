/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
const cors = require('cors')({
    origin: true, // Setting origin to true will accept and use whatever domain is requesting the API
});

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

