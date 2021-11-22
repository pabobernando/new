


const internalError = (err,req,res,next) =>{
    res.status(500).json({
        status : "fail",
        error : err.message
    });
};

module.exports = internalError;