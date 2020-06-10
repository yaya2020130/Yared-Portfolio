const express = require('express');
const app = express();
const path = require('path')
const sendMail = require('./mail')

const PORT = process.env.PORT || 8080;


//Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "assets")));


app.post('/email', (req, res) => {
    //send email
    const { subject, email, text } = req.body

    
    sendMail(email, subject, text, function (err, data) {
        if (err) {
            res.status(500).json({ message: "internal error" })
        } else {
            res.status(200).json({ message: 'Message received!' });
        }
    });
})




app.get(('/','index.html'), (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get(('/contact.html'), (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get(('/portfolio.html'), (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'portfolio.html'));
});

app.get(('/language.html'), (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'language.html'));
});


app.get(('/resume.pdf'), (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'Resume.pdf'))
})

// app.get('/:any', (req, res) => {
//     let route = req.params.any
//     res.sendFile(path.join(__dirname, `${route}.html`));
// });

app.get(('/*'), (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server is listening on Port ', PORT)
})