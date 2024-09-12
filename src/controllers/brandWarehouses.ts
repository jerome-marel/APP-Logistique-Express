import { Request, Response } from "express";
import BrandWarehouse from "../models/BrandWarehouse";
import { BrandWarehouseUpdateAttributes } from "../types/BrandWarehouse";

export const getAllBrandWarehouses = async (req: Request, res: Response) => {
  try {
    const BrandWarehouses = await BrandWarehouse.findAll();
    res.json(BrandWarehouses);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getBrandWarehouseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const BrandWarehouse = await BrandWarehouse.findByPk(id);
    if (BrandWarehouse) {
      res.json(BrandWarehouse);
    } else {
      res.status(404).json({ message: "BrandWarehouse not found" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createBrandWarehouse = async (req: Request, res: Response) => {
  try {
    const BrandWarehouse = await BrandWarehouse.create(req.body);
    res.status(201).json(BrandWarehouse);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const updateBrandWarehouse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates: BrandWarehouseUpdateAttributes = req.body;
    const [updatedRows] = await BrandWarehouse.update(updates, {
      where: { id },
    });
    if (updatedRows > 0) {
      const updatedBrandWarehouse = await BrandWarehouse.findByPk(id);
      res.json(updatedBrandWarehouse);
    } else {
      res.status(404).json({ message: "BrandWarehouse not found" });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteBrandWarehouse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedRows = await BrandWarehouse.destroy({ where: { id } });
    if (deletedRows > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "BrandWarehouse not found" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
