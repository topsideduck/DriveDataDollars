import React, { useState, useEffect } from 'react';
import Map from './Map'
import Menu from './Menu'

function App() {
  const [imageRecords, setImageRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selectedImageRecord, setSelectedImageRecord] = useState(null);

  const fetchImageRecords = async () => {

    try {
      setIsLoading(true);

      const imagesUrl = process.env.REACT_APP_drivedatadollars_METAGRAPH_LO_IMAGES_URL;
      if (imagesUrl == '') {
        throw new Error(`Metagraph L0 URL must be defined`);
      }

      const response = await fetch(imagesUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
    
      const jsonData = await response.json();
      const imageRecordsData = jsonData.map(subArray => {
        const [, objectData] = subArray;        
        return objectData;
      });

      console.log(imageRecordsData)

      setImageRecords(imageRecordsData);

    } catch (error) {
      setIsError(true);
      console.error("Error fetching data:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImageRecords();
  }, []);

  return (
    <>
      <Menu 
        imageRecords={imageRecords}
        isLoading={isLoading}
        isError={isError}
        selectedImageRecord={selectedImageRecord}
        handleSelect={setSelectedImageRecord} 
      />
      <Map
        imageRecords={imageRecords}
        selectedImageRecord={selectedImageRecord}
        handleSelect={setSelectedImageRecord} 
      />
    </>
  );
}

export default App;
