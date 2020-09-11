const mongoose = require('mongoose')

module.exports = async () => {
    
    try {
        
        const DB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`DB Connected... ${DB.connection.host}`)

    } catch (error) {

        console.log(error)
    }

}