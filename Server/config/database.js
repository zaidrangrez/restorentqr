import mongoose from 'mongoose'

const dbConnect = async()=>{
    try {
        const connection = await mongoose.connect('mongodb+srv://z4ynxi_db_user:zaid4736251@cluster0.edzflbt.mongodb.net/restorent-qr?appName=Cluster0')
        console.log("db connected")
    } catch (error) {
        console.log("error")
    }
}

export default dbConnect;