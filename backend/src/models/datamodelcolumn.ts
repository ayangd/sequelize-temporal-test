import { INTEGER, STRING } from 'sequelize';
import { Model, Sequelize } from 'sequelize';
import Temporal from 'sequelize-temporal';

export interface DataModelColumnAttributes {
    dataModelId: number;
    name: string;
    type: string;
}

export class DataModelColumn
    extends Model<DataModelColumnAttributes>
    implements DataModelColumnAttributes
{
    dataModelId!: number;
    name!: string;
    type!: string;

    readonly createdAt!: Date;
    readonly updatedAt!: Date;
}

function initDataModelColumn(sequelize: Sequelize) {
    return Temporal(
        DataModelColumn.init(
            {
                dataModelId: {
                    type: INTEGER.UNSIGNED,
                    allowNull: false,
                },
                name: {
                    type: STRING,
                    allowNull: false,
                },
                type: {
                    type: STRING,
                    allowNull: false,
                },
            },
            { tableName: 'DataModelColumn', sequelize }
        ),
        sequelize
    );
}

export default initDataModelColumn;
