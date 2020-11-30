import React from 'react';
import { Link } from 'react-router-dom';

function RarityFilter() {
    return(
        <>
            <ul className="rarity-filter" >
                <Link className="rarity-filter-link first" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Heirloom</li>              
                </Link>
                <Link className="rarity-filter-link second" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Legendary</li>              
                </Link>
                <Link className="rarity-filter-link third" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Super Rare</li>              
                </Link>
                <Link className="rarity-filter-link fourth" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Rare</li>              
                </Link>
                <Link className="rarity-filter-link fifth" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Common</li>              
                </Link>
            </ul>
        </>
    )
}

export default RarityFilter;