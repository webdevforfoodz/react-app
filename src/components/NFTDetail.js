import React, {useState,useEffect} from 'react';
import '../css/nftdetail.css'
import {IoMdArrowBack } from 'react-icons/io';
import {Link} from 'react-router-dom'

function NFTDetail({match}) {

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data/nftapi.json').then(res => res.json()).then(data => setData(data));
        console.log(match);
    },[]);

    const [data,setData] = useState([]);
    const [NFT,setNFT] = useState('');

    useEffect(() => {
        let nft = data.find(nft => nft.id === match.params.id);
        if (nft === undefined) {
            setNFT(false);
        } else {
            setNFT(nft);
        }
        console.log(nft)
    },[data])

        return(
            <div className="nft-detail">
                <Link to="/gallery" className="nft-detai-arrowback">
                        <IoMdArrowBack  />
                </Link>
                <div className="nft-detail-card-info">
                    <div className="nft-detail-img-wrapper">
                        <img src={process.env.PUBLIC_URL + NFT.image} alt=""/>
                    </div>
                    <div className="nft-detail-info-list">
                        <li>
                            {NFT.name}
                            <div className="nft-detail-info-box">
                                <span>ID: {NFT.id}</span>
                                <span>Rarity: {NFT.rarity}</span>
                                <span>Availability: {NFT.availability}</span>
                            </div>
                        </li>
                        <li>
                            <span className="nft-detail-price" >Price: {NFT.price}</span>
                            <div className="nft-detail-btn-box">
                                <button className="nft-detail-buy-btn" >Buy</button>
                                <button className="nft-detail-sell-btn" >Sell</button>
                            </div>
                        </li>
                        <li>
                            <span className="nft-detail-price" >Details: </span>
                            <div className="box">
                                <span >Generation: {NFT.generation}</span>
                                <span >Production Date: {NFT.production}</span>
                            </div>
                        </li>
                        
                    </div>
                </div>
                <div className="nft-detail-history">
                        <span>History</span>
                        <ul>
                            <li>
                                Previous Owner
                                {/* <span>{NFT.owner.address}</span> */}
                            </li>
                            <li>
                                Price bought
                                {/* <span>{NFT.owner.pricebought}</span> */}
                            </li>
                            <li>
                                Price sold
                                {/* <span>{NFT.owner.pricesold}</span> */}
                            </li>
                            <li>
                                Tx
                                {/* <span>{NFT.owner.tx}</span> */}
                            </li>
                        </ul>
                </div>
            </div>
        )

    
}

export default NFTDetail;