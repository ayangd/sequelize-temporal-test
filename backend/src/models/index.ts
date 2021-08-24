import { Sequelize } from 'sequelize';
import initDataModel from './datamodel';
import initDataModelColumn from './datamodelcolumn';

export const sequelize = new Sequelize('sqlite:../database.sqlite');
export const DataModel = initDataModel(sequelize);
export const DataModelColumn = initDataModelColumn(sequelize);

DataModel.hasMany(DataModelColumn, {
    sourceKey: 'id',
    foreignKey: 'dataModelId',
    as: 'columns',
});
console.log(DataModel.rawAttributes);
