const mongoose = require('mongoose');

const urlDb = 'mongodb+srv://ander:Ander7047!@cluster0.dglid.mongodb.net/MusicDatabase?retryWrites=true&w=majority'

const connect = async () => {
    try {
        await mongoose.connect(urlDb, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`Conected with db succesfully`);
    }catch(error) {
        console.log('Error to connect with db')
    };
}

module.exports = {
    connect
};