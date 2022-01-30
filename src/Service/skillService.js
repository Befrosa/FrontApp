import api from "./api";

const getSkill = () => {
    return api.get ("/skill")
}

const getSkillId = () => {
    return api.get (`/skill/${id}`)
}

const postSkill = () => {
    return api.post ("/skill", user)
}

const deleteSkillId = () => {
    return api.delete (`/skill/${id}`)
}

const putSkillId = () => {
    return api.put (`/skill/${id}`, user)
}


export default {
    getSkill,
    getSkillId,
    postSkill,
    deleteSkillId,
    putSkillId,
}