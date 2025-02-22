import AuthPage from "../pages/auth/AuthPage"
import Dashboard from "../pages/dashboard/Dashboard"
import MedicinePage from "../pages/medicine/MedicinePage"
import MedMartPage from "../pages/medmart/MedMartPage"
import ProfilePage from "../pages/profile/ProfilePage"
import SchedulePage from "../pages/schedule/SchedulePage"

const AuthRoutes = [
    {
        name: <AuthPage />,
        path: 'auth'
    },
    {
        name: <Dashboard />,
        path: 'dash'
    },
    {
        name: <MedicinePage />,
        path: 'meds'
    },
    {
        name: <SchedulePage />,
        path: 'schedule'
    },
    {
        name: <ProfilePage />,
        path: 'profile'
    },
    {
        name: <MedMartPage />,
        path: 'medmart'
    },
]

export default AuthRoutes
