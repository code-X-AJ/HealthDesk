import Medicine from '../../models/Medicine.js';

// Get medication alerts for the user (low stock, refill needed)
export const getMedicationAlerts = async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ success: false, message: 'User ID is required' });
        }

        // Find medicines that need a refill (assumes Medicine model has quantityRemaining field)
        const medicines = await Medicine.find({
            userId,
            isActive: true,
            quantityRemaining: { $lt: 15 } // Alert when less than 15 remaining
        });

        // Generate alerts with estimated refill days
        const alerts = medicines.map(medicine => ({
            id: medicine._id,
            medicineName: medicine.name,
            remaining: medicine.quantityRemaining,
            refillDays: medicine.quantityRemaining // Simple estimate (modify based on dosage logic)
        }));

        // Sort by urgency (lowest remaining stock first)
        alerts.sort((a, b) => a.refillDays - b.refillDays);

        res.status(200).json({ success: true, data: alerts });
    } catch (error) {
        console.error('Error getting medication alerts:', error);
        res.status(500).json({ success: false, message: 'Failed to get alerts', error: error.message });
    }
};
