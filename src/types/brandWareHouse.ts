import { Optional } from 'sequelize';

export interface BrandWarehouseAttributes {
  id: number;
  name: string;
  enseigne: string;
  latitude: number;
  longitude: number;
  address: string;
}

export interface BrandWarehouseCreationAttributes extends Optional<BrandWarehouseAttributes, 'id'> {}

export interface BrandWarehouseUpdateAttributes extends Partial<BrandWarehouseAttributes