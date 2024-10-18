// // context/DataContext.js
// 'use client'
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//     const [data, setData] = useState([]);

//     // Charger les données depuis le localStorage au démarrage
//     useEffect(() => {
//         const storedInfos = localStorage.getItem('infosComposants');
//         if (storedInfos) {
//             setData(JSON.parse(storedInfos));
//         }
//     }, []);

//     return (
//         <DataContext.Provider value={{ data, setData }}>
//             {children}
//         </DataContext.Provider>
//     );
// };


// export const useData = () => {
//     const context = useContext(DataContext);
//     if (!context) {
//         throw new Error('useData must be used within a DataProvider');
//     }
//     return context;
// };



'use client';
import React, { createContext, useContext, useState } from 'react';

// Créer le contexte
const DataContext = createContext();

// Créer le fournisseur de données
export const DataProvider = ({ children }) => {
  const [indepArray, setIndepArray] = useState(null);  // Array FR ou EN
  
  const updateData = (newArray) => {
    setIndepArray(newArray);  // Met à jour l'array actif
  };

  return (
    <DataContext.Provider value={{ indepArray, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

// Hook personnalisé pour utiliser les données
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
