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
        loyalPoints:{
            type:Number,
        },
        passwordHash:{
            type: String,
        },
        isActive:{
            type: Boolean,
        },
        refreshToken: {
            type: String,
        },

    }
)