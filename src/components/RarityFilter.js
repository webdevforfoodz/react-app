import React, { useState, useEffect} from 'react';
import NFTCard from '../components/NFTCard';
import '../css/nftcard.css'

function RarityFilter() {

    useEffect(() => {
        fetch('data/nftapi.json').then(res => res.json()).then(data => setData(data));
    },[]);

    // useEffect(() => {
    //     setResult(data);
    // },[data])

    const [data,setData] = useState([]);
    const [result,setResult] = useState(data); 

    const changeData = (rarity) => {
        let nft = data.filter(stat => stat.rarity.includes(rarity));
        setResult(nft)
    }

    return(
        <>
            <ul className="rarity-filter" >
                <div className="rarity-filter-link first" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Heirloom</li>
                </div>
                <div className="rarity-filter-link second" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Legendary</li>              
                </div>
                <div className="rarity-filter-link third" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Super Rare</li>              
                </div>
                <div className="rarity-filter-link fourth" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Rare</li>              
                </div>
                <div className="rarity-filter-link fifth" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Common</li>              
                </div>
            </ul>
            <div className="gallery">
                {data.map(nft => (
                    <NFTCard name={nft.name} rarity={nft.rarity} image={nft.image} key={nft.id}/>
                ))}
            </div>
        </>
    )
}

export default RarityFilter;