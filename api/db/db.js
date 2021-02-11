var redis = require("redis");
var client = redis.createClient();

client.on("connect", function () {
  console.log("You are now connected");
});

module.exports = {
  write(key, value) {
    client.set(key, JSON.stringify(value), function (err, reply) {
      console.log("write: " , reply , err);
    });
  },

  read(key) {
    client.get(key, function (err, reply) {
      console.log("read: " , reply , err);
    });
  },
};
