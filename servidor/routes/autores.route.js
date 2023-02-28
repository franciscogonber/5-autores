const Controlador = require ("../controllers/autores.controller");
const {authenticate} = require ("../config/jwt.config")

module.exports = app => {
    app.get("/api/autores", authenticate, Controlador.obtenerTodos);
    app.get("/api/autores/:id", authenticate, Controlador.obtenerUno);
    app.post("/api/autores/new", authenticate, Controlador.crear);
    app.put("/api/autores/:id/edit",authenticate, Controlador.actualizar);
    app.delete("/api/autores/delete/:id",authenticate, Controlador.eliminar);
}