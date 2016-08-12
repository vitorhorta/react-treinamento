export default function(state = {text: "",isPhotoAdded: false}, action) {
    switch (action.type) {
        case "TEXT_CHANGED":
            state = {...state, text: action.payload}
            break;
        case "ADDED_PHOTO":
            state = {...state, isPhotoAdded: action.payload}
            break;
    }
    return state;
}
