import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import AboutUs from "./pages/AboutUs"
import { ABOUT_US_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, FAQ_ROUTE, LOGIN_ROUTE, PRIVACY_POLICY_ROUTE, REFUND_POLICY_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, TERMS_OF_SERVICE_ROUTE, USER_ACCOUNT, SEARCH_SOMETHING, COLLECTION, BRANDS, BLOG, NEWS, PERSONALDATA, PRIVACYPOLICY, CUSTOMERS, CUSTOMER } from "./utils/consts"
import FAQ from "./pages/FAQ"
import Terms from "./pages/TermsOfSevice"
import Privacy from "./pages/Privacy"
import Refund from "./pages/RefundPolicy"
import Account from "./pages/Account"
import Search from "./pages/Search"
import CollectionPage from "./pages/Collection"
import TypePage from "./pages/TypesPage"
import BlogPg from "./pages/BlogPage"
import NewsPageSingle from "./pages/newsPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicy"
import PersonalDataPage from "./pages/PersonalData"
import ListCustomers from "./pages/ListOfCustomers"
import UserOnePage from "./pages/UserPage"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: USER_ACCOUNT,
        Component: Account 
    },
    {
        path: BASKET_ROUTE,
        Component: Basket 
    },
    {
        path: SEARCH_SOMETHING,
        Component: Search 
    },
    {
        path: ABOUT_US_ROUTE,
        Component: AboutUs 
    },
    {
        path: FAQ_ROUTE,
        Component: FAQ 
    },
    {
        path: TERMS_OF_SERVICE_ROUTE,
        Component: Terms 
    },
    {
        path: PRIVACY_POLICY_ROUTE,
        Component: Privacy 
    },
    {
        path: REFUND_POLICY_ROUTE,
        Component: Refund 
    },
    {
        path: PRIVACYPOLICY,
        Component: PrivacyPolicyPage 
    },
    {
        path: PERSONALDATA,
        Component: PersonalDataPage 
    },
    
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth 
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage 
    },
    {
        path: COLLECTION + '/:id',
        Component: CollectionPage
    },
    {
        path: CUSTOMERS,
        Component: ListCustomers
    },
    {
        path: CUSTOMER + '/:id',
        Component: UserOnePage
    },
    {
        path: BRANDS + '/:id',
        Component: TypePage
    },
    {
        path: BLOG + '/:id',
        Component: BlogPg
    },
    {
        path: NEWS + '/:id',
        Component: NewsPageSingle
    },
]