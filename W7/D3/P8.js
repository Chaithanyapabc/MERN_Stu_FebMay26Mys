//JWT flow with login, refresh-style login ans secure verification

const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
app.use(express.json());

const secretKey = "Mysecretekey";
const refreshSecretKey = "MyNewsecretekey";

//in memeory storage for refresh token
const refreshTokens = [];
//authenticate access token
function authentiacateAccessToken(req,res,next){
    const authHeader = req.headers.authorization;
    
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing."
        });
    }
    try{
        req.user = jwt.verify(token,secretKey,{
            algorithms:["HS256"],
            issuer:"jwt-example"
        });
        next();
    }
    catch(error){
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({
                success: false,
                message: "Access token has expired."
            });
        }
        return res.status(401).json({
            success: false,
            message: "Access token is invalid."
        });
    }
}

//Post function used login
app.post("/login",function(req,res){
    console.log("rf",refreshTokens);
    
    const {email,password} = req.body;
    if(email!=="email@email.com" || password!=="pass@123"){
        return res.status(401).json({
            success:false,
            message:"Invalid Credentials"
        });
    }
    const accessToken = jwt.sign({
        userId:101,
        email:email,
        role:"member"
    },secretKey,{expiresIn:"10m",algorithm:"HS256",issuer:"jwt-example"});

    const refreshToken = jwt.sign({
        userId:101,
        email:email
    },refreshSecretKey,
    {
        expiresIn:"10d",//d:days m:min h:hour
        algorithm:"HS256",
        issuer:"jwt-example"
    });
    refreshTokens.push(refreshToken);
    console.log("after rf",refreshTokens,refreshToken);
    
    res.json({
        success:true,
        message:"login successful",
        accessToken:accessToken,
        refreshToken:refreshToken
    });
});

app.post("/refresh",function(req,res){
    const {refreshToken} = req.body;
    console.log(req.body,refreshTokens);
    
    if(!refreshToken || !refreshTokens.includes(refreshToken)){
        return res.status(401).json({
            success:false,
            message:"Refresh token is missing or invalid"
        });
    }
    try{
        const decoded = jwt.verify(refreshToken,refreshSecretKey,{
            algorithms:["HS256"],
            issuer:"jwt-example"
        });
        const newAccessToken = jwt.sign({
            userId:decoded.userId,
            email:decoded.email,
            role:"member"
        },secretKey,{
            expiresIn:"10m",//d:days m:min h:hour
            algorithm:"HS256",
            issuer:"jwt-example"
        });
        res.json({
            success:true,
            accessToken:newAccessToken
        });
    }
    catch(error){
        res.status(403).json({
            success:false,
            message:"Refresh token verification failed."
        });
    }
});
app.get("/me",authentiacateAccessToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route",
        user:req.user
    });
});

app.listen(4000,function(){
    console.log("JWT demo server running @ http://localhost:4000");
});
//curl -X POST http://localhost:4000/login -H "Content-Type: application/json" -d "{\"email\":\"email@email.com\",\"password\":\"pass@123\"}"
//curl -X POST http://localhost:4000/refresh -H "Content-Type: application/json" -d "{\"refreshToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE3NzUxMTA5NzUsImV4cCI6MTc3NTk3NDk3NSwiaXNzIjoiand0LWV4YW1wbGUifQ.3dVf91zzjiebRSih-luME9HKgzfqsyCi5oC_7cktiRE\"}"
//curl http://localhost:4000/me -H "Authorisation:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNzc1MTEyMzQ2LCJleHAiOjE3NzU5NzYzNDYsImlzcyI6Imp3dC1leGFtcGxlIn0.oPuxP7g2EeK9tdTUsr0CSGgarmhiEyxNaji8JXlhhKs"  