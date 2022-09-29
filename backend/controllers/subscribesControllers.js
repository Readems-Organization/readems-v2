const SubscribesEmail = require('../model/subscribeModel');

const SubscribeControllers = {
  subscribesEmail: async (req, res) => {
    const { email } = req.body;

    try {
      if (!email)
        return res.status(400).json({ error: 'Please enter your email' });

      const exitsEmail = await SubscribesEmail.findOne({ email });
      if (exitsEmail)
        return res
          .status(400)
          .json({ error: 'The user with this email already subscribed' });

      const newSubscriber = new SubscribesEmail({ email });

      await newSubscriber.save();

      res.status(201).json({
        newSubscriber,
        message: 'Thank you for subscribing!!!',
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};

module.exports = SubscribeControllers;
