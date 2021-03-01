//For Reference of schema.
var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: Number,
  f_name: String,
  l_name: String,
  email: String,
  password: String,
  role_id: Number,
  groups: groupsSchema

});

const meetingSchema = new mongoose.Schema({
  id: Number,
  start_time: Date,
  end_time: Date,
  groups: userSchema,
});

const groupsSchema = new mongoose.Schema({
  id: Number,
  members: userSchema,
});

const channelSchame = new mongoose.Schema({
    id: Number,
    channel_name: String,
    members: groupsSchema
});