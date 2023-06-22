import { Request, Response } from "express";
import { User } from "../entities/User";
import { myConnection } from "../config/connectionConfig";

const getAll = async (req: Request, res: Response) => {
  try {
    const userRepository = myConnection.getRepository(User);
    const users = await userRepository.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const userID = Number(req.params.id);
    const userRepository = myConnection.getRepository(User);
    const foundUser = await userRepository.findOneBy({ id: userID });
    if (foundUser) {
      return res.status(200).json(foundUser);
    } else {
      return res
        .status(404)
        .json({ message: "no user can be found with this id" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addUser = async (req: Request, res: Response) => {
  try {
    const userRepository = myConnection.getRepository(User);
    const user = userRepository.create(req.body);
    const saveUser = await userRepository.save(user);
    return res.status(201).json(saveUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const editUser = async (req: Request, res: Response) => {
  try {
    const userID = Number(req.params.id);
    const userRepository = myConnection.getRepository(User);
    const foundUser = await userRepository.findOneBy({ id: userID });
    if (foundUser) {
      const userToBeSaved = {
        ...req.body,
        id: userID,
      };

      const updatedUser = await userRepository.save(userToBeSaved);
      return res.status(200).json(updatedUser);
    } else {
      return res
        .status(404)
        .json({ message: "no user can be found with this id" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userID = Number(req.params.id);
    const userRepository = myConnection.getRepository(User);
    const foundUser = await userRepository.findOneBy({ id: userID });
    if(foundUser){
        await userRepository.delete(foundUser);
        return res.status(204).send();
    }else{
        return res
        .status(404)
        .json({ message: "User can be found with this id" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const UserController = {
  getAll,
  getUserById,
  addUser,
  editUser,
  deleteUser,
};

export default UserController;
