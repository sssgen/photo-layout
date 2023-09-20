import LandingPage from '../../pages/Landing/Landing'
import ContactUs from '../../pages/ContactUs/ContactUs'
import Price from '../../pages/Price/Price'

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
    },
    {
        path: '/price',
        element: <Price />,
        key: 3
    }
]