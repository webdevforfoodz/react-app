export const updateWallet = addy => {
    return{
        type: 'WALLETCONNECTED',
        payload: addy
    };
};

export const getWaifuBalance = balance => {
    return {
        type: 'UPDATEWAIFUBALANCE',
        payload: balance
    }
}

export const getWaifuStaked = balance => {
    return {
        type: 'UPDATEWAIFUSTAKED',
        payload: balance
    }
}

export const getHaremEarned = balance => {
    return {
        type: 'UPDATEHAREMEARNED',
        payload: balance
    }
}