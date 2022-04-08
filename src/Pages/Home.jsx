import React from "react";
import Header from "../components/Header";
// import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <Header />
            <div>
                <div className="p-32 bg-cover bg-hero-desktop">
                    <h2 className="my-8 leading-tight font-play font-black text-4xl text-cp-black"> I{"'"}m Todd Grilliot</h2>
                    <h1 className="my-8 leading-tight font-mont font-extrabold text-7xl text-white">
                        A Front-end Web Developer
                    </h1>
                    <hr className="my-8 w-24 border-4 border-cp-yellow" />
                    <p className="my-8 font-mont font-medium  text-white w-2/5">Welcome to my website! Here I{"'"}ve hosted some of my favorite projects so you can play with them. Take a look around and let me know what you think!</p>
                    <button className="my-1 py-4 px-8 font-mont font-bold text-sm tracking-wider bg-cp-black text-white  rounded">SEE MY WORK</button>
                </div>

            </div>

        </div>
    );
}

export default Home;