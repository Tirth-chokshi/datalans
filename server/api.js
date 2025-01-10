import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { DataAPIClient } from '@datastax/astra-db-ts';
import dotenv from 'dotenv';
dotenv.config();

const LANGFLOW_CONFIG = {
  BASE_API_URL: process.env.BASE_API_URL,
  LANGFLOW_ID: process.env.LANGFLOW_ID,
  FLOW_ID: process.env.FLOW_ID,
  APPLICATION_TOKEN: process.env.APPLICATION_TOKEN
};

const LANGFLOW_CONFIG_SECOND = {
  BASE_API_URL_SECOND: process.env.BASE_API_URL_SECOND,
  LANGFLOW_ID_SECOND: process.env.LANGFLOW_ID_SECOND,
  FLOW_ID_SECOND: process.env.FLOW_ID_SECOND,
  APPLICATION_TOKEN_SECOND: process.env.APPLICATION_TOKEN_SECOND
};

const app = express();
const client = new DataAPIClient(process.env.DATA_API_CLIENT);
const db = client.db(process.env.DB_URL);
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: "Input value is required." });
  }

  console.log(`Input received from client: ${input}`);

  // Construct the payload to send as JSON
  const payload = {
    input_value: input,  // User input
    output_type: 'chat', // Expected output type
    input_type: 'chat',  // Input type (for chat)
    tweaks: {
      "ChatInput-EBq7W": {},
      "AstraDBToolComponent-yYelR": {},
      "ParseData-XYEzQ": {},
      "Prompt-JOFIo": {},
      "ChatOutput-LUxmd": {},
      "GroqModel-dfGx4": {}
    }
  };

  // Set the headers
  const headers = {
    'Authorization': `Bearer ${LANGFLOW_CONFIG.APPLICATION_TOKEN}`,
    'Content-Type': 'application/json',
  };

  try {
    // Send POST request with JSON payload
    const response = await axios.post(
      `https://api.langflow.astra.datastax.com/lf/${LANGFLOW_CONFIG.LANGFLOW_ID}/api/v1/run/${LANGFLOW_CONFIG.FLOW_ID}?stream=false`,
      payload,
      { headers }
    );

    // console.log('Raw API Response:', JSON.stringify(response.data, null, 2));

    // Check the response structure and extract messages
    const outputs = response.data?.outputs || [];
    if (outputs.length > 0) {
      const artifacts = outputs[0]?.outputs[0]?.artifacts;
      console.log('Artifacts:', artifacts);

      // Extract the message from artifacts
      if (artifacts && artifacts.message) {
        const extractedMessage = artifacts.message;

        // Send response to client with the extracted message
        return res.json({
          success: true,
          message: extractedMessage
        });
      } else {
        console.log('No message found in artifacts.');
        return res.json({
          success: false,
          message: "No message found in artifacts."
        });
      }
    } else {
      console.log('No valid outputs found in response.');
      return res.json({
        success: false,
        message: "No valid outputs found in response."
      });
    }
  } catch (error) {
    console.error('Chat API error:', error.response?.data || error.message);
    return res.status(500).json({
      error: "An error occurred while processing your request."
    });
  }
});

// Define the route to fetch user 1 data, including posts and stats
app.get('/user/1', async (req, res) => {
  try {
    // Fetch user data
    const userCollection = db.collection('user');
    const user = await userCollection.find({ id: '1' }).toArray();

    // Fetch related posts
    const postCollection = db.collection('post');
    const posts = await postCollection.find({ userId: '1' }).toArray();

    // Initialize totals
    let totalPosts = 0;
    let totalLikes = 0;
    let totalShares = 0;
    let totalComments = 0;
    let totalReels = 0;
    let totalCarousels = 0;
    let totalImages = 0;
    let mostLikedPost = null;
    let mostSharedPost = null;
    let mostCommentedPost = null;

    // Initialize variables to track engagement
    let totalEngagement = 0;

    // Loop through posts and calculate totals and other metrics
    posts.forEach(post => {
      totalPosts++;
      totalLikes += post.likes;
      totalShares += post.shares;
      totalComments += post.comments;

      // Track most liked, shared, and commented posts
      if (!mostLikedPost || post.likes > mostLikedPost.likes) mostLikedPost = post;
      if (!mostSharedPost || post.shares > mostSharedPost.shares) mostSharedPost = post;
      if (!mostCommentedPost || post.comments > mostCommentedPost.comments) mostCommentedPost = post;

      // Count post types
      if (post.type === 'reel') totalReels++;
      if (post.type === 'carousel') totalCarousels++;
      if (post.type === 'image') totalImages++;

      // Engagement calculation (likes + shares + comments)
      totalEngagement += post.likes + post.shares + post.comments;
    });

    // Calculate engagement rate (average engagement per post)
    const engagementRate = totalPosts > 0 ? totalEngagement / totalPosts : 0;

    // Send the aggregated data and posts to the frontend
    res.json({
      user: user[0], // Assuming there is only one user with id '1'
      totalPosts,
      totalLikes,
      totalShares,
      totalComments,
      totalReels,
      totalCarousels,
      totalImages,
      mostLikedPost,
      mostSharedPost,
      mostCommentedPost,
      engagementRate,
      posts // Include the user's posts as well
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/insights', async (req, res) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: "Input value is required." });
  }

  console.log(`Input received from client: ${input}`);

  // Construct the payload to send as JSON
  const payload = {
    input_value: input,  // User input
    output_type: 'chat', // Expected output type
    input_type: 'chat',  // Input type (for chat)
    tweaks: {
      "ChatInput-EBq7W": {},
      "AstraDBToolComponent-yYelR": {},
      "ParseData-XYEzQ": {},
      "Prompt-JOFIo": {},
      "ChatOutput-LUxmd": {},
      "GroqModel-dfGx4": {}
    }
  };

  // Set the headers
  const headers = {
    'Authorization': `Bearer ${LANGFLOW_CONFIG_SECOND.APPLICATION_TOKEN_SECOND}`,
    'Content-Type': 'application/json',
  };

  try {
    // Send POST request with JSON payload
    const response = await axios.post(
      `https://api.langflow.astra.datastax.com/lf/${LANGFLOW_CONFIG_SECOND.LANGFLOW_ID_SECOND}/api/v1/run/${LANGFLOW_CONFIG_SECOND.FLOW_ID_SECOND}?stream=false`,
      payload,
      { headers }
    );

    // console.log('Raw API Response:', JSON.stringify(response.data, null, 2));

    // Check the response structure and extract messages
    const outputs = response.data?.outputs || [];
    if (outputs.length > 0) {
      const artifacts = outputs[0]?.outputs[0]?.artifacts;
      console.log('Artifacts:', artifacts);

      // Extract the message from artifacts
      if (artifacts && artifacts.message) {
        const extractedMessage = artifacts.message;

        // Send response to client with the extracted message
        return res.json({
          success: true,
          message: extractedMessage
        });
      } else {
        console.log('No message found in artifacts.');
        return res.json({
          success: false,
          message: "No message found in artifacts."
        });
      }
    } else {
      console.log('No valid outputs found in response.');
      return res.json({
        success: false,
        message: "No valid outputs found in response."
      });
    }
  } catch (error) {
    console.error('Chat API error:', error.response?.data || error.message);
    return res.status(500).json({
      error: "An error occurred while processing your request."
    });
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
