const mongoose = require('mongoose')

const DatabaseConnection = async () => {
  try {
    const URI = process.env.MONGODB_URL || 'mongodb://localhost:27017/SocialMediaReunion'
    mongoose.connect(URI, {
      autoIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then((_message) => {
        // console.log(message)
        console.log('Database connected successfully.')
    }).catch(e => {
        console.error(e)
    })
  } catch (e) {
    throw e
  }
}

module.exports = DatabaseConnection