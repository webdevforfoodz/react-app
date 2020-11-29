import React from 'react';
import { useSelector } from 'react-redux';

function StakingUI2(props) {

    const waifuBalance = useSelector(state => state.waifuBalance[0]);
    const waifuStaked = useSelector(state => state.waifuBalance[1]);
    const haremEarned = useSelector(state => state.waifuBalance[2]);

    const test2 = () => {
        console.log('test2')
    }

    return(
        <div className="stakingUI2" >
            <div className="staking-text-wrapper2">
                <span className="staking-title2" >{props.token1} Balance:</span>
                <span className="staking-balance2" >{waifuBalance}</span>
                <span className="staking-title2" >{props.token1} Staked:</span>
                <span className="staking-balance2">{waifuStaked}</span>
                <span className="staking-title2" >{props.token2} Earned:</span>
                <span className="staking-balance2">{haremEarned}</span>
            </div>


            <div className="staking-buttonBox2" >
                <button className="staking-claim-btn2" onClick={test2}>
                    Claim {props.token2}
                </button>
                <button className="staking-approve-btn2">
                    Approve
                </button>
            </div>
        </div>
    )
}

export default StakingUI2;