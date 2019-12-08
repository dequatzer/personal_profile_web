const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var creds = require('./config');
var router = express.Router();

app.use(express.static(path.join(__dirname, '/client')));

var transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var phone = req.body.phone
    var message = req.body.message
    var content = `Hi Sanjay,

                        You have received a new message from your website
                        Detials are given below:

                        Name: ${name}
                        Email: ${email}
                        Phone: ${phone}
                        Message: ${message} `;

    var mail = {
        from: name,
        to: "sanjay.hansdak.197@gmail.com",
        subject: "Important! You have received a new message from your website.",
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use('/', router);


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});