const { StatusCodes } = require("http-status-codes");
const { errorResponse, successResponse } = require("../../utils/responseFormat");
const { MSG } = require("../../utils/message");
const UserService = require("../../services/auth/auth.service");

const userService = new UserService();


exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await userService.fetchAllUsers();
        return res.json(successResponse(StatusCodes.OK, false, MSG.USERS_SUCCESS, allUsers));
    } catch (err) {
        console.log(err);
        return res.json(errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR));
    }
}

exports.getUserProfile = (req, res) => {
    try {
        return res.json(successResponse(StatusCodes.OK, false, MSG.USER_SUCCESS, req.user));
    } catch (err) {
        console.log(err);
        return res.json(errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR));
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await userService.updateUser(req.user._id, { isDelete: true });

        if (!deletedUser) {
            return res.json(errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR));
        }
        return res.json(successResponse(StatusCodes.OK, false, MSG.USER_DELETED, deletedUser));
    } catch (err) {
        console.log(err);
        return res.json(errorResponse(StatusCodes.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR));
    }
}