import axios from "axios"

// app.js or config.js

export const API_URL = process.env.API_URL || "http://localhost:8081";

console.log("API_URL:", API_URL);

// export it if needed
module.exports = { API_URL };


// export const API_URL="http://localhost:5454/"

export const api=axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json",
    },
})            