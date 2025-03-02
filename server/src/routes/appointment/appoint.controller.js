import Appointment from '../../models/Appoint.js';

// Get next upcoming appointment for the user
export const getNextAppointment = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is required' });
    }

    const today = new Date();

    // Find the next upcoming appointment
    const appointment = await Appointment.findOne({
      userId,
      date: { $gte: today },
      status: 'scheduled'
    }).sort({ date: 1 });

    if (!appointment) {
      return res.status(200).json({ success: true, data: null });
    }

    // Format the date as a readable string
    const formattedDate = appointment.date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    // Format the response
    const formattedAppointment = {
      id: appointment._id,
      doctorName: appointment.doctorName,
      specialty: appointment.specialty,
      date: formattedDate,
      time: appointment.time
    };

    res.status(200).json({ success: true, data: formattedAppointment });
  } catch (error) {
    console.error('Error getting next appointment:', error);
    res.status(500).json({ success: false, message: 'Failed to get appointment', error: error.message });
  }
};
