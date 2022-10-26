import { Flex } from '@chakra-ui/react';
import { customTheme } from '@myStyles/GlobalStyles';
import React from 'react';
import Myfooter from './Myfooter';
import MyHeader from './MyHeader';

// import { Container } from './styles';

function MyLayout ({children}) {
    return (
        <Flex direction={'column'} minH={'110vh'} bg={customTheme.colors[15]} justifyContent={'space-between'}>
            <MyHeader/>
            {children}
            <Myfooter/>
        </Flex>
    )
}

export default MyLayout;