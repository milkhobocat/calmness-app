import React, { useRef, useState }from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom' //to link to sign up later
import style from '../Whole Web Page/Whole Web Page/css/style.css'
import AppLogo from '../Whole Web Page/Whole Web Page/images/AppLogo.png'

export default function SubmitFeelings() {
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
              
                <li><a href="homePage.html">Home Page</a></li>
                <li class="current"><a href="homePage2">Record</a></li>
                <li><a href="settings">Settings</a></li>
                <li><a href="logout">Log Out</a></li>

            </ul>
        </nav>
    </div>
</header>

 <head>
   <title>Textarea Elements</title>
 </head>

   <form>
     <label for="multiLineInput"> 
       <p>Tell us more, your Feelings matter to us!</p>
       <p><textarea rows="10" cols="80" id="multiLineInput"></textarea></p>
       <div class="container">
        <div id="settings">
            <div className='divStyle'>
                <button formaction="homepage" class="button_SaveSettings button_h2 button_p2" >Save</button> 
            </div>
        </div>
    </div>
     </label> 
   
   </form>

   <footer>
    <p>Mood Diary Web Page, Copyright &copy; 2021</p>
</footer>

        </div>
    )
}
