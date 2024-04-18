

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navigate} from "react-router-dom";
import { createSearchParams,useSearchParams,useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import './home.css';

function H(){

    

    
    return (
        <div className='container'>

        
        
        <p>NAME : AADIL MOHAMED PUTHIYAVEETIL

        </p>
        <p>
            AGE: 20
        </p>
        <p>
            OCCUPATION: STUDENT
        </p>
        <img src={require("./arp.jpeg")} className="resized-image"/>

        


            
        </div>
    );
}

export default H;