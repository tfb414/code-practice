// const env = require('dotenv').config();
// const rp = require('request-promise');

var express = require('express');
var app = express();

app.get('/login', function (req, res) {
    let scopes = 'playlist-modify-public playlist-modify-private';
    let my_client_id = "0b589fbd32c24d108455ae4e9374f9e3";
    let redirect_uri = "https://timbrady.net/";

    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + my_client_id +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(redirect_uri));
});

app.listen(3000)