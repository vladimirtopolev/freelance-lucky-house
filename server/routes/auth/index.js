import jwt from 'jsonwebtoken';
import User from '../../models/user';
import config from 'config';

export function createUserToken(user){
    return jwt.sign({user}, config.get('authentication.token.secret'));
}

function signIn(req, res) {
    const { identifier, password } = req.body;
    User.findOne(
        { $or: [{ username: identifier }, { email: identifier }] },
        (err, user) => {
            if (err) {
                return res.status(500).json({ error: 'Server error' });
            }
            if (!user) {
                return res.status(401).json({ error: 'There is no user with such username' });
            }
            if (user.checkPassword(password)) {
                return res.json({ token: createUserToken(user) });
            }
            return res.status(401).json({ error: 'Password is incorrect' });
        })

}


export default (app) => {
    app.route('/api/signin')
        .post(signIn)
}