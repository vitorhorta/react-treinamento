export default function(state = {text: "",isPhotoAdded: false,lastTweet: ""}, action) {
    console.log("teste");
    switch (action.type) {
        case "TEXT_CHANGED":
            state = {...state, text: action.payload}
            break;
        case "ADDED_PHOTO":
            state = {...state, isPhotoAdded: action.payload}
            break;
        case "TWEET_SENT":
            state = {...state, lastTweet: action.payload}
            break;
    }
    return state;
}
