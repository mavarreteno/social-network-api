const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const timestamp = require('time-stamp');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,

    },
    createdAt: {
      type: Date,
      default: timestamp('YYYY/MM/DD:mm:ss')
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

thoughtSchema.virtual('reactionRount').get(function() {
  return this.reactions.length;
});

const thought = model ('thought', thoughtSchema);

module.exports = thought;