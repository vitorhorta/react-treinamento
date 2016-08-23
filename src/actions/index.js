import axios from 'axios';

export const selectUser = (user) => {
    return {
        type: "USER_SELECTED",
        payload: user
    }
}

export const changeText = (text,viewString) => {
    return {
        type: "TEXT_CHANGED",
        payload: text,
        viewString: viewString,
        actionString: changeText
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

export const removeTweet = (id) => {
    return {
        type: "TWEET_REMOVED",
        payload: id
    }
}