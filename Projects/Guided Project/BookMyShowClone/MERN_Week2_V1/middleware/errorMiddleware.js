//Generic Error Handler is created

function errorMiddleware(err,req,res,next){
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        sucess:false,
        message:err.message || "Internal Server Error"
    });
}

module.exports = errorMiddleware;