const jwt=require("jsonwebtoken")
const isAuth=((req,res,next)=>{
     try {
       
        const { token } = req.cookies;
        console.log(token);
        
        if (!token) {
            return res.status(401).json({ message: "Unauthorized, token" });
       }

      const decoded =jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;
     next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized, invalid token" });
     }
    
})
module.exports=isAuth