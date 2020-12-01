import React from 'react';

function NFTCard(props) {
    return(
        <div className="NFT-card-wrapper" >
            <div className="NFT-card-image">
                <img src={process.env.PUBLIC_URL + props.image} alt=""/>
            </div>
            <div className="NFT-card-name">
                {props.name}
            </div>
            <div className="NFT-card-rarity">
                {props.rarity}
            </div>
        </div>
    )
}

export default NFTCard;