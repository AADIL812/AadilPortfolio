import React from 'react';
import { HStack, Image, Heading, Stack } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
import './projects.js';
function Proj() {
    return (
        <div className='container'>
            <div className='hstack-wrapper'>
                <HStack spacing='24px'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image src={require("./ai.jpg")} borderRadius='lg' />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>AI ML PROJECT</Heading>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image src={require("./website.jpg")} borderRadius='lg' />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>WEB DEV PROJECT</Heading>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image src={require("./gm.jpg")} borderRadius='lg' />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>GAME DEV PROJECT</Heading>
                            </Stack>
                        </CardBody>
                    </Card>
                </HStack>
            </div>
        </div>
    );
}

export default Proj;
