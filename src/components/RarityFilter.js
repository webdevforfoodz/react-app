import React, { useState, useEffect} from 'react';
import NFTCard from '../components/NFTCard';
import '../css/nftcard.css'
import * as FaIcons from 'react-icons/fa';


function RarityFilter() {

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + 'data/nftapi.json').then(res => res.json()).then(data => setData(data));
    },[]);

    const [data,setData] = useState([]);
    const [result,setResult] = useState(data); 

    useEffect(() => {
        setResult(data);
    },[data])

    const changeData = (rarity,i) => {
        let nft;
        if (i === 0) {
            nft = data.filter(stat => stat.rarity === rarity);
        } else {
            nft = data;
        }
        setResult(nft)
    }

    const getNFT = () => {
        let input = document.getElementById('input').value.toLowerCase();
        let nft = data.filter(stat => stat.name.toLowerCase().includes(input))
        setResult(nft)
        console.log(input)
    }

    return(
        <>
            <ul className="rarity-filter" >
                <div className="rarity-filter-link first"  onClick={() => changeData('Heirloom',0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Heirloom</li>
                </div>
                <div className="rarity-filter-link second" onClick={() => changeData('Legendary',0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Legendary</li>              
                </div>
                <div className="rarity-filter-link third" onClick={() => changeData('Super Rare',0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Super Rare</li>              
                </div>
                <div className="rarity-filter-link fourth" onClick={() => changeData('Rare',0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Rare</li>              
                </div>
                <div className="rarity-filter-link fifth" onClick={() => changeData('Common',0)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>Common</li>              
                </div>
                <div className="rarity-filter-link fifth" onClick={() => changeData('',1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>All</li>              
                </div>
            </ul>
            <div className="rarity-filter-searchbar">
                {/* <div className="all-btn" onClick={() => changeData('',1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <li>All</li>
                </div> */}
                <div className="searchbar">
                    <input id="input" type="text" name="name" placeholder="NFT name" />
                    <FaIcons.FaSearch className="search-btn" onClick={getNFT} />
                </div>
            </div>
            <div className="gallery">
                {result.map(nft => (
                    <NFTCard name={nft.name} rarity={nft.rarity} image={nft.image} key={nft.id}/>
                ))}
            </div>
        </>
    )
}

export default RarityFilter;