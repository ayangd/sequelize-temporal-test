sequelize-temporal-test
===

This project is a test on how I can implement `sequelize-temporal` for security log and rollbacks. Turns out that this module only capable of storing row histories, and you can simply track sequelize model triggers by **hooks** (after reading the `index.js` on the [sequelize-temporal](https://github.com/bonaval/sequelize-temporal) github).