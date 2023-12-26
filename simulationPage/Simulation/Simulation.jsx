import React, { useState } from 'react';
import { Dropzone } from '../simulationIndex';
import { ConOrProsument } from '../../components/componentsindex';
import Style from './Simulation.module.css'
import Image from 'next/image'

import images from '../../img'

const Simulation = () => {
  const energyProviders = ['Engie', 'Eneco']; // Replace with your actual providers
  const contractOptions = {
    Engie: ['Engie FLOW variabel', 'Engie DIRECT variabel', 'Engie EASY vast', 'Engie EASY variabel', 'Engie DRIVE vast'],
    Eneco: ['Eneco zon & wind flex', 'Eneco zon & wind vast'],
  }; 

  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedContract, setSelectedContract] = useState(null);
  const [totalSavings, setTotalSavings] = useState(null);
  const [clientType, setClientType] = useState(null);


  const handleProviderChange = (event) => {
    const { value } = event.target;
    setSelectedProvider(value);
    setSelectedContract(null);
  };

  const handleContractChange = (event) => {
    const { value } = event.target;
    setSelectedContract(value);
  };

  const handleTypeClientChange = (option) => {
    setClientType(option);
  }

  return (
    <div className={Style.simulation}>
      <h3>Ik ben een:</h3>
      <ConOrProsument setClientType={setClientType}/>
      <div className={Style.simulation_dropdown}>
        <div className={Style.simulation_dropdown_box}>
          <label htmlFor="energyProvider">Kies jouw energieleverancier:</label>
          <select  className={Style.simulation_dropdown_box_select}
            id="energyProvider"
            value={selectedProvider || ''}
            onChange={handleProviderChange}
          >
            <option value="" disabled>
              Kies uit de menu
            </option>
            {energyProviders.map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedProvider && (
        <div className={Style.simulation_dropdown}>
          <div className={Style.simulation_dropdown_box}>
            <label htmlFor="contractType">Kies welk type contract jij hebt afgesloten:</label>
            <select 
              className={Style.simulation_dropdown_box_select}
              id="contractType"
              value={selectedContract || ''}
              onChange={handleContractChange}
            >
              <option className={Style.simulation_dropdown_box_option} value="" disabled>
                Kies uit de menu
              </option>
              {contractOptions[selectedProvider].map((contract) => (
                <option key={contract} value={contract}>
                  {contract}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

    <Dropzone title="UPLOAD JOUW KWARTIERWAARDEN (.csv bestand)" selectedProvider={selectedProvider} selectedContract={selectedContract} setTotalSavings={setTotalSavings}/>
    {totalSavings &&
            <div className={Style.dropzone_savings}>
             <h2>Jouw gesimuleerde besparing over één jaar bedraagt: </h2>
             <h1>{totalSavings.toFixed(2)} euro</h1>
            </div>}
    </div>
  );
};

export default Simulation;
