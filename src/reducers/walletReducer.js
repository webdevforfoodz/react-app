export default function walletReducer(state= 'No wallet connected',action) {
    switch(action.type) {
        case 'WALLETCONNECTED':
            return action.payload;
        default:
            return state;
    }
}   

