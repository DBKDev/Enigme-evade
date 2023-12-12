import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DetailsComponentDom from '../Components/DetailsComponentsDomicile';
import { Link } from 'react-router-dom';


const PageDetails = () => {
    return <>
    <Header/>
    <DetailsComponentDom />
    <Footer/>
    </>;
}
 
export default PageDetails;