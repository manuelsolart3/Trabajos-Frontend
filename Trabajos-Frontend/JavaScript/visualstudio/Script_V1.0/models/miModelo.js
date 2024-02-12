import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
 numero_i: String,
 nombre_u: String,
 apellido: String,
 fecha_n: Date,
 telefono: String,
 ciudad: String,
 correo: String,
 contraseña: String,
 tipo_perfil: String
});

const usuarios = mongoose.model('usuario', usuarioSchema);
export default usuarios;