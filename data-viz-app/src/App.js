import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import DataVisualization from './components/DataVisualization';
import { cleanData } from './utils/dataClean';
import { analyzeData } from './utils/openai';
import './App.css';

function App() {
  // State variables to store our data, analysis results, and API key
  const [data, setData] = useState(null);
  const [analysis, setAnalysis] = useState('');
  const [apiKey, setApiKey] = useState('');

  // This function is called when data is uploaded
  const handleDataUploaded = (rawData) => {
    const cleanedData = cleanData(rawData);
    setData(cleanedData);
  };

  // This function is called when the analyze button is clicked
  const handleAnalyze = async () => {
    if (data && apiKey) {
      const result = await analyzeData(data, apiKey);
      setAnalysis(result);
    }
  };

  // The component's render method
  return (
    <div className="App">
      <h1>Data Visualization and Analysis App</h1>
      <input 
        type="text" 
        placeholder="Enter OpenAI API Key" 
        value={apiKey} 
        onChange={(e) => setApiKey(e.target.value)} 
      />
      <FileUpload onDataUploaded={handleDataUploaded} />
      {data && <DataVisualization data={data} />}
      <button onClick={handleAnalyze}>Analyze Data</button>
      {analysis && <div><h2>Analysis:</h2><p>{analysis}</p></div>}
    </div>
  );
}

export default App;