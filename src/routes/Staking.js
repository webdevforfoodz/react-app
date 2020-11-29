import React from "react";
import "../css/staking.css";
import Wallet from "../hooks/Wallet.js";
import Typer from "../components/Typing.js";
import StakingUI from '../components/StakingUI.js';
import StakingUI2 from '../components/StakingUI2.js';
import logo from '../assets/staking-waifu1.png'

function Staking() {
  return (
    <div className="staking">
      <Wallet />
      <div className="staking-gridbox">
        <div className="box5">
            <StakingUI token1="$WAIFU" token2="$HAREM" />
        </div>
        <div className="box6">
            <div className="dialogue1">
                <div>
                    <Typer dataText={["Hi, are you thirsty?", "It's your favorite soda."]}/>
                </div>
            </div>
            <div className="image1"></div>
        </div>
        <div className="box7">
            <div className="dialogue2">
                <div>
                    <Typer dataText={["Or, are you hungry?", "I will feed it to youuu."]}/>
                </div>
            </div>
            <div className="image2"></div>
        </div>
        <div className="box8">
            <StakingUI2 token1="$UNI-V2" token2="$HAREM" />
        </div>
        <div className="staking-logo-mobile">
          <img src={logo} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Staking;
