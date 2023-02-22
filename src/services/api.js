import  Axios  from "Axios";

export const api= Axios.create({
    baseURL:"http://localhost:3000"
})