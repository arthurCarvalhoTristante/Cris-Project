import reqMongo from "../reqMongo.js";

async function login(email, password) {

    if (!email || !password) {
        return null
    } else {
        const mongo = await reqMongo(email, password);

        console.log(mongo);
        if (mongo.user === undefined || mongo.token === undefined) {
            return null
        } else {
            
        const isuser = JSON.stringify(mongo.user);

        const token = JSON.stringify(mongo.token);

        const user = {
            user: isuser,
            token: token
        }

        return user
        }

    }
}

export default login;