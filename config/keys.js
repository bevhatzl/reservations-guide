const PWD = process.env.DB_PASS;
const USERID = process.env.DB_USER;

module.exports = {
  mongoURI: `mongodb+srv://${USERID}:${PWD}@cluster0.fqf9a.mongodb.net/hotelguestblacklist?retryWrites=true&w=majority`,
  secretOrKey: "secret"
};
