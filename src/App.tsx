import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Modules/Header/Header";
import HomePage from './Page/Home/HomePage';
import Footer from "./Modules/Footer/Footer";
import Banner from "./Modules/Banner/Banner";
import ErrorPage from "./Page/ErrorPage/ErrorPage";
import {Offer} from "./Modules/Offer/Offer";
import {Breadcrumbs} from "./Modules/Breadcrumbs/Breadcrumbs";
import {ContactUs} from "./Page/ContactUs/ContactUs";
import {AboutUs} from "./Page/AboutUs/AboutUs";
import aboutUsData from "./Page/AboutUs/aboutUsData";
import {ItemPage} from "./Page/ItemPage/ItemPage";
import Items from "./Data/Items/Items";
import {LoginPage} from "./Page/LoginPage/LoginPage";
import {CatalogPage} from "./Page/CatalogPage/CatalogPage";

function App() {
    return (
        <Router>
            <Banner
                dayFrom={'Mon'}
                dayTo={'Thu'}
                from={'9:00'}
                to={'17:30'}
                address={'1234 Street Address City Address, 1234'}
                tel={'00 1234 5678'}/>

            <Header/>
                <Breadcrumbs/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact-us" element={<ContactUs />}/>
                    <Route path="/about-us" element={<AboutUs title={'About Us'} aboutUsData={aboutUsData} />} />
                    {Items && Items.map(item => (
                        <Route key={item.id} path={`/${item.category}/${item.subcategory}/${item.model}`} element={<ItemPage item={item} />} />
                    ))}
                    <Route path="/dashboard" element={<LoginPage/>} />
                    <Route path="*" element={<ErrorPage/>} />
                    <Route path="/catalog" element={<CatalogPage item={Items}/>}/>
                </Routes>
            <Offer className={"pt-16 pb-11 max-sm:pt-5 max-sm:pb-5"}/>
            <Footer/>
        </Router>
    );
}

export default App
