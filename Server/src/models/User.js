const { DataTypes } = require('sequelize');
// sequilize es la instancia que recibe
module.exports = (sequelize) => {
   //A partir de esta instancia definimos al modelo
   sequelize.define('User', {
      //Atributos
      id: {
         type: DataTypes.INTEGER, //Tipo de dato
         allowNull: false, //constraist
         primaryKey: true,
         autoIncrement: true
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false }); //propiedad para eliminar los campos por default create, update 
};
