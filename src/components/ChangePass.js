
import React, { useRef, useState }from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom' //to link to sign up later
import style from '../Whole Web Page/Whole Web Page/css/style.css'
import AppLogo from '../Whole Web Page/Whole Web Page/images/AppLogo.png'

export default function ChangePass() {
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
                    <li><a href="settings">Settings</a></li>
                    <li class="current"><a href="">My Account</a></li>

                </ul>
            </nav>
        </div>
    </header>

    <section id="changepassword1">
        <div class="container">
            <h1>Change Password</h1>
        </div>
    </section>


    <form>
        <div class="container">
            <div id="changepassword">
                <div className='divStyle'>
                    <label for="cPass">Current Password:</label> 
                    <input type="text" id="cPass" name="cPass"/><br/> 
                    <label for="nPass">New Password:</label>
                    <input type="text" id="nPass" name="nPass"/><br/>
                    <label for="number">Repeat New Password:</label>
                    <input type="text" id="rnPass" name="rnPass"/><br/><br/><br/>
                    <button formaction="settings" class="button_SavePassword button_h2 button_p2" >Save</button><br/> 
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
