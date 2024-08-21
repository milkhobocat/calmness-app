import React, { useRef, useState }from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom' //to link to sign up later
import style from '../Whole Web Page/Whole Web Page/css/style.css'
import AppLogo from '../Whole Web Page/Whole Web Page/images/AppLogo.png'
import Relax from '../Whole Web Page/Whole Web Page/images/Relax.png'
import Music from '../Whole Web Page/Whole Web Page/images/Music.png'
import Q_and_A from '../Whole Web Page/Whole Web Page/images/Q_and_A.png'


export default function Home() {
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
                  
                    <li><a href="indext">WelcomePage</a></li>
                    <li class="current"><a href="home">About Us</a></li>
                    <li><a href="login">Login</a></li>
                    <li><a href="signup">SignUp</a></li>
                </ul>
            </nav>
        </div>
    </header>


  
    <section id="main">
        <div class="container">
            <article id="main-col">
                <h1 class="page title" className='divStyle'>About Us !</h1>
                <p class='dark'>
                This website was created to support and aid people who struggle with mental health issues, our website can also be used by any user who wishes to do so. We developed this website because we feel that mental health is a topic which does not receive the attention it requires. We designed this website for those who would like to reach out and receive support for what they are going through.
                </p>

            </article>

            <aside id="sidebar">
                <div class="dark">
                <h3 className='divStyle'>What we do !</h3>
                <p>
                Our service provides a platform for people who wish to keep up a online diary almost of what they are going through day in day out. We allow the user to create an account and log in whenever they wish to do so and record their mood. If the user wishes to do so they can also listen to music by login into their spotify account. Finally, if they wish to they would be able to contact a professional regarding how they feel.
                </p>
            </div>
            </aside>
        </div>
    </section>

  
     <section id="boxes">
        <div class="containerboxes">
          
            <div class="box">
                <img src={Relax} className='Relax_img'/>
                <h3>Record Moods Daily</h3>
                <p>Login or create an account and be able to submit your mood whenever you wish to do so. Our personalised emojis and a text field which is optional to fill out makes recording your mood very quick and smooth.</p>
            </div>
            <div class="box">
                <img src={Music} className='Music_img' />
                <h3> Listen to Music</h3>
                <p>Listen to your favourite sound tracks or artists while you record your mood. You will be able to log into your spotify account and play any tracks you wish to while you record your mood, helping you to stay calm.</p>
            </div>
            <div class="box">
                <img src={Q_and_A} className='Q_and_A_img'/>
                <h3>Contact a professional</h3>
                <p>Having some tough times lately and want to talk to a professional? We have a linked a professional clinic to our website, that way you will be able to reach out and contact the clinic whenever you wish to do so.</p>
            </div>
        </div>
    </section>
    
    <footer>
        <p>Mood Diary Web Page, Copyright &copy; 2021</p>
    </footer>

        </div>
    )
}
