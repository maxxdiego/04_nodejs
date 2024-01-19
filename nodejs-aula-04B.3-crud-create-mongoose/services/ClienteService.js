import cliente from "../models/Cliente.js"
import mongoose from "mongoose"

const Cliente = mongoose.model("Cliente", cliente)

class ClienteService {
    // Método para selecionar todos os registros no banco
    SelectAll() {
        const clientes = Cliente.find()
        return clientes
    }
}

export default new ClienteService()