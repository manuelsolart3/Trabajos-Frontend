import mongoose from 'mongoose';

  export const connectDB = async ()=> {
    try {
      await mongoose.connect('mongodb+srv://manuelsenaplus123:1234@cluster0.idwei3i.mongodb.net/');

       console.log('>>> DB is connected')
    } catch (error) {
       console.log(error); 
    };
  };  