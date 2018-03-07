import App from './src/app';
require('./src/mongoose.config');

const port = process.env.SERVER_PORT || 3000;

let app = new App().express;

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log(`listening on port ${port}`);
});