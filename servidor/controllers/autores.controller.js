const Autores = require("../models/autores.model")
// ...recuperar un array de todos los documentos de la colección User
module.exports.obtenerTodos = (request, response) => {
    Autores.find({}).collation({ locale: "es", numericOrdering: true }).sort({ name: 1 })
        .then(respuesta => {
            response.json(respuesta);
        })
        .catch(err => response.json(err));
}
module.exports.obtenerUno = (request, response) => {
    // ...recuperar 1 documento (el primer registro encontrado) que coincida con los criterios del objeto de consulta
    Autores.findOne({ _id: request.params.id })
        .then(respuesta => {
            response.json(respuesta);
        })
        .catch(err => response.json(err));
}
module.exports.actualizar = (request, response) => {
    // ...actualizar 1 documento que coincida con los criterios del objeto de consulta
    Autores.updateOne({ _id: request.params.id }, request.body, { runValidators: true })
        .then(respuesta => {
            response.json(respuesta);
        })
        .catch(err => response.status(400).json(err));
}
module.exports.eliminar = (request, response) => {
    // ...eliminar 1 documento que coincida con los criterios del objeto de consulta
    Autores.remove({_id: request.params.id })
        .then(respuesta => {
            response.json(respuesta);
        })
        .catch(err => response.json(err));
}
module.exports.crear = (request, response) => {
    Autores.create(request.body)
        .then(respuesta => {
            response.json(respuesta);
        })
        .catch(err => response.status(400).json(err));
}


