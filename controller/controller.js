const Puzzle = require("../models/model");
let sgMail = require("@sendgrid/mail");

exports.info = (req, res, next) => {
  Puzzle.info()
    .then((result) => {
      return res.json({ data: result[0] });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.personalinfo = (req, res, next) => {
  Puzzle.save(req.body.email, req.body.name, req.body.contact)
    .then((result) => {
      return res;
    })
    .then((b) => {
      const msg = {
        to: req.body.email, // Change to your recipient
        from: "manshuchatrath20@gmail.com", // Change to your verified sender
        subject: "Winner(automated-email)",
        html: `<p>Congratulations you have completed the puzzle and you can recieve a cash prize from our side and you will be contacted shortly from one of our representative</p>
            <p>Thank you</p>`,
      };
      sgMail
        .send(msg)
        .then(() => {
          return res.json({
            message:
              "Yes confirmation has been sent to your email and you will recieve a call!",
            success: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.update = (req, res, next) => {
 
  Puzzle.update(
    req.body.img,
    req.body.totalmin,
    req.body.totalsec,
    req.body.limitationmin,
    req.body.firstprizemin,
    req.body.firstprizesec,
    req.body.secondprizemin,
    req.body.secondprizesec,
    req.body.thirdprizemin,
    req.body.thirdprizesec
  )
    .then((result) => {
      return res.json({
        message: "Yes new rules have been set according to your request! ",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
