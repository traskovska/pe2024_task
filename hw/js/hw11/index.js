"use strict";

const form = document.querySelector(".reg-form");

form.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const email = formData.get("user-email");
  const areaCode = formData.get("area-code");
  const prefix = formData.get("prefix");
  const lineNumber = formData.get("line-number");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const phoneNumber = `${areaCode}-${prefix}-${lineNumber}`;

  message = message.trim().replace(/\s+/g, " ");

  const data = {
    name: {
      firstName: firstName,
      lastName: lastName,
    },
    email: email,
    phone: phoneNumber,
    subject: subject,
    message: message,
  };

  console.log(data);
};
