import HomePage from "../pages/HomePage";
import ResumePage from "../pages/ResumePage";
import PortfolioPage from "../pages/PortfolioPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/resume",
        component: ResumePage
    },
    {
        path: "/portfolio",
        component: PortfolioPage
    },
    {
        path: "/blog",
        component: BlogPage
    },
    {
        path: "/contact",
        component: ContactPage
    }
];
export default routes;