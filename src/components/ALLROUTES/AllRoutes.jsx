import React from 'react';
import {Routes,Route} from "react-router-dom"
import AllData from '../AllData';
import SingleData from '../SingleData';
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AllData/>} />
            <Route path="/single" element={<SingleData/>} />
        </Routes>
    );
};

export default AllRoutes;