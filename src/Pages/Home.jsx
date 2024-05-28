// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from '../components/home/Banner';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import Products from '../components/home/Products';

const home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Products/>
            <Footer></Footer>
        </div>
    );
};

export default home;