const user = require("../model/userModel");

const getUser = async (req, res) => {
  try {
    const users = await user.findAll();
    console.log("Value in user.findall getuser ", users);
    res.status(200).send(users);
  } catch (err) {
    console.log("Error in getting users:", err);
    res.status(500).send("Failed to fetch users.");
  }
};

const addUser = async (req, res) => {
  const { name, email, number } = req.body;
  if (!name || !email || !number) return res.status(400).send("All fields are mandatory.");

  try {
    const addedUser = await user.create({ name, email, number });
    console.log("Added User:", addedUser);
    res.status(201).send({ name, number, email });
  } catch (err) {
    console.log("Error in adding user:", err);
    res.status(500).send("Failed to add user.");
  }
};

const patchUser = async (req, res) => {
  const { name, number, email } = req.body;
  const id = req.params.id;
  if (!name || !number || !email) return res.status(400).send("All fields are required.");

  try {
    const userToUpdate = await user.findOne({ where: { id } });
    if (!userToUpdate) return res.status(404).send("User not found.");

    userToUpdate.name = name;
    userToUpdate.number = number;
    userToUpdate.email = email;
    await userToUpdate.save();

    res.status(200).send({ status: "Updated" });
  } catch (err) {
    console.log("Error in updating user:", err);
    res.status(500).send("Failed to update user.");
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const userToDelete = await user.findOne({ where: { id } });
    if (!userToDelete) return res.status(404).send("User not found.");

    await userToDelete.destroy();
    res.status(200).send({ status: "Deleted" });
  } catch (err) {
    console.log("Error in deleting user:", err);
    res.status(500).send("Failed to delete user.");
  }
};

module.exports = { getUser, addUser, patchUser, deleteUser };
