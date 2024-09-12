import express from 'express';
import {
  getAllMainWarehouses,
  getMainWarehouseById,
  createMainWarehouse,
  updateMainWarehouse,
  //deleteMainWarehouse
} from '../controllers/mainWarehouse';

const router = express.Router();

router.get('/', getAllMainWarehouses);
router.get('/:id', getMainWarehouseById);
router.post('/', createMainWarehouse);
router.put('/:id', updateMainWarehouse);
//router.delete('/:id', deleteMainWarehouse);

export default router;
