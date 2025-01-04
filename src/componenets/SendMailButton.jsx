import React from 'react';
import { MdEmail } from 'react-icons/md';

const SendMailButton = ({ email, subject = '', body = '' }) => {
  const sendMail = (email) => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank'); // Opens Gmail in a new tab
  };

  return (
    <MdEmail
      className="text-2xl cursor-pointer text-blue-500"
      onClick={() => sendMail(email)}
      title="Send Email via Gmail"
    />
  );
};

export default SendMailButton;
