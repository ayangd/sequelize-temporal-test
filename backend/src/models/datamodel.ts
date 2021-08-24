import { HasManyRemoveAssociationMixin, INTEGER, STRING } from 'sequelize';
import {
    HasManyAddAssociationMixin,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    HasManyGetAssociationsMixin,
    HasManyHasAssociationMixin,
    Model,
    Optional,
    Sequelize,
} from 'sequelize';
import Temporal from 'sequelize-temporal';
import { DataModelColumn } from './datamodelcolumn';

export interface DataModelAttributes {
    id: number;
    name: string;
    description?: string;
}

export interface DataModelCreationAttributes
    extends Optional<DataModelAttributes, 'id'> {}

class DataModel
    extends Model<DataModelAttributes, DataModelCreationAttributes>
    implements DataModelAttributes
{
    id!: number;
    name!: string;
    description?: string;

    readonly createdAt!: Date;
    readonly updatedAt!: Date;

    getColumns!: HasManyGetAssociationsMixin<DataModelColumn>;
    createColumn!: HasManyCreateAssociationMixin<DataModelColumn>;
    removeColumn!: HasManyRemoveAssociationMixin<DataModelColumn, number>;

    public readonly columns?: DataModelColumn[];
}

function initDataModel(sequelize: Sequelize) {
    return Temporal(
        DataModel.init(
            {
                id: {
                    type: INTEGER.UNSIGNED,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: STRING,
                    allowNull: false,
                },
                description: {
                    type: STRING,
                    allowNull: true,
                },
            },
            { tableName: 'DataModel', sequelize }
        ),
        sequelize
    );
}

export default initDataModel;
