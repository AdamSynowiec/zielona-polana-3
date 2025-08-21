import React from 'react';
import InvestMap from '../../assets/images/map.png';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyles = [
    {
        featureType: "all",
        elementType: "geometry.fill",
        stylers: [{ weight: "2.00" }]
    },
    {
        featureType: "all",
        elementType: "geometry.stroke",
        stylers: [{ color: "#9c9c9c" }]
    },
    // ... continue from SnazzyMaps JSON
];

const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974
};

const containerStyle = {
    width: '100%',
    height: '400px'
};


const Map = () => {
    return (
        <section id="udogodnienia">
            <div className="bg-white">
                <div className="container max-w-[1596px] mx-auto px-6 ">
                    <h2 className='font-poppins text-[#55694B] text-4xl md:text-5xl lg:text-[65px] font-extralight py-24'>Infrastruktura <br />i udogodnienia</h2>
                </div>
            </div>
            <div className="bg-[#55694B]">
                <div className="container max-w-[1596px] mx-auto px-6 py-6 lg:py-24">
                    <img src={InvestMap} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Map;
