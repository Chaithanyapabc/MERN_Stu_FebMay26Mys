//middleware is a function that takes in a request and response object and a next function. 
//It can be used to perform some operations before the request is handled by the route handler.

//Middleware for req log

function loggerMiddleware(req,res,next){
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}
module.exports = loggerMiddleware;
//Task: write the log to a file along with timestamp with both req & res
