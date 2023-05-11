import  Axios  from "Axios";

export const api= Axios.create({
    baseURL:"https://fd-explorer-api.onrender.com"
})