
// module.exports = {
//     HOST: 'localhost',
//     USER: 'root',
//     PASSWORD: 'Tien24051998@',
//     DB: 'crowdfunding',
//     dialect: 'mysql',
//     define: {
//         underscored: true,
//         freezeTableName: true
//     },
//     pool: {
//         max: 5,
//         min:0,
//         acquire: 30000,
//         idle: 10000
//     }
// };

module.exports = {
    HOST: "localhost",
    PORT: 3308,
    USER: "root",
    PASSWORD: "",
    DB: "crfsv",
    dialect: "mysql",
    define: {
      underscored: true,
      freezeTableName: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };