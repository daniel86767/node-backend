import sequaliza,  {model} from 'sequelize';

export default class usuario extends model{
    static init (sequelize){
        super.init({
                nome: sequaliza.STRING,
                email: sequaliza.STRING,
                senha: sequaliza.STRING,
                token: sequaliza.string,
        }, {
            sequelize
        }
    
        )
        return this;
    }
}