// @desc        Get All Users
// @method      GET /users
// @permission  public
exports.getUsers = (req, res) => {
    res.json({
        msg: 'users'
    })
}


// @desc        Create User
// @method      GET /users/create
// @permission  public
exports.createUser = (req, res) => {
    res.json({
        status: 200,
        success: true,
        msg: "Create User"
    })
}