import { IUserResponse } from "../models/IUserResponse";

export const getAllUsers = async ():Promise<IUserResponse> => {
    const users = await fetch('https://dummyjson.com/users')
        .then(res => res.json());

    return users;
}