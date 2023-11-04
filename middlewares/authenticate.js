import { verifyToken } from "../functions/Token";


function authenticate(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1]
    if(!token) return res.status(401)
    const result = verifyToken(token)
    if( !result.success) return res.status(403).json({ error: result.error })
    

    req.user = result.data;
    next()
}



export default authenticate;