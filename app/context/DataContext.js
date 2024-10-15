// context/DataContext.js
'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    // Charger les données depuis le localStorage au démarrage
    useEffect(() => {
        const storedInfos = localStorage.getItem('infosComposants');
        if (storedInfos) {
            setData(JSON.parse(storedInfos));
        }
    }, []);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};


export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};