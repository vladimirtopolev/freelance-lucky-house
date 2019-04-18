import conn from './boot/db';
import app from './app';

const PORT = process.env.PORT || 4000;

conn.open()
    .then(() => {
        app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    })
    .catch(err => console.log(err));