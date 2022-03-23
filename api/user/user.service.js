const axios  = require("axios")

async function getAllUsers() {
  try {
    const response = await axios.get(`${process.env.URI_API}/users`)
    return await response.data
  } catch (error) {
    throw error
  }
}

async function getAllPostsByUserId(id){
  try {
    const response = await axios.get(`${process.env.URI_API}/users/${id}/posts`)
    return await response.data
  } catch (error) {
    throw error
  }
}



module.exports = {
  getAllUsers,
  getAllPostsByUserId
}
