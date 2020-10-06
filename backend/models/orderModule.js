import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: {type: String, requried: true},
            qty: {type: Number, requried: true},
            image: {type: String, requried: true},
            price: {type: Number, requried: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                requried: true,
                ref: 'Product'
            },
        }
    ],
    
    shippingAddress: {
        address: {type: String, requried: true},
        city: {type: String, requried: true},
        postalCode: {type: String, requried: true},
        country: {type: String, requried: true}
    },

    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_adress: {type: String},

    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paindAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt:{
        type: Date,
    }
}, 
{
    timestamps: true
})

const Order = mongoose.model('Order, orderSchema')

export default Order