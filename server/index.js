import express from "express";

const port = process.env.PORT || 3001;

let app = express();

app.use(express.static('../dist'));

app.listen(port, () => {
    console.info('Running vuejs-store-checkout-wc microui on port', port);
    console.info('Local: ', 'http://localhost:' + port);
});
