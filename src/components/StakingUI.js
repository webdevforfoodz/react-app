import React from 'react';
import { useSelector } from 'react-redux';

function StakingUI(props) {

    const waifuBalance = useSelector(state => state.waifuBalance[0]);
    const waifuStaked = useSelector(state => state.waifuBalance[1]);
    const haremEarned = useSelector(state => state.waifuBalance[2]);

    const test = () => {
        console.log('test')
    }

    return(
        <div className="stakingUI" >
            <div className="staking-text-wrapper">
                <span className="staking-title" >{props.token1} Balance:</span>
                <span className="staking-balance" >{waifuBalance}</span>
                <span className="staking-title" >{props.token1} Staked:</span>
                <span className="staking-balance">{waifuStaked}</span>
                <span className="staking-title" >{props.token2} Earned:</span>
                <span className="staking-balance">{haremEarned}</span>
            </div>


            <div className="staking-buttonBox" >
                <button className="staking-claim-btn" onClick={test}>
                    Claim {props.token2}
                </button>
                <button className="staking-approve-btn">
                    Approve
                </button>
            </div>
        </div>
    )
}

export default StakingUI;