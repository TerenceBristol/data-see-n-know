export const cleanData = (data) => {
    return data.map(row => {
      const cleanedRow = {};
      Object.keys(row).forEach(key => {
        // Remove whitespace from the key
        const cleanKey = key.trim();
        let value = row[key];
        
        // Check if the value is a string before trying to trim
        if (typeof value === 'string') {
          value = value.trim();
          
          // Try to convert the value to a number if possible
          if (!isNaN(value) && value !== '') {
            value = parseFloat(value);
          }
        } else if (value === null || value === undefined) {
          // Convert null or undefined to empty string
          value = '';
        }
        
        // Add the cleaned key-value pair to the new row object
        cleanedRow[cleanKey] = value;
      });
      return cleanedRow;
    // Filter out any rows that are completely empty
    }).filter(row => Object.values(row).some(value => value !== ''));
  };