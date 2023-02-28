const { default: mongoose } = require("mongoose");

// Crear un esquema para usuarios
const AutoresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Campo requerido"],
        minLength: [3, "El nombre del autor debe tener minimo 3 caracteres"]
    }
}, { timestamps: true })
// crear una función constructora para nuestro modelo y almacenarla en la variable 'User'
const Autores = mongoose.model('Autores', AutoresSchema);
module.exports=Autores;

