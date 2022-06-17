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
    isAdmin: {
      type: Boolean,
      default: false
    },
    2: {
      subjects: {
        type: Array,
        default: []
      }
    },
    3: {
      subjects: {
        type: Array,
        default: []
      }
    },
    4: {
      subjects: {
        type: Array,
        default: []
      }
    },
    5: {
      subjects: {
        type: Array,
        default: []
      }
    },
    6: {
      subjects: {
        type: Array,
        default: []
      }
    },
    7: {
      subjects: {
        type: Array,
        default: []
      }
    },
  },
  { collection: "Users", timestamps: true }
);

const User = mongoose.model("User", userSchema)

module.exports = User;