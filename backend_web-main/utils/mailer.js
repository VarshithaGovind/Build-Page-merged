const nodemailer = require('nodemailer');

let transporterPromise = nodemailer.createTestAccount().then(testAccount => {
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });
});

async function sendMail(to, subject, text) {
  const transporter = await transporterPromise;
  let info = await transporter.sendMail({
    from: '"TechLearn Admin" <no-reply@techlearn.com>',
    to,
    subject,
    text
  });
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

module.exports = sendMail; 