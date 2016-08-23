export default function(state = {text: "",isPhotoAdded: false,tweets: []}, action) {
    switch (action.type) {
        case "TEXT_CHANGED":
            state = {...state, text: action.payload}
            break;
        case "ADDED_PHOTO":
            state = {...state, isPhotoAdded: action.payload}
            break;
        case "TWEET_SENT":
            state = {...state}
            const id = state.tweets.length+1
            state.tweets.unshift({id:id, text: action.payload})
            break;
        case "TWEET_REMOVED":
             state = {...state, tweets: state.tweets.filter(tweet => tweet.id !== action.payload) }
             
             // delete state.tweets[action.payload]
            break;     
    }
    return state;
}
