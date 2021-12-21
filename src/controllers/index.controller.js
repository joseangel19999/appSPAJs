import Home from "./home.controller";
import Productos from "./productos.controller";
import NotFound from "./404.controller";

const paginas = {
    homeP: Home,
    productosP: Productos,
    notfoundP: NotFound
}

export { paginas };