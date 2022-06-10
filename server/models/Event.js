const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    host: {
      type: Schema.Types.ObjectId,
      ref: "Establishment",
    },
    dates: [
      {
        type: Schema.Types.ObjectId,
        ref: "Date",
      },
    ],
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

eventSchema.virtual("attendeeCount").get(function () {
  return this.attendees.length;
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
