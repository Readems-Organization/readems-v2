const Waitlists = require('../model/waitlist');

const waitlistControllers = {
  signUp: async (req, res) => {
    const { fullname, email, message } = req.body;

    if (!fullname)
      return res.status(422).json({ error: 'Please enter your fullname.' });

    if (!email)
      return res
        .status(422)
        .json({ error: 'Please enter your email address.' });

    const user = await Waitlists.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ error: 'User with this email already exists.' });

    const newEmail = new Waitlists({ fullname, email, message });

    await newEmail.save().then(() => {
      res
        .status(200)
        .json({ success: 'Message sent successfully!!! Thank you.' });
    });
  },
};

module.exports = waitlistControllers;
