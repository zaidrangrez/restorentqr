import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String
        },

        email:{
            type:String
        },

        phone:{
            type: Number,
        },

        role:{
            type: String,
            enum: ['customer','admin'],
            default : 'customer',
        },

        totalSpend:{
            type: Number,
        },

        totalOrders:{
            type:Number,
        },
        accountType:{
            type:String,
            enum:["REGISTERED","GUEST"],
            default:"REGISTERED"
        },

        loyalPoints:{
            type:Number,
        },

        passwordHash:{
            type: String,
        },

        isActive:{
            type: Boolean,
        },

        lastLogin: {
            type: Date
        }, 

        refreshTokenExpiresTime:{
            type: Date
        },
        
        refreshToken: {
            type: String,
        },

    }
);

const User = mongoose.model('User',userSchema)
export default User;