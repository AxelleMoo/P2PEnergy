import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import Style from './Dropzone.module.css'
import { Loader } from '../../components/componentsindex'



const Dropzone = ({title, selectedProvider, selectedContract}) => {
    const [loading, setLoading] = useState(false);
    const [totalSavings, setTotalSavings] = useState(null);
    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
    
        // Create a FormData object to send the file
        const formData = new FormData();
        // console.log(selectedContract)
        formData.append('csvFile', file);
        formData.append('selectedProvider', selectedProvider);
        formData.append('selectedContract', selectedContract);
    
        try {
          setLoading(true);

          //Does not work because env not avaible for client
          // const vmIp = process.env.VM_IP;
          // console.log(process.env);

          const vmIp = "34.79.250.28";
          const response = await fetch(`http://localhost:8000/upload`, {
            method: 'POST',
            body: formData,
          });
          if (response.ok) {
            // File uploaded successfully
            const data = await response.json();
            console.log('Server response:', data);

            setTotalSavings(data.value);
          } else {
            // Handle errors
            console.error('Server error:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error:', error.message);
        } finally {
          setLoading(false);
        }
      }, [selectedContract, selectedProvider, setTotalSavings]);
    
    const { getRootProps, getInputProps } = useDropzone({
        onDrop
      });
      
  return (
    <div className={Style.dropzone}>
        <div className={Style.dropzone_box} {...getRootProps()}>
            <input {...getInputProps()}/>
            <div className={Style.dropzone_box_input}>
                <p>{title}</p>
            </div>
        </div>

        {loading && (
          <Loader/>
        )}
        

        {totalSavings && !loading && (
            <div className={Style.dropzone_savings}>
             <h2>Jouw gesimuleerde besparing over één jaar bedraagt: </h2>
             <h1>{totalSavings.toFixed(2)} euro</h1>
            </div>)}

    </div>
  )
}

export default Dropzone;