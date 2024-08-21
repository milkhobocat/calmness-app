import React, { useRef, useState }from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom' //to link to sign up later
import style from '../Whole Web Page/Whole Web Page/css/style.css'
import AppLogo from '../Whole Web Page/Whole Web Page/images/AppLogo.png'

export default function indext() {
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
                   
                    <li class="current"><a href="indext">WelcomePage</a></li>
                    <li><a href="home">About Us</a></li>
                    <li><a href="login">Login</a></li>
                    <li><a href="signup">SignUp</a></li>

                </ul>
            </nav>
        </div>
    </header>

    <section id="showcase">
        <div class="container">
            <p className='WelcometoCalm'>Welcome to Calmness</p>
         
            <p className='Matters'>Your Mental Health Matters</p>
           
        </div>
       
    </section>


    
    <footer>
        <p>Mood Diary Web Page, Copyright &copy; 2021</p>
    </footer>

        </div>
    )
}
