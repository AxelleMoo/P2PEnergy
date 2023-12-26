import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import Style from './Dropzone.module.css'


const Dropzone = ({title, selectedProvider, selectedContract, setTotalSavings}) => {
    // console.log(selectedContract)
    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
    
        // Create a FormData object to send the file
        const formData = new FormData();
        // console.log(selectedContract)
        formData.append('csvFile', file);
        formData.append('selectedProvider', selectedProvider);
        formData.append('selectedContract', selectedContract);
    
        try {
          // Send the file to the server using the fetch API
          const vmIp = process.env.VM_IP;

          const response = await fetch(`http://${vmIp}/upload`, {
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
        }
      }, [selectedContract, selectedProvider]);
    
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

        

    </div>
  )
}

export default Dropzone;