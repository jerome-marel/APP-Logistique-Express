import { Optional } from 'sequelize';

export interface MainWarehouseAttributes {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  capacity: number;
}

export interface MainWarehouseCreationAttributes extends Optional<MainWarehouseAttributes, 'id'> {}

export interface MainWarehouseUpdateAttributes extends Partial<MainWarehouseAttributes