import React from 'react'
import Navbar from "./Components/Navbar/Navjs";
import Home from './Components/Firstpage/Home';
import Second from './Components/Secpage/Second';
import Third from './Components/Thrdpage/Third';
import Forth from './Components/Schedulepage/Forth';
import GoToTop from './Components/Topbutt/goToTop';
import Fifth from './Components/Fifthpage/Fifth';

function Appmain() {
    return (
        <div>
            <Navbar />
            <GoToTop />
            <Home />
            <Second />
            <Third />
            <Forth />
            <Fifth />
        </div>
    )
}

export default Appmain