const User = require("./../models/User");

const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message,
        });
    }
};

module.exports = {
    getUser,
};
