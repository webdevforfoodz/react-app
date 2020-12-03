import React from 'react';
import '../css/birds.css'

function Birds() {
    return(
        <div className="bird-wrapper">
            <div class="bird-container bird-container--one">
                <div class="bird bird--one"></div>
            </div>
            <div class="bird-container bird-container--two">
                <div class="bird bird--two"></div>
            </div>
            
            <div class="bird-container bird-container--three">
                <div class="bird bird--three"></div>
            </div>
            
            <div class="bird-container bird-container--four">
                <div class="bird bird--four"></div>
            </div>
        </div>
    )
}

export default Birds;