import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config()

export function generateToken(user){
    const payload ={
        id: user.id,
        email: user.email
    }
    const options = {
        expiresIn: '7d'
    }

    return jwt.sign(payload, process.env.TOKEN_SECRET, options)
}

export function verifyToken(token) {
    try{
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)

    return { success: true, data: decoded}
    }
    catch(error){
        return { success: false, data: error.message}
    }
}