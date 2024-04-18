
import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Divider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

import { Image, Heading, Stack } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon , EmailIcon} from '@chakra-ui/icons';
import './contact.css';
function Contact(){
    return (
        <div className='container'>
            <div className='hstack-wrapper'>
                <HStack spacing='24px'>
                    <Card >
                        <CardBody>
                            
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>CONTACT DETAILS</Heading>

                                <HStack>
                                    <PhoneIcon></PhoneIcon>
                                    <Text>7356863350</Text>
                                </HStack>
                                <HStack>
                                    <EmailIcon></EmailIcon>
                                    <Text>aadil.mohamed2022@vitstudent.ac.in</Text>
                                </HStack>
                                <a href='https://www.linkedin.com/in/aadil-mohamed-/'><img src={require("./linkedin.png")}></img></a>


                            </Stack>
                        </CardBody>
                    </Card>
                    
                </HStack>
            </div>
        </div>
    );
}

export default Contact;