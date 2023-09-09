import LandingPage from '../../pages/Landing/Landing'
import ContactUs from '../../pages/ContactUs/ContactUs'

export const PublicRoutes = [
    {
        path: '/',
        element: <LandingPage />,
        key: 1
    },
    {
        path: '/contact',
        element: <ContactUs />,
        key: 2
    }
]