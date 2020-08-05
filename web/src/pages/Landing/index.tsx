import React from 'react'
import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import lanfingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="proffy"/>
                    <h2>your study platform</h2>
                </div>

                <img 
                    src={lanfingImg} 
                    alt="Study Platform" className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Study"/>
                        Study
                    </Link>
                    <Link to="give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Give classes"/>
                        Give classes
                    </Link>
                </div>

                <span className="total-connections">
                    Total of 200 conexions <img src={purpleHeartIcon} alt=""/>
                </span>
            </div>
        </div>
    )
}

export default Landing;