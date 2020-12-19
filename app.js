const express = require("express");
const request = require("request");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
// app.use("/api", require("./routes/api"));

//Add new member to list
app.post("/api/addEmail", (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ msg: "please enter email" });
  }
  const data = {
    email_address: email,
    status: "subscribed",
  };
  const postData = JSON.stringify(data);
  const options = {
    url:
      "https://us7.api.mailchimp.com/3.0/lists/e6558959a4/members?skip_merge_validation=true",
    method: "POST",
    headers: {
      Authorization: `auth ${process.env.Mail_Chimp_API_key}`,
    },
    body: postData,
  };
  request(options, (err, response) => {
    if (err) {
      throw err;
    } else {
      if (response.statusCode === 200) {
        res.json({ msg: "succesfuly signed up!" });
      } else {
        res.json("Something went wrong...pls try again");
      }
    }
  });
});

app.listen(PORT);
console.log(`Server running on port ${PORT}`);
module.exports = app;
