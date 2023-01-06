const { formatDate } = require('fullcalendar')
const mongoose=require('mongoose')
const { format } = require('morgan')
const dbUrl='mongodb+srv://Bright:12345@cluster0.lkl5zbo.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbUrl,{
    useNewUrlParser:true
})
const db = mongoose.connection
const Schema = mongoose.Schema

const calendarSchema = new Schema({
    idteam:{
        type:Schema.ObjectId
    },

    subject:{
        type:String,
        require:true,
    },

    location:{
        type:String,
        require:true
    },

    date:{
        type:String,
        require:true
    },

    s_time:{
        type:Date,
        require:true
    },

    e_time:{
        type:Date,
        require:true
    },

    detail:{
        type:String,
        require:true
    },

    latitude:{
        type:String,
        require:true
    },

    longtitude:{
        type:String,
        require:true
    }
})
const Calendars = module.exports=mongoose.model('calendar',calendarSchema)
module.exports.createAdddate = function(newCalendars,callback){
    newCalendars.save(callback)
}

module.exports.getAllData = function(data){
    Calendars.find(data)
}