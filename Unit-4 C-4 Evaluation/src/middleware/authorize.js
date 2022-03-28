const authorize = (Todo) => {
    return (req, res, next) => {
        let user = req.user;

        if(user._id == Todo.userId._id) {
            return next()
        }
        
        return res.status(401).send({message: "You are not allowed to perform this action"})
    }
};

module.exports = authorize;