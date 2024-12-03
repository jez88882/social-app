import mongoose, { model, Schema } from "mongoose";

interface IAccount {
  _id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string;
  access_token: string;
  expires_at: number;
  scope: string;
  id_token: string;
  session_state: string;
}

const accountSchema = new Schema<IAccount>(
  {
    userId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    providerAccountId: {
      type: String,
      required: true,
    },
    refresh_token: {
      type: String,
      required: true,
    },
    access_token: {
      type: String,
      required: true,
    },
    expires_at: {
      type: Number,
      required: true,
    },
    scope: {
      type: String,
      required: true,
    },
    id_token: {
      type: String,
      required: true,
    },
    session_state: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const accountModel =
  mongoose.models.Account ?? model<IAccount>("Account", accountSchema);

export default accountModel;
