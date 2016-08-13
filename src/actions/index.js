import axios from 'axios';

export const selectUser = (user) => {
    return {
        type: "USER_SELECTED",
        payload: user
    }
}

export const changeText = (text) => {
    return {
        type: "TEXT_CHANGED",
        payload: text
    }
}

export const addedPhoto = (addedPhoto) => {
    return {
        type: "ADDED_PHOTO",
        payload: addedPhoto
    }
}

export const sendTweet = (text) => {
    return {
        type: "TWEET_SENT",
        payload: text
    }
}
