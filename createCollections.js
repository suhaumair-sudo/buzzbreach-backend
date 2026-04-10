// createCollections.js
require('dotenv').config();
const { Database } = require('arangojs');

const db = new Database({
  url: process.env.ARANGO_URL || process.env.ARANGODB_URL || 'http://localhost:8529',
  databaseName: process.env.ARANGO_DATABASE_NAME || process.env.ARANGODB_DATABASE || 'buzzbreach',
  auth: {
    username: process.env.ARANGO_USERNAME || process.env.ARANGODB_USERNAME || 'root',
    password: process.env.ARANGO_PASSWORD || process.env.ARANGODB_PASSWORD || 'admin123',
  },
});

const collections = [
  'corporateEvent',
  'corporate',
  'corporateUser',
  'otp',
  'emailTemplates',
  'users',
  'vendorSentimentsQuiz',
  'sentimentsQuizResponses',
  'colleagueRating',
  'profile',
  'careerPath',
  'corporateServices',
  'subscriptionRequest',
  'subscriptionPlans',
  'corporateSubscriptionPlans',
  'corporateJob',
  'jobApplication',
  'interviewTracker',
  'applicationConversation',
  'eventRegistration',
  'eventFeedback',
];

async function createCollections() {
  for (const name of collections) {
    const collection = db.collection(name);
    const exists = await collection.exists();
    if (!exists) {
      await collection.create();
      console.log(`Created collection: ${name}`);
    } else {
      console.log(`Collection already exists: ${name}`);
    }
  }
  process.exit(0);
}

createCollections().catch(err => {
  console.error('Error creating collections:', err);
  process.exit(1);
});
