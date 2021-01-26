const PWD = process.env.DB_PASS;
const USERID = process.env.DB_USER;
const DBKEY = process.env.DB_KEY;

module.exports = {
  mongoURI: `mongodb+srv://${USERID}:${PWD}@cluster0.fqf9a.mongodb.net/testingprojecthotel?retryWrites=true&w=majority`,
  secretOrKey: `${DBKEY}`
};
