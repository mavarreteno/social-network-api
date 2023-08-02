const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true
    },
    
  },
  {
    toJSON: {
      getters: true
    },
  }
);

module.exports = reactionSchema