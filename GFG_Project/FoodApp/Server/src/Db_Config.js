const mongoose=require('mongoose');

class DataBase{

    static async Create()
    {
        try{
              await mongoose.connect('mongodb://localhost:27017/Mern_Db')
        }catch(err)
        {
            console.log(err);
        }
    }
}

module.exports = DataBase;