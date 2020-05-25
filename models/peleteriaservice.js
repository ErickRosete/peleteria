//Dependencies
var mongoose=require("mongoose");
var Schema = mongoose.Schema;

//Schema
var serviceSchema=new Schema({
    title:String,
    titulo:String,
    price:String,
    category:[{
        type: String
    }],
    description:String,
    descripcion:String,
    heading:String,
    encabezado:String,
    photos:[{
        type: String
    }],
    imagen:String
})

//Return model
module.exports=mongoose.model("Services",serviceSchema)
