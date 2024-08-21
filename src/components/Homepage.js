import React, { useRef, useState }from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom' //to link to sign up later
import style from '../Whole Web Page/Whole Web Page/css/style.css'
import AppLogo from '../Whole Web Page/Whole Web Page/images/AppLogo.png'
import SPOTIFY_LOGO from '../Whole Web Page/Whole Web Page/images/SPOTIFY_LOGO.png'
import THERAPIST_ from '../Whole Web Page/Whole Web Page/images/THERAPIST_.png'
import JOURNAL from '../Whole Web Page/Whole Web Page/images/JOURNAL.png'

export default function homepage() {
    return (
        <div>
              <header>
       
        <div class="container">
            <div id="branding">
              
                <img src={AppLogo} className='App_Logo'/>
                <span className='C'>C</span>
                <span className='A'>A</span>
                <span className='L'>L</span>
                <span className='M'>M</span>
                <span className='N'>N</span>
                <span className='E'>E</span>
                <span className='S'>S</span>
                <span className='S2'>S</span>

            </div>
            <nav>
                <ul>
                 
                    <li class="current"><a href="homepage">Home Page</a></li>
                    <li><a href="homePage2">Record</a></li>
                    <li><a href="settings">Settings</a></li>
                    <li><a href="indext">Log Out</a></li>
                    

                </ul>
            </nav>
        </div>
    </header>

 <section id="main">
    <div class="container1">
            <h1 className= 'WelcomeBackk'>Welcome Back!</h1>
    </div>
</section>
<section id="main">
    <div class="container2">
            <h1 className='Jumpbackk'> Jump back into your favourite activity</h1>
    </div>
</section>


 <section id="boxes">
    <div class="containerboxes">
      
        <div class="box">
            <a href="homePage2">
            <img src={JOURNAL} className='JOURNAL_img'/>
        </a>
            <h3>Record Moods Daily</h3>
        </div>
        <div class="box">
            <a href="https://accounts.spotify.com/en/status">
            <img src={SPOTIFY_LOGO} className='SPOTIFY_LOGO_img'/>
        </a>
            <h3>(Example) Listen to Music</h3>  
        </div>
        <div class="box">
            <a href="https://www.aspencounsellingservices.com/">
            <img src={THERAPIST_} className ='THERAPIST_img'/>
        </a>
            <h3>Contact a professional</h3>
        </div>
    </div>
</section>
    
    <footer>
        <p>Mood Diary Web Page, Copyright &copy; 2021</p>
    </footer>

        </div>
    )
}
