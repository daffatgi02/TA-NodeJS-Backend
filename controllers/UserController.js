import User from "../models/UserModel.js";

// Funsi untuk handle error
const handleError = (error, res) => {
  console.log(error.message);
  res.status(500).json({ error: error.message });
};

// mengambil semua data user
export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    handleError(error, res);
  }
};

// mengambil user dengan id
export const getUsersById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    handleError(error, res);
  }
};

// membuat User
export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    handleError(error, res);
  }
};

// meng Update user
export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    handleError(error, res);
  }
};

// Mendelete User
export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User deleted" });
  } catch (error) {
    handleError(error, res);
  }
};
