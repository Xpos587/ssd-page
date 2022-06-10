const express = require('express');
const unirest = require('unirest');
const bodyparser = require('body-parser');
const { port, redirectUrl, clientId, clientSecret } = require('./config.json');

const app = express();

let address = new Map();

const urlEncodedParser = bodyparser.urlencoded({ extended: false });

app.use('/assets', express.static('assets'));

app.get('/', (request, response) => {
    if (request.query.code) {
        let requestData = { redirect_uri: redirectUrl, client_id: clientId, grant_type: 'authorization_code', client_secret: clientSecret, code: request.query.code };
        unirest.post('https://discordapp.com/api/oauth2/token').send(requestData).headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'DiscordBot'
        }).then((data) => {

            console.log(data.body);

            unirest.get('https://discordapp.com/api/users/@me').headers({
                'Authorization': `${data.body.token_type} ${data.body.access_token}`
            }).then((data) => {
                console.log(data.body);

                address.set(request.ip, data.body.id);

                const { username, discriminator, avatar, id } = data.body;

                response.sendFile('index.html', { root: '.' })

                require('./document.js')(username, discriminator, avatar, id)

            }).catch((err) => response.sendFile('index.html', { root: '.' }));

        }).catch((err) => response.sendFile('index.html', { root: '.' }));

    } else {
        response.sendFile('index.html', { root: '.' });
    }
});

// app.post('index.html', urlEncodedParser, function(request, response) {
//     console.log(request.body)
// })

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));