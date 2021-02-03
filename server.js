const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3200;
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('Hello World, from Roucoz Firebase Node!');
});
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var nodemailer = require('nodemailer');




app.post('/SendEmail', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rposapp@gmail.com',
            pass: 'createdin2016'
        }
    });
    var message = '<html><body><h3>One person has sent you an email from your profile website</h3>'
    message += '<h6>'

    message += "From    : " + req.body.from
    message += "Email   : " + req.body.email
    message += "Message : " + req.body.message

    message += '</h6>'

    var mailOptions = {
        from: 'rposapp@gmail.com',
        to: 'rock.krm1.media@gmail.com',
        subject: 'A new Email has arrived from Your Profile Roucoz-website',
        text: message 
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});









app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))