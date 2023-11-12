import * as React from 'react';
import Header from '../../components/constant-components/header';
import Home from '../events/EventPage';
export default function WelcomeHome() {
  
    return (
      <div>
        <Header/>
        <h1> Welcome to Boston City Events!</h1>
        <div class="buttons">
          <a href="/EventPage"></a>
        </div>
        <a href="/">
                <input type="button" class="btn" value="Home"/>
            </a>
            <a href="/sign-up">
                <input type="button" class="btn" value="Sign Up"/> 
            </a>

      </div>
    )
  }