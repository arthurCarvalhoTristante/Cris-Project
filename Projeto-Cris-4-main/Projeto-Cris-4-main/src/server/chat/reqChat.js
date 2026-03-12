import axios from "axios";

const server = axios.create({
    baseURL: import.meta.env.VITE_baseURL
})

export default async function reqChat(assistantThreadId, message) {
    return (server.post('/openai', {
        assistantThreadId: assistantThreadId,
        message: message
    })
        .catch(() => alert('Estamos com instabilidade no servidor, por favor volte mais tarde!'))
        .then((response) => response.data)
    )
}