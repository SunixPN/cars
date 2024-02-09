import Catalog from "../Components/Screeens/Catalog/Catalog"
import Auth from "../Components/Screeens/Auth/Auth"
import ProductCard from "../Components/Screeens/ProductCard/ProductCard"
import Auctions from "../Components/Screeens/Auctions/Auctions"
import Account from "../Components/Screeens/Account/Account"
import Sales from "../Components/Screeens/Sales/Sales"
import Buy from "../Components/Screeens/Buy/Buy"
import Rates from "../Components/Screeens/Rates/Rates"
import Favorites from "../Components/Screeens/Favorites/Favorites"


export const publicRoutes = [
    {
        path: "/",
        element: Catalog
    }
]

export const privateRoutes = [
    {
        path: "/auth",
        element: Auth
    },
    {
        path: "/:id",
        element: ProductCard
    },
    {
        path: "/auctions",
        element: Auctions
    },
    {
        path: "/settings",
        element: Account
    },
    {
        path: "/sales",
        element: Sales
    },
    {
        path: "/buy",
        element: Buy
    },
    {
        path: "/rates",
        element: Rates
    },
    {
        path: "/favorites",
        element: Favorites
    },

]