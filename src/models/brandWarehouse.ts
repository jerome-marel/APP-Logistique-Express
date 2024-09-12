import { Model, DataTypes, Sequelize } from "sequelize";
import {
  BrandWarehouseAttributes,
  BrandWarehouseCreationAttributes,
} from "../types/BrandWarehouse";

class BrandWarehouse
  extends Model<BrandWarehouseAttributes, BrandWarehouseCreationAttributes>
  implements BrandWarehouseAttributes
{
  public id!: number;
  public name!: string;
  public enseigne!: string;
  public latitude!: number;
  public longitude!: number;
  public address!: string;
}

export const initBrandWarehouse = (sequelize: Sequelize) => {
  BrandWarehouse.init(
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
      enseigne: {
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
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "BrandWarehouse",
      tableName: "brand_warehouses",
      timestamps: true,
    }
  );

  return BrandWarehouse;
};

export default BrandWarehouse;
