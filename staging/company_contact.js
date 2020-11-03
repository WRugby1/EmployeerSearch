// // company_contact.js to create the intermedieate table which will enable  
// // many-to-many association between a company and contact(s) 

// module.exports = function(sequelize, DataTypes){
//     var companyContact = sequelize.define("companyContact", {
//         companyId: {
//             type: DataTypes.STRING
//         },
//         contactId: {
//             type: DataTypes.STRING
//         }
//     });
//     company.belongsToMany(contact, { as: 'Contact', through: { model: companyContact, unique: false }, foreignKey: 'contact_id' });
//     contact.belongsToMany(company, { as: 'Company', through: { model: companyContact, unique: false }, foreignKey: 'company_id' });
    
//     return company_contact;
// };
