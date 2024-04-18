

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navigate} from "react-router-dom";
import { createSearchParams,useSearchParams,useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter,Image,Heading} from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import './skills.css';
function S(){
    
    return (
        <div>
            <Card>
  <CardBody>
  <h1>SKILLS</h1>
            <h2>Programming:</h2>
<Text as='i'>As a computer science engineer, I have a strong foundation in programming languages such as Python, JavaScript, Java, and C++. I'm experienced in building web applications, developing algorithms, and solving complex problems. My proficiency extends to using frameworks and libraries like React.js, Node.js, and TensorFlow.</Text>

<h2>Problem Solving:</h2>
<Text as='i'>With a keen analytical mind and a systematic approach, I excel in problem-solving. Whether it's debugging code, optimizing algorithms, or designing efficient solutions, I enjoy tackling challenges head-on and finding creative ways to overcome them.</Text>

<h2>Software Development:</h2>
<Text as='i'>I'm well-versed in the software development lifecycle, from requirement analysis and design to implementation, testing, and deployment. I have experience working in agile environments and collaborating with cross-functional teams to deliver high-quality software products.</Text>
    
  </CardBody>
</Card>
            
            
            <Divider orientation='horizontal' />

            <HStack spacing='24px'>
            <Card maxW='sm'>
  <CardBody>
    <Image
      src= {require("./python_lang.jpg")}
      
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Python</Heading>
      
      
    </Stack>
  </CardBody>
  
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src= {require("./html.jpg")}
      
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    <Heading size='md'>HTML</Heading>
      
      
      
    </Stack>
  </CardBody>
  
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src= {require("./code.jpg")}
      
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      
    <Heading size='md'>JAVA SCRIPT</Heading>
      
    </Stack>
  </CardBody>
  
</Card>

            </HStack>
            
            

            
        </div>
    );
}
export default S;