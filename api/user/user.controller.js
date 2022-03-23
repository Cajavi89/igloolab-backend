const {
  getAllUsers,
  getAllPostsByUserId,
} = require('./user.service')


async function getAllUsersHandler(req,res) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);

  } catch (error) {
    return res.status(400).json({Error: error.message})
  }
}

async function getAllPostsByIdHandler(req, res){
  const { id } = req.params
  try {
    const posts = await getAllPostsByUserId(id)
    return res.status(200).json(posts);

  } catch (error) {
    return res.status(400).json({Error:error.message})
  }
}

module.exports = {
  getAllUsersHandler,
  getAllPostsByIdHandler
}
