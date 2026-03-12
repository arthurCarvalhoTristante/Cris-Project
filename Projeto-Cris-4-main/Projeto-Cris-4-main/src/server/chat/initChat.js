import axios from "axios";

const server = axios.create({
    baseURL: import.meta.env.VITE_baseURL
})

export default async function initChat() {
    return (server.get('/openai')
    .then((response) => response.data.assistantThreadId)
    .catch((err) => console.log(err)))
}