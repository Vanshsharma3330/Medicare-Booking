import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'

export const authenticate = async(req,res,next)=>{
    //get token from headers
    const authToken = req.headers.authorization;

    //check if token exists

    if(!authToken || !authToken.startsWith('Bearer ')){
        return res.status(401).json({success:false, message:"No token, authorization denied"})
    }

    try {
        const token = authToken.split(" ")[1];

        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_key)

        req.userId = decoded.id 
        req.role = decoded.role
        next(); // must be used
    } catch (err) {
        if(err.name === 'TokenExpiredError'){
            return res.status(401).json({message:"Token is expired"});
        }
        return res.status(401).json({success:false, message:"Invalid Token"})
    }
}

export const restrict = roles => async(req,res,next)=>{
    const userId = req.userId;
    let user;
    const patient = await User.findById(userId)
    const doctor = await Doctor.findById(userId)
    if(patient){
        user = patient
    }

    if(doctor){
        user = doctor
    }

    if(!user){
        return res.status(401).json({success: false, message: "User not found"});
    }

    if(!roles.includes(user.role)){
        return res.status(401).json({success: false, message: "You're not authorized"});
    }
    next();
}