const express = require('express');
const app = express();
const helmet = require('helmet')
const PORT = process.env.PORT || 5000;

app.disable("x-powered-by")
app.use(helmet())
app.get('/', (req, res) => {
    res.render('/views/index.html')
})


app.listen(PORT, () => {
    console.group(`Server started on ${PORT}`)
})












































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Your app is listening on port ${port}`);
});