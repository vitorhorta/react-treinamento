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
