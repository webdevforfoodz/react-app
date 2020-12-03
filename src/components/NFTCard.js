import React from 'react';
import { Link } from "react-router-dom";

function NFTCard(props) {
    return(
        <div className="NFT-card-wrapper" >
            <Link to={'/gallery/' + props.id} >
                <div className="NFT-card-image">
                    <img src={process.env.PUBLIC_URL + props.image} alt=""/>
                </div>
            </Link>
            <div className="NFT-card-name">
                {props.name}
            </div>
            <div className="NFT-card-rarity">
                {props.rarity}
            </div>
            <div className="NFT-card-availability">
                {props.availability !== '0/20' ? props.availability : 'Out of stock'}
            </div>
            <div className="NFT-card-price">
                {props.price}
            </div>
        </div>
    )
}

export default NFTCard;