import sequelize, { sequelize} from 'sequelize'
import databaseconfig from '../config/database.js'
import usuario from '../models/usuario.js'

const models = [usuario]

class modelconnection{
    constructor(){
        this.init()
    }

init(){
    this.connection = new sequelize(databaseconfig)
    models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models))
    }

}

export default new modelconnection()
   
