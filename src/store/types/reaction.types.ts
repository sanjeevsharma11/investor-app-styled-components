export interface IReactions {
  reaction: string;
  count: number;
}

export interface IUserReaction {
  _id: string;
  userId: string;
  reaction: string;
  refId: string;
  refType: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
