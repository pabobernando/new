


const notFoundhandler = (req,res,next) =>{
    res.status(404).json({
        status : "fail",
        error : "Are you lost"
    });
};

module.exports = notFoundhandler;