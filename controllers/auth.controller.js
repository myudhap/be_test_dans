const bcrypt = require('bcrypt');
const uuid = require('uuid');
const User = require('../models').User;
const jwt = require('../helpers/jwt');

exports.register = async (req, res) => {
    const isUserExist = await User.findOne({
        where: {
            username: req.body.username
        }
    });

    if(isUserExist) {
        return res.status(400).json({ message: 'Username already used' });
    }

    const hashedPassword = await bcrypt.hashSync(req.body.password, 16);

    let user = await User.create({
        id: uuid.v4(),
        username: req.body.username,
        password: hashedPassword
    });

    user = user.toJSON();
    delete user.password;

    return res.json(user);
}

exports.login = async (req, res) => {
    const { username, password } = req.body;
    let user = await User.findOne({
        where: {
            username: username
        }
    });

    if(user) {
        user = user.toJSON();
        const isPasswordMatch = await bcrypt.compareSync(password, user.password);
        if(isPasswordMatch) {
            const token = await jwt.createToken({ id: user.id });
            delete user.password;
            return res.json({
                user,
                token
            })
        }
    }

    return res.status(400).json({ message: 'Username/password wrong' });
}