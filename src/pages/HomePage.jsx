import React from 'react'
import NavBar from '../components/navBar/NavBar'
import Hero from '../components/hero/Hero'
import AboutUs from '../components/aboutUs/AboutUs'
import Features from '../components/features/Features'
import Apartaments from '../components/apartaments/Apartaments'
import Localization from '../components/localization/Localization'
import Map from '../components/map/Map'
import Gallery from '../components/gallery/Gallery'
import Deweloper from '../components/deweloper/Deweloper'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Cta from '../components/cta/Cta'
const HomePage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <AboutUs />
            <Features />
            <Apartaments />
            <Cta />
            <Localization />
            <Map />
            <Gallery />
            <Deweloper />
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage