import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation();
    return (
        <>
            <Header />
            {navigation.state === 'loading' ? 'Loading' : <Outlet />}
        </>
    );
};

export default Home;