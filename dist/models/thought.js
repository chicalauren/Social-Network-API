import { Schema, Types, model } from 'mongoose';
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 128,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp),
    }
}, {
    toJSON: { getters: true },
    _id: false,
});
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 128,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp),
    },
    username: {
        type: String,
        // ref: "User",
        required: true,
    },
    reactions: [reactionSchema],
}, {
    toJSON: { getters: true },
});
const Thought = model('Thought', thoughtSchema);
export default Thought;
