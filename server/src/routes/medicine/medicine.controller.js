import Medicine from '../../models/Medicine.js';

// Get all medicines for a user
const getAllMedicines = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is required' });
    }
    const medicines = await Medicine.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json(medicines);
  } catch (error) {
    console.error('Error fetching medicines:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch medicines', error: error.message });
  }
};

// Get a specific medicine by ID
const getMedicineById = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);

    if (!medicine) {
      return res.status(404).json({ success: false, message: 'Medicine not found' });
    }

    res.status(200).json(medicine);
  } catch (error) {
    console.error('Error fetching medicine:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch medicine', error: error.message });
  }
};

// Create a new medicine
const createMedicine = async (req, res) => {
  try {
    const { name, dosage, frequency, userId } = req.body;
    if (!name || !dosage || !userId) {
      return res.status(400).json({ success: false, message: 'Name, dosage, and userId are required fields' });
    }

    const newMedicine = new Medicine({ name: name, dosage: dosage, frequency: frequency, user:userId, ...req.body });

    const savedMedicine = await newMedicine.save();
    res.status(201).json(savedMedicine);
  } catch (error) {
    console.error('Error creating medicine:', error);
    res.status(500).json({ success: false, message: 'Failed to create medicine', error: error.message });
  }
};

// Update a medicine
const updateMedicine = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedMedicine = await Medicine.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    if (!updatedMedicine) {
      return res.status(404).json({ success: false, message: 'Medicine not found' });
    }

    res.status(200).json(updatedMedicine);
  } catch (error) {
    console.error('Error updating medicine:', error);
    res.status(500).json({ success: false, message: 'Failed to update medicine', error: error.message });
  }
};

// Soft delete a medicine (sets isActive to false)
const softDeleteMedicine = async (req, res) => {
  try {
    const { id } = req.params;

    const medicine = await Medicine.findByIdAndUpdate(id, { isActive: false }, { new: true });

    if (!medicine) {
      return res.status(404).json({ success: false, message: 'Medicine not found' });
    }

    res.status(200).json({ success: true, message: 'Medicine deleted successfully' });
  } catch (error) {
    console.error('Error deleting medicine:', error);
    res.status(500).json({ success: false, message: 'Failed to delete medicine', error: error.message });
  }
};

// Hard delete a medicine (permanent deletion)
const hardDeleteMedicine = async (req, res) => {
  try {
    const { id } = req.params;

    const medicine = await Medicine.findByIdAndDelete(id);
    if (!medicine) {
      return res.status(404).json({ success: false, message: 'Medicine not found' });
    }

    res.status(200).json({ success: true, message: 'Medicine permanently deleted' });
  } catch (error) {
    console.error('Error permanently deleting medicine:', error);
    res.status(500).json({ success: false, message: 'Failed to permanently delete medicine', error: error.message });
  }
};

export default {
  getAllMedicines,
  getMedicineById,
  createMedicine,
  updateMedicine,
  softDeleteMedicine,
  hardDeleteMedicine
};
