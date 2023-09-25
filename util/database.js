const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db; // used internally so used _

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://kirtikumar0005:Zd1OVbOfpMtpmDt7@cluster0.fsm0no3.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db(); //connect to given documents here shop we can override it by doing db("test")
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
