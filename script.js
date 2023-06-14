const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    // для того чтобы код работал нужно настроить доступ к почте со сторонних сервисов , настройте двустороннюю аутентификацию
    // на гугле все описано
    auth: {
        user: 'Your email on gmail',
        pass: 'your key'
    }
});

const mailOptions = {
    from: 'ваш имеил',
    to: 'имеил того кому вы отправляете (можно сразу несколько)',
    subject: 'Hello !!! (^_^) -- заголовок вашего email',
    html: `
    <html>

<head>

    <style>
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }

        .container {
            max-width: 1000px;
            border: 1px solid black;
        }

        h1 {
            text-align: center;
        }

        p {
            text-align: center;
        }

        img{
            max-width: 100%;
        }

    </style>

</head>

<body>

    <main>

        <div class="container">
            <h1>Hello</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse ex iure nisi eum non! Eligendi
                officia quam similique eum perspiciatis explicabo amet, iste optio. Sapiente dolor iure necessitatibus
                quas!
            </p>

            <img src="https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=1200&quality=85&auto=format&fit=max&s=4219f64fafe19d101f92e0eba0181f6a"
                alt="cat">

        </div>

    </main>


</body>

</html>
    `
};

transporter.sendMail(mailOptions, function (error, info) {

    if (error) console.log(error);
    else console.log('Письмо успешно отправлено: ' + info.response);

});
