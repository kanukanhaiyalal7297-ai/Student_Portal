// config.js — central configuration
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required.');
}

module.exports = {
  JWT_SECRET,
  JWT_EXPIRES_IN: '1h',
  BCRYPT_SALT_ROUNDS: 10,
  PORT: process.env.PORT || 3000,
};
