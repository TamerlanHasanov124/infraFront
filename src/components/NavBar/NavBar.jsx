import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router';
import ProfileIcon from '../Icons/ProfileIcon';
import SettingsIcon from '../Icons/SettingsIcon';

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div className="navBar">
            <svg className="logo" width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.911 18.495a16.785 16.785 0 0 0 4.08 2.739c.81.385 1.773.35 2.55-.093 1.312-.748 2.453-1.649 3.557-2.645 2.339-2.113 3.702-5.021 3.792-8.087l.104-3.576c.013-.416.001-1.333.001-1.333a36.162 36.162 0 0 0-1.581-.213c-1.635-.196-3.263-.39-4.691-1.264l-1.02-.623a2.768 2.768 0 0 0-2.867 0l-.976.597c-1.633.998-3.624 1.187-5.55 1.37-.437.042-.87.083-1.295.133 0 0-.013.922 0 1.344l.104 3.564c.09 3.067 1.453 5.975 3.792 8.088ZM4.01 6.402c0 .16.002.307.005.414l.104 3.564c.082 2.786 1.32 5.439 3.464 7.374a15.782 15.782 0 0 0 3.838 2.578 1.772 1.772 0 0 0 1.626-.059c1.227-.7 2.31-1.55 3.381-2.519 2.143-1.935 3.382-4.588 3.463-7.374l.105-3.575c.003-.112.005-.27.005-.438-.234-.03-.472-.058-.715-.087l-.027-.004a34.329 34.329 0 0 1-1.661-.227c-1.122-.19-2.296-.5-3.396-1.172l-1.019-.622a1.768 1.768 0 0 0-1.825 0l-.976.596c-1.16.709-2.44 1.044-3.673 1.243-.765.123-1.589.202-2.36.276l-.339.032Z" clipRule="evenodd"></path>
                <path fillRule="evenodd" d="M11 16.5v-9h2v9h-  2Z" clipRule="evenodd"></path>
                <path fillRule="evenodd" d="M16.5 13h-9v-2h9v2Z" clipRule="evenodd"></path>
            </svg>
            <ul>
                <li>
                    <button className="liBtn">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z"></path>
                        </svg>
                    </button>
                </li>
                <li>
                    <button className="liBtn">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2Zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5Zm5 6H4v8h16v-8Z"></path>
                        </svg>
                    </button>   
                </li>
                <li>
                    <button className="liBtn">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12h4v9H3v-9Zm14-4h4v13h-4V8Zm-7-6h4v19h-4V2Z"></path>
                        </svg>
                    </button>
                </li>
                <li>
                    <button  onClick={() => {navigate('./settings')}} className="liBtn">
                        <SettingsIcon/>
                    </button>
                </li>
                <li>
                    <button onClick={() => {navigate('./profile')}} className="liBtn">
                       <ProfileIcon/>
                    </button>
                </li>
            
                <li>
                    <button className="liBtn">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.783 2.826 12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976ZM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604ZM12 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm-4.473 5a4.5 4.5 0 0 1 8.946 0H7.527Z"></path>
                        </svg>
                    </button>
                </li>
            </ul>
            <button className="logOutBtn">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5Zm13-6v-3h-7v-2h7V8l5 4-5 4Z"></path>
              </svg>
            </button>
        </div>
    );
}

export default NavBar;
