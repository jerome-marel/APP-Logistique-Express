import { Model, DataTypes, Sequelize } from "sequelize";
import {
  MainWarehouseAttributes,
  MainWarehouseCreationAttributes,
} from "../types/mainWarehouse";

class MainWarehouse
  extends Model<MainWarehouseAttributes, MainWarehouseCreationAttributes>
  implements MainWarehouseAttributes
{
  public id!: number;
  public name!: string;
  public latitude!: number;
  public longitude!: number;
  public capacity!: number;
}

export const initMainWarehouse = (sequelize: Sequelize) => {
  MainWarehouse.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "MainWarehouse",
    }
  );

  return MainWarehouse;
};

export default MainWarehouse;
