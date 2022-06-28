'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Gaston',
        lastName: 'Acosta',
        cuit: '23391936099',
        email: 'gasteac@gmail.com',
        password:
          '$2b$10$Rk23lwC7BsFNkWujkp/5jOFL.3PY58bg8QrrYOYiFGds23iXoorzG',
        roleId: 1,
      },
      {
        firstName: 'Diego',
        lastName: 'Sosa',
        cuit: '23958435369',
        email: 'dhsosa98@gmail.com',
        password:
          '$2b$10$jBmRUAPrgvxv6Mr7PaYW0ug4hxbVEOHokba4OTLAPbXWNvo5akcU.',
        roleId: 2,
      },
      {
        firstName: 'Franco',
        lastName: 'Ruiz',
        cuit: '23400000009',
        email: 'elfranco@gmail.com',
        password:
          '$2b$10$XJ15rMwt76jq//gjxnMmY.3dlnvVs.DZP9zssC5b4CArlPgdtOZG2',
        roleId: 2,
      },
      {
        firstName: 'Joaquin',
        lastName: 'Ramirez',
        cuit: '23454656559',
        email: 'joaquingil@gmail.com',
        password:
          '$2b$10$4pUdGUgis93wmpsn8xYtGOijAkdtFOlNlHXZABUii7gfnbMdXoWtS',
        roleId: 2,
      },
      {
        firstName: 'Ariel',
        lastName: 'Acevedo',
        cuit: '23393146389',
        email: 'acevedoariel.ea1@gmail.com',
        password:
          '$2b$10$C9aFiy3rgFCRN/exsM.1r.rljEtr5BPGfrrFyxS8TdlrygC.j63a2',
        roleId: 2,
      },
      {
        firstName: 'Tomas',
        lastName: 'Vilalta',
        cuit: '23545435439',
        email: 'aguantedota@gmail.com',
        password:
          '$2b$10$BbaSBPucE2McEBjT20R3nO/z1QfgIyDXvSSlhpAG1H4ROt3eJTbR2',
        roleId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
