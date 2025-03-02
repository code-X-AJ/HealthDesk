import express from 'express';
import medicineController from './medicine.controller.js'; // Use the correct path

const router = express.Router();

// Medicine Routes
router.get('/', medicineController.getAllMedicines);
router.get('/:id', medicineController.getMedicineById);
router.post('/', medicineController.createMedicine);
router.put('/:id', medicineController.updateMedicine);
router.delete('/:id', medicineController.softDeleteMedicine);
router.delete('/:id/permanent', medicineController.hardDeleteMedicine);

export default router;
