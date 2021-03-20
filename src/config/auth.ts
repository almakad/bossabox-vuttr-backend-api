export default {
  jwt: {
    secret: 'process.env.APP_TOKEN',
    expiresIn: '12h',
  },
};
