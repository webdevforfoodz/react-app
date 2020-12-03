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
                    <li>ID: <span>{NFT.id}</span> </li>
                    <li>Name: <span>{NFT.name}</span> </li>
                    <li>Rarity: <span>{NFT.rarity}</span></li>
                    <li>Price: <span>{NFT.price}</span> </li>
                    <div className="nft-detail-btn-box">
                        <button>Buy</button>
                        <button>Sell</button>
                    </div>
                </div>
            </div>
        )

    
}

export default NFTDetail;