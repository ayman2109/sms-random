import nodemailer from "nodemailer"



const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any email service provider
    auth: {
      user: 'learnwithayman.4951@gmail.com', // Your email
      pass: 'vpmz ouvb fsjz zyes', // Your email password or app password
    },
  });


  const mailOptions = {
    from: 'learnwithayman.4951@gmail.com', // Sender's email
    to: 'mohd.aymanhussain2109@mailom', // Recipient's email
    subject: 'Verification Code', // Email subject
    text: 'MS_PROJECT 1-100 cohort twitter', // Plain text body
    // html: '<b>Hello, this is the email body in HTML!</b>' // Optionally, an HTML body
  };
  
async function sendEmail() {
  const response = await transporter.sendMail(mailOptions);
  console.log(response)
}

sendEmail()