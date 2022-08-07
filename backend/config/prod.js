module.exports = {
  mongoURL: process.env.MONGO_URL,
  jwtSecret: process.env.JWT_SECRET,
};

// "heroku-postbuild": "cd frontend && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
