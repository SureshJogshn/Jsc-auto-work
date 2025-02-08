import React, { createContext } from 'react';
import ReadMore from '../pages/ReadMore';
import carRepairServices from '../carRepairServices';

const DataContext = createContext();  // ✅ Correct naming

const ContextData = () => {

    return (
        <DataContext.Provider value={carRepairServices}>
            <ReadMore />  {/* ✅ Ensure it's inside Provider */}
        </DataContext.Provider>
    );
}

export default ContextData;
export { DataContext };  // ✅ Corrected export
