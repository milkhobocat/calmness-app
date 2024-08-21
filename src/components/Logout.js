import React, { useRef, useState }from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom' //to link to sign up later
import style from '../Whole Web Page/Whole Web Page/css/style.css'
import AppLogo from '../Whole Web Page/Whole Web Page/images/AppLogo.png'
import Relax from '../Whole Web Page/Whole Web Page/images/Relax.png'
import Music from '../Whole Web Page/Whole Web Page/images/Music.png'
import Q_and_A from '../Whole Web Page/Whole Web Page/images/Q_and_A.png'

export default function Logout() {
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
                    
                    <li><a href="homepage">Home Page</a></li>
                    <li><a href="settings">Settings</a></li>
                    <li class="current"><a href="logout">Log Out</a></li>
                </ul>
            </nav>
        </div>
    </header>


   

   
    <section id="main">
        <div class="container">
            <article id="main-col">
                <h1 className='About'>About Us</h1>
                <p class="dark">
                    Welcome to our Web Page, Calmness. This page was created in 2021 as part of a University project to try and raise awareness for mental health issues. The creators of this website think mental health is a very big issue which isn't receving the attention it needs. With our website we attmept to provide a service to people who don't have someone to talk to or listen about what is happening in their lives. We are trying to work on a service where people can be heard.
                </p>
            </article>

            <aside id="sidebar">
                <div class="dark">
                <h3 className='Whatwedo'>What we do</h3>
                <p>
                    At the moment as this is a developing project there are only a small amount of services we provide. Using our website you would be able to choose from a small choice of emojis that represent how you are feeling. Once you choose the one that best describes your mood you will be able to talk about your choice and how your day is going.
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
                <p>Whenever you want, you can log into your account and record your mood, being able to choose how you are feeling and talking about your day.</p>
            </div>
            <div class="box">
            <img src={Music} className='Music_img' />
                <h3>Listen to Music</h3>
                <p>If you are typing away and it's getting a little boring and quite, click onto the spotify picture when your log in and fire your tunes away!
                </p>
            </div>
            <div class="box">
            <img src={Q_and_A} className='Q_and_A_img'/>
                <h3>Contact a professional</h3>
                <p>If you feel like you need to arrange an appointment with a professional you will be able to lick on our icon and be brought straight to a clinic's website</p>
            </div>
        </div>
    </section>
    
    <footer>
        <p>Mood Diary Web Page, Copyright &copy; 2021</p>
    </footer>



        </div>
    )
}
