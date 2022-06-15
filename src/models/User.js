const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    username: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    connections: {
      type: Array
    },
    idAdmin: {
      type: Boolean
    }
  },
  { collection: "Users" }
);

const User = mongoose.model("User", userSchema)

module.exports = User;