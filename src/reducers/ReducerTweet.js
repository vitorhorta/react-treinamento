export default function(state = {text: "",isPhotoAdded: false,ultimoTweet: "", fetching: false}, action) {
    console.log("teste");
    switch (action.type) {
        case "TEXT_CHANGED":
            state = {...state, text: action.payload}
            break;
        case "ADDED_PHOTO":
            state = {...state, isPhotoAdded: action.payload}
            break;
        case "FETCH_TWEETS_FULFILLED":
            state = {...state, ultimoTweet: action.payload,fetching: false}
            break;
        case "FETCH_TWEETS":
            state = {...state, fetching: true}
            break;
    }
    return state;
}
