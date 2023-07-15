/* const users = require('../utils/users.js');

const login = (req, res) => {
    const { email, password } = req.query;
    let access = false
    if (!email || !password) {
        return res.status(404).send("password or email cannot be null");
    }
    users.forEach((user) => {
        if (password === user.password && email === user.email) {
            access = true
            return res.status(200).json({ access })
        } else {
            return res.status(404).json({ access })
        }
    })
};

module.exports = { login } */