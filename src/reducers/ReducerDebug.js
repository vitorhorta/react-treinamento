export default function(state = {}, action) {
    switch (action.type) {
        case "TEXT_CHANGED":
            state = {...state, view: "TweetBox",viewMethod: "textChanged",actionMethod: "ChangeText",reducerCase: "TEXT_CHANGED"}
            break;
        case "ADDED_PHOTO":
            state = {...state, view: "TweetBox",viewMethod: "photoClicked",actionMethod: "addedPhoto",reducerCase: "ADDED_PHOTO"}
            break;
        case "TWEET_SENT":
            state = {...state, view: "TweetBox",viewMethod: "submitClicked",actionMethod: "sendTweet",reducerCase: "TWEET_SENT"}
            break;
         case "TWEET_REMOVED":
            state = {...state, view: "TweetBox",viewMethod: "removeClicked",actionMethod: "removeTweet",reducerCase: "TWEET_REMOVED"}
            break;
    }
    return state;
}
