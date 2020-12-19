const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { email, fname, lname } = req.body;
  if (!email || !fname || !lname) {
    return res.status(400).json({ msg: "please enter all fields" });
  } else {
    addEmailToMailChimp(email, fname, lname);
  }
});

const addEmailToMailChimp = (email, fname, lname) => {
  const request = require("request");
  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: { FNAME: fname, LNAME: lname },
  };
  const options = {
    method: "POST",
    url: "https://us7.api.mailchimp.com/3.0/lists/e6558959a4/members",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.Mail_Chimp_API_key,
    },
    body: JSON.stringify(data),
  };
  request(options, function (error, response, body) {
    if (err) {
      throw err;
    } else {
      if (response.statusCode === 200) {
        res.json({ msg: "successfly added to newsletter" });
      } else {
        res.status(400).json({ msg: "something went wrong" });
      }
    }
  });
};

module.exports = router;
