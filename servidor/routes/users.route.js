const ControladorUsuario = require ("../controllers/users.controller");
module.exports = app => {
   
    app.post("/api/registrar", ControladorUsuario.registrarUsuario);
    app.post("/api/login", ControladorUsuario.loginUsuario);
    
}