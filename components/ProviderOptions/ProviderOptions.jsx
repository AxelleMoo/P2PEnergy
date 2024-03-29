import React, {useState} from 'react'

import Style from './ProviderOptions.module.css'

const ProviderOptions = ({ updateFormData }) => {
    const energyProviders = ['Engie', 'Eneco', 'Luminus', 'Frank', 'OctaPlus', 'Mega', 'Bolt', 'Energiebe', 'Trevion', 'TotalEnergies', 'Dats24', 'Andere']; // Replace with your actual providers
    const contractOptions = {
      Engie: ['Engie FLOW variabel', 'Engie DIRECT variabel', 'Engie EASY vast', 'Engie EASY variabel', 'Engie DRIVE vast'],
      Eneco: ['Eneco zon & wind flex', 'Eneco zon & wind vast'],
      Luminus: ['BasicFlex', 'ComfyFlex', 'BasicFix', 'ComfyFlex+', 'Comfy Shine', 'Comfy', 'Comfy+', 'Optimal', 'Actief+'],
      Frank: ['Frank Energie variabel'],
      Mega: ['Prepaid Flex', 'Online Flex', 'Smart Green Flex'],
      Bolt: ['Bolt Variabel Go', 'Bolt Variabel Online', 'Bolt Variabel'],
      Energiebe: ['Variable', 'Vast'],
      Trevion: ['Groene energie full spot'],
      TotalEnergies: ['Pixel', 'eMobility', 'Pixel Blue Variable', 'Pixel Blue Fixed'],
      Dats24: ['Elektriciteit Groen Variabel'],
      OctaPlus: ['Clear', 'Smart Variabel', 'Eco Clear', 'Fixed'],
      Andere: ['Andere', 'Ik weet het niet']
    }; 
  
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [selectedContract, setSelectedContract] = useState(null);

    const handleProviderChange = (e) => {
      const newProvider = e.target.value;
      setSelectedProvider(newProvider);
      updateFormData(newProvider, selectedContract);
  };

    const handleContractChange = (e) => {
        const newContract = e.target.value;
        setSelectedContract(newContract);
        updateFormData(selectedProvider, newContract);
    };

  return (
    <div className={Style.providerOptions}>
      <div className={Style.providerOptions_dropdown}>
        <div className={Style.providerOptions_dropdown_box}>
          <label htmlFor="energyProvider">Kies jouw energieleverancier:</label>
          <select  className={Style.providerOptions_dropdown_box_select}
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
        <div className={Style.providerOptions_dropdown}>
          <div className={Style.providerOptions_dropdown_box}>
            <label htmlFor="contractType">Kies welk type contract jij hebt afgesloten:</label>
            <select 
              className={Style.providerOptions_dropdown_box_select}
              id="contractType"
              value={selectedContract || ''}
              onChange={handleContractChange}
            >
              <option className={Style.providerOptions_dropdown_box_option} value="" disabled>
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

    </div>
  )
}

export default ProviderOptions