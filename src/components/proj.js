

import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import ReactDOM from 'react-dom/client';
import {Navigate} from "react-router-dom";
import { createSearchParams,useSearchParams,useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter,Image,Heading} from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import './proj.css';

function P() {
    return (
        <div className='container'>
            <div className='center'>
                <HStack>
                <Card maxW='sm'>
  <CardBody>
    <Image
      src= {require("./education.jpg")}
      
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>EDUCATIONAL DETAILS</Heading>
      <Text>College: VIT University</Text>
        <Text>Course: Btech Computer Science</Text>
        <Text>Year of Graduation: 2026</Text>
      
      
    </Stack>
  </CardBody>
  
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src= {require("./activities.jpg")}
      
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    <Heading size='md'> EXTRA CURRICULAR ACTIVITIES</Heading>

    <Text>Music Club - Member</Text>
    <Text>Chess Club - President</Text>
    <Text>Drama Club - Participant</Text>
      
      
      
    </Stack>
  </CardBody>
  
</Card>


                </HStack>
                
                        
            </div>
        </div>
    );
}

export default P;
