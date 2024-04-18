
import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Navigate} from "react-router-dom";
import { createSearchParams,useSearchParams,useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Image, Heading, Stack } from '@chakra-ui/react';
function Hobby(){
    return (
        <div>
            <Card>
  <CardBody>
            <h1>
            Hobbies
            </h1>
            <h2>Music:</h2>
            <Text as='i'>Apart from coding, I have a deep passion for music. Playing musical instruments like the guitar, piano, and drums is not just a hobby for me; it's a form of expression and relaxation. I enjoy exploring different genres, composing melodies, and jamming with friends.</Text>
            <h2>Coding Projects:</h2>
            <Text as='i'>Coding isn't just a profession; it's also a hobby. I love working on side projects that allow me to explore new technologies, experiment with innovative ideas, and enhance my skills. Whether it's building a personal website, developing a mobile app, or contributing to open-source projects, I'm always eager to embark on new coding adventures.</Text>
            <h2>Learning:</h2>
            <Text as='i'>Continuous learning is a cornerstone of my personal and professional growth. I'm constantly seeking out new opportunities to expand my knowledge and acquire new skills. Whether it's through online courses, tutorials, or tech meetups, I enjoy staying up-to-date with the latest advancements in technology and honing my expertise.</Text>
  </CardBody>
</Card>

        <HStack>
        <Card maxW='sm'>
                        <CardBody>
                            <Image src={require("./gtar.jpg")} borderRadius='lg' />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>MUSIC</Heading>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image src={require("./game.jpg")} borderRadius='lg' />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>GAMING</Heading>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image src={require("./football.jpg")} borderRadius='lg' />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>FOOTBALL</Heading>
                            </Stack>
                        </CardBody>
                    </Card>

        </HStack>
        </div>
    );
}
export default Hobby;