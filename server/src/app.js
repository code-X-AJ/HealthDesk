import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler.js';
import { requestLogger } from './middleware/logger.js';
import session from 'express-session';

// routes
import userRoutes from './routes/user/user.route.js';
import dashRoutes from './routes/dashboard/dashboardRoutes.js';
import medicineRoutes from './routes/medicine/medicine.routes.js';
import scheduleRoutes from './routes/schedule/schedule.routes.js';
import appointRoutes from './routes/appointment/appoint.router.js';
import medicalAlertRoutes from './routes/medicalAlert/medicalAlert.routes.js';

const app = express();
app.use(session({
    secret: process.env.SESSION_SECRET || 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set true if using HTTPS
}));

// Middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/appointments', appointRoutes);
app.use('/api/medication-alerts', medicalAlertRoutes);

// Error handling
app.use(errorHandler);

export default app;
