import React from "react";
import {Button} from "./Button";
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return(
        <div className={'hero-container'}>
            <h1>AK EVENTS</h1>
            <p>Welcome to Boogin LTD</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
    buttonSize='btn--large'>Book a Studio Session Today!
                    !</Button>
                <Button className='btns' buttonStyle='btn--outline'
                        buttonSize='btn--large'>Capital Boogs
                    !</Button>
                <Button className='btns' buttonStyle='btn--outline'
                        buttonSize='btn--large'>Book a Studio Session Today!
                    !</Button>

            </div>

        </div>

    )

}
export default HeroSection