import React, {useState,useEffect} from 'react';
import '../css/nftdetail.css'

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
                <div className="nft-detail-img-wrapper">
                    <img src={process.env.PUBLIC_URL + NFT.image} alt=""/>
                </div>
                <div className="nft-detail-details">
                    <span>ID: {NFT.id}</span>
                    <span>Name: {NFT.name}</span>
                    <span>Rarity: {NFT.rarity}</span>
                </div>
            </div>
        )

    
}

export default NFTDetail;