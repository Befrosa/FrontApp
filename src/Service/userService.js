import api from "./api";

const getUser = () => {
    return api.get ("/user")
}

const getUserId = () => {
    return api.get (`/user/${id}`)
}

const postUser = () => {
    return api.post ("/user", user)
}

const deleteUserId = () => {
    return api.delete (`/user/${id}`)
}

const putUserId = () => {
    return api.put (`/user/${id}`, user)
}

export default {
    getUser,
    getUserId,
    postUser,
    deleteUserId,
    putUserId
}