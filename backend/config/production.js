module.exports = {
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};

// "heroku-postbuild": "cd frontend && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
