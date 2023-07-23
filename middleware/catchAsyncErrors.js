module.exports = (routerHandler) => {
    return async function(req,res,next){
        try{
            routerHandler(req,res)
        }catch(err){
            next(err)
        }
    }
}