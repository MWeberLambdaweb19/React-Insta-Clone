import React from 'react';
import webstagram from './webstagram.png';
import './searchbar.scss';

export default function SearchBar(){
    return(
    <div>    
        <div className="Search">

            <div className="left">
                <i className="fas fa-camera fa-2x"></i>
                <img className="logo" src={webstagram} alt="Webstagram"/>
            </div>
            
            <div className="center">    
                <form>
                    <input type="text" placeholder="Search">
                    
                    </input>
                </form>
            </div>

            <div className="right">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>

        </div>
    </div>
    )
};