const mongoose=require("mongoose");
const OwnerSchema=new mongoose.Schema({
    Shopname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    timing:{
        type:String,
        required:true
    },
    geometry:{
        type:{
            type:String,
            enum:['Point'],
            required:true
        },
        coordinates:{
            type: [Number],
            required:true
        }
    },
    address:{
        type:String,
        required:true
    },
    imagePath:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});


const Owner=mongoose.model('Owner',OwnerSchema);

module.exports=Owner;