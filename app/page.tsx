import React from "react";
import Hero from "./home/HeroSection";
import Services from "./home/ServicesSection";
import PeopleMatter from "./home/PeopleMatter";
import HackersNeverStop from "./home/HackersNeverStop";
import Footer from "./home/FooterSection";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <Footer/>
            <div className="bg-custom-radial">
                <PeopleMatter />
                <HackersNeverStop />
            </div>
            <Services />
        </div>
    );
}
