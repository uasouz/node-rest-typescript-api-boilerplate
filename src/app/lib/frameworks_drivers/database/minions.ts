import { Model, DataTypes} from "sequelize";;
import sequelize from '.';

class Minion extends Model {
    public id!: number;
    public name!: string;
    public color?: string;
}

Minion.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {tableName: "minions", sequelize: sequelize}
);