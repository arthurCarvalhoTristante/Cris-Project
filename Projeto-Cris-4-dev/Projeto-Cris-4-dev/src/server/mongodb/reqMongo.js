import axios from "axios";

const server = axios.create({
    baseURL: import.meta.env.VITE_baseURL
});

export default async function reqMongo(email, password) {
    return (server.post('/login', {
        email: email,
        password: password
    })
        .then((response) => response.data)
        .catch((error) =>  error)

    )
;
}