export default function getWaifuBalance( state=['Please Connnect Your Wallet','Please Connnect Your Wallet','Please Connnect Your Wallet'], action ) {
    switch (action.type) {
        case 'UPDATEWAIFUBALANCE':
            return action.payload;
        default:
            return state;
    }
}

        // case 'UPDATEWAIFUSTAKED':
        //     return action.payload;
        // case 'UPDATEHAREMEARNED':
        //     return action.payload;