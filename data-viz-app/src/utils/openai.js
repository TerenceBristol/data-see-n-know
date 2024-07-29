import axios from 'axios';

// This function takes the data and API key, sends a request to OpenAI, and returns the analysis
export const analyzeData = async (data, apiKey) => {
  // Create a prompt for the AI model
  const prompt = `Analyze the following data and provide insights:\n${JSON.stringify(data)}`;

  try {
    // Send a POST request to the OpenAI API
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4-0125-preview', // Specify the model to use
        messages: [{ role: 'user', content: prompt }], // The messages to send to the model
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`, // Include the API key in the headers
          'Content-Type': 'application/json',
        },
      }
    );

    // Return the content of the AI's response
    return response.data.choices[0].message.content;
  } catch (error) {
    // If there's an error, log it and return an error message
    console.error('Error calling OpenAI API:', error);
    return 'Error analyzing data';
  }
};