import { Schema, model, type Document } from 'mongoose';

interface IUser extends Document {
    username: string,
    email: string,
    thoughts?: Schema.Types.ObjectId[],
    friends?: Schema.Types.ObjectId[],
   
}


const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            unique: true,
            required: true, 
            trim: true, 
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: "Thought",
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    {
        toJSON: {
            virtuals: true, 
        },
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends?.length;
})

const User = model('User', userSchema);

export default User;