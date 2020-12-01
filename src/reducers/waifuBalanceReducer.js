export default function getWaifuBalance( state=['Locked','Locked','Locked'], action ) {
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