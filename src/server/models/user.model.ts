import mongoose, { model, Schema } from "mongoose";

interface IUser {
  id: string;
  name: string;
  email: string;
  username?: string;
  profileDescription?: string;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profileDescription: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
    username: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.models.User ?? model<IUser>("User", userSchema);

export default userModel;
