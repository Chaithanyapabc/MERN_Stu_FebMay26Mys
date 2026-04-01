// Protecting routes with JWT middleware and role based access
const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
const secretKey = "monkey123";

const userToken = jwt.sign({ userId: 1, role: "user", email: "kappe@email.com" }, secretKey, { expiresIn: "1h" });
console.log("Usertoken:",userToken);
const adminToken = jwt.sign({ userId: 2, role: "admin", email: "manga@email.com" }, secretKey, { expiresIn: "1h" });
console.log("Admintoken:",adminToken);
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorisation;
    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization header is missing."
        });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing."
        });
    }
    try {
        //verify the token and attach trusted user data to the request
        req.user = jwt.verify(token, secretKey);
        next();
    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Token has expired."
            });
        }
        return res.status(403).json({
            success: false,
            message: "Token is invalid."
        });
    }
}

function requireRole(role) {
    return function (req, res, next) {
        if (req.user.role != role) {
            return res.status(403).json({
                success: false,
                message: "Insufficient permision."
            });
        }
        next();
    };
}

app.get("/me",authenticateToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route accessed",
        user:req.user
    });
});

app.get("/admin",authenticateToken,requireRole("admin"),function(req,res){
    res.json({
        success:true,
        message:"Protected user route accessed",
        user:req.user
    });
});
//http://localhost:4000/me
//http://localhost:4000/admin
//curl http://localhost:4000/admin -H "Authorisation:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoibWFuZ2FAZW1haWwuY29tIiwiaWF0IjoxNzc1MDM0NjExLCJleHAiOjE3NzUwMzgyMTF9.kTeufr5thC225-p5-ZNXEWmS016OKcFUuYKFLDhnWV8"
//curl http://localhost:4000/me -H "Authorisation:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJrYXBwZUBlbWFpbC5jb20iLCJpYXQiOjE3NzUwMzQ2MTEsImV4cCI6MTc3NTAzODIxMX0.GMCF0W6Kaegv7nRoGtDN9fr_qkP-hpcuGAKKO-hk-HM"
app.listen(4000,function(){
    console.log("JWT protected route server running @ http://localhost:4000");
});