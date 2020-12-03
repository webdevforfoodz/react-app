import React, {useState} from "react";
import "../css/staking.css";
import Typer from "../components/Typing.js";
import StakingUI from '../components/StakingUI.js';
import StakingUI2 from '../components/StakingUI2.js';
import NavBar from "../components/NavBar.js"
import * as CgIcons from "react-icons/cg";

function Staking() {

  const [nsfwStatus,setNSFWStatus] = useState(false)
  const turnOn = () => {
    setNSFWStatus(!nsfwStatus)
  }
  return (
    <div className="staking">
      <span className="NSFW">NSFW</span>
      <CgIcons.CgToggleSquareOff className={nsfwStatus ? "toggle off" : "toggle"}
      onClick={turnOn} />
      <CgIcons.CgToggleSquare className={nsfwStatus ? "toggle" : "toggle off"}
      onClick={turnOn} />
      <NavBar />
      <div className="staking-gridbox">
        <div className="box5">
            <StakingUI token1="$WAIFU" token2="$HAREM" />
        </div>
        <div className="box6">
            <div className={nsfwStatus ? "dialogue1 nsfw" : "dialogue1"}>
              {!nsfwStatus &&
                <div>
                    <Typer dataText={["Hi, are you thirsty?", "It's your favorite soda."]}/>
                </div>
              }
              {nsfwStatus &&
                <div>
                    <Typer dataText={["Oh, you are home already?", "Can you help me take this off then?"]}/>
                </div>
              }
            </div>
            {!nsfwStatus &&
            <div className="image1"></div>
            }
            {nsfwStatus &&
            <div className="image3"></div>
            }
        </div>
        <div className="box7">
            <div className={nsfwStatus ? "dialogue2 nsfw" : "dialogue2"}>
              {!nsfwStatus &&
                <div>
                    <Typer dataText={["Or, are you hungry?", "I will feed it to youuu."]}/>
                </div>
              }
              {nsfwStatus &&
                <div>
                    <Typer dataText={["I was just getting started.", "Do you want to join me?"]}/>
                </div>
              }
            </div>
            {!nsfwStatus &&
            <div className="image2"></div>
            }
            {nsfwStatus &&
            <div className="image4"></div>
            }
        </div>
        <div className="box8">
            <StakingUI2 token1="$UNI-V2" token2="$HAREM" />
        </div>

      </div>
    </div>
  );
}

export default Staking;
