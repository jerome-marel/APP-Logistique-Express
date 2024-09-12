import { Request, Response } from "express";
import MainWarehouse from "../models/mainWarehouse";
import { MainWarehouseUpdateAttributes } from "../types/mainWarehouse";

export const getAllMainWarehouses = async (req: Request, res: Response) => {
  try {
    const mainWarehouses = await MainWarehouse.findAll();
    res.json(mainWarehouses);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getMainWarehouseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const mainWarehouse = await MainWarehouse.findByPk(id);
    if (mainWarehouse) {
      res.json(mainWarehouse);
    } else {
      res.status(404).json({ message: "MainWarehouse not found" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createMainWarehouse = async (req: Request, res: Response) => {
  try {
    const mainWarehouse = await MainWarehouse.create(req.body);
    res.status(201).json(mainWarehouse);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const updateMainWarehouse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates: MainWarehouseUpdateAttributes = req.body;
    const [updatedRows] = await MainWarehouse.update(updates, {
      where: { id },
    });
    if (updatedRows > 0) {
      const updatedMainWarehouse = await MainWarehouse.findByPk(id);
      res.json(updatedMainWarehouse);
    } else {
      res.status(404).json({ message: "MainWarehouse not found" });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// export const deleteMainWarehouse = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const deletedRows = await MainWarehouse.destroy({ where: { id } });
//     if (deletedRows > 0) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: "MainWarehouse not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: (error as Error).message });
//   }
// };
