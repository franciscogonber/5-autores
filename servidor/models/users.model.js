const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt")

// Crear un esquema para usuarios

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "First name is required"]
    },
    apellido: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
}, { timestamps: true });
//la parte que encripta 
UserSchema.pre('save', async function (next) {
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10)
        this.password = hashedPassword
        next()
    } catch (error) {
        console.log("error en el modelo ")
    }
});

// crear una función constructora para nuestro modelo y almacenarla en la variable 'Users'
module.exports = mongoose.model('Usuario', UserSchema);