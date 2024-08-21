import React, { useRef, useState }from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom' //to link to sign up later
import style from '../Whole Web Page/Whole Web Page/css/style.css'
import AppLogo from '../Whole Web Page/Whole Web Page/images/AppLogo.png'


export default function Settings() {
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
                    <li><a href="homePage2">Record</a></li>
                    <li class="current"><a href="settings">Settings</a></li>
                    <li><a href="indext">Log Out</a></li>
                </ul>
            </nav>
        </div>
    </header>

<section id="setting1">
    <div class="container">
        <h1>Settings</h1>
    </div>
</section>


<form>
    <div class="container">
        <div id="settings">
            <div className='divStyle'>
                <label for="fname">First Name:</label> 
                <input type="text" id="fname" name="fname" maxlength="50"/><br/> 

                <label for="lname">Last Name:</label>
                <input type="text" id="lname" name="lname" maxlength="50"/><br/>

                <label for="email">Email:</label>
                <input type="text" id="email" name="email" maxlength="62"/><br/>

                <label for="number">Contact Number:</label>
                <input type="text" id="number" name="number"maxlength="13"/><br/><br/>
                
                <button formaction="changePass" class="button_ChangePassword button_h1 button_p1" >Change Password</button><br/> 
                <button formaction="homepage" class="button_SaveSettings button_h2 button_p2" >Save</button> 
            </div>
        </div>
    </div>
</form>

  

    
    <footer>
        <p>Mood Diary Web Page, Copyright &copy; 2021</p>
    </footer>



        </div>
    )
}
