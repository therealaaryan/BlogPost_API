const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({username, password: hashedPassword});
        await user.save();
        res.json({message: 'Registered Successfully'});
    } catch (error) {
        res.status(500).json({error: 'Server Error'});
    }
};

const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});

        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(401).json({error: 'Invalid Credentials'});
        }

        const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn: '1h'});
        res.json({token});
    } catch (error) {
        res.status(500).json({error: 'Server Error'});
    }
};

module.exports = {register, login};