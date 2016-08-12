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

export const enviarTweet = (text) => {
  return function (dispatch){
    dispatch({type: "FETCH_TWEETS",payload: null})

    axios.get("http://rest.learncode.academy/api/test123/tweets")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED",payload: response.data[0].text})
      })
  }
}
