import  axios  from "axios";

export const api= axios.create({
    baseURL:"https://fd-explorer-api.onrender.com"
})