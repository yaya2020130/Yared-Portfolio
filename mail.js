const nodemailer = require('nodemailer');
const mailGun = require ('nodemailer-mailgun-transport');
// const mailgun = require("mailgun-js");
require("dotenv").config();
const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, callback) => {
    const mailOptions = {
        from: email,
        to: 'yayayags07@gmail.com',
        subject,
        text
    }
    
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            callback('you done messed up ' + err, null)
        } else {
            callback(null, data)
        }
    })







}










module.exports = sendMail