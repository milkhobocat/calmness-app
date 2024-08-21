import React, { useRef, useState }from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom' //to link to sign up later
import style from '../Whole Web Page/Whole Web Page/css/style.css'
import AppLogo from '../Whole Web Page/Whole Web Page/images/AppLogo.png'
import Angry from '../Whole Web Page/Whole Web Page/images/Angry.png'
import Content from '../Whole Web Page/Whole Web Page/images/Content.png'
import Happy from '../Whole Web Page/Whole Web Page/images/Happy.png'
import Joyful from '../Whole Web Page/Whole Web Page/images/Joyful.png'
import Sad from '../Whole Web Page/Whole Web Page/images/Sad.png'
import Tired from '../Whole Web Page/Whole Web Page/images/Tired.png'
import Confused from '../Whole Web Page/Whole Web Page/images/Confused.png'
import Depressed from '../Whole Web Page/Whole Web Page/images/Depressed.png'
import Disappointed from '../Whole Web Page/Whole Web Page/images/Disappointed.png'

export default function Homepage2() {
    return (
        <div>
              <header>
      
        <div class="container">
            <div id="branding">
            
            <img src={AppLogo} className='App_Logo'/>     
                <h1>Calmness</h1>
            </div>
            <nav>
                <ul>
                 
                    <li><a href="homepage">Home Page</a></li>
                    <li class="current"><a href="homePage2">Record</a></li>
                    <li><a href="settings">Settings</a></li>
                    <li><a href="logout">Log Out</a></li>

                </ul>
            </nav>
        </div>
    </header>

    <section id="showcase2">
            <h1>How Are You Feeling Today?</h1>
            <h2>Please tap on the emoji that best describes you</h2>
        <div class="containerboxes2">
            
            
            <a href ="submit-feelings"> 
            <img src={Angry} className='angry_img'/> 
            <img src={Content} className='Content_img' />
            <img src={Disappointed} className='Disappointed_img' />
            <img src={Happy} className='Happy_img' />
            <img src={Sad} className='Sad_img' />
            <img src={Tired} className='Tired_img' />
            <img src={Confused} className='Confused_img'/>
            <img src={Depressed} className='Depressed_img'/>
            <img src={Joyful} className='Joyful_img' />
        </a> 
        </div>

    </section>
 
    <footer>
        <p>Mood Diary Web Page, Copyright &copy; 2021</p>
    </footer>
        </div>
    )
}
