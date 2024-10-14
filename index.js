"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
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
function sendEmail() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield transporter.sendMail(mailOptions);
        console.log(response);
    });
}
sendEmail();
