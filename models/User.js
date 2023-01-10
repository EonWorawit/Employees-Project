const mongoose=require('mongoose')
const dbUrl='mongodb+srv://Bright:12345@cluster0.lkl5zbo.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbUrl,{
    useNewUrlParser:true
})
const db = mongoose.connection
const Schema = mongoose.Schema

const empolyeeSchema = new Schema({
    id:{
        type:Schema.ObjectId
    },
    isAdmin:{
        type:Boolean
    },
    username:{
        type:String,
        require:true,
        unique: true
    },
    password:{
        type:String,
        require:true
    },
    identityNo:{
        type:String,
        require:true,
        unique: true
    },
    jobPosition:{
        type:String,
        require:true
    },
    position:{
        type:String,
        require:true
    },
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    phoneNo:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    moo:{
        type:String,
        require:true
    },
    street:{
        type:String,
        require:true
    },
    disdrict:{
        type:String,
        require:true
    },
    ambhur:{
        type:String,
        require:true
    },
    province:{
        type:String,
        require:true
    },
    zipCode:{
        type:String,
        require:true
    }
})
const Empolyees = module.exports=mongoose.model('empolyee',empolyeeSchema)
module.exports.createUser = function(newEmpolyees,callback){
    newEmpolyees.save(callback)
}

module.exports.gatAllData = function(data){
    Empolyees.find(data)
}