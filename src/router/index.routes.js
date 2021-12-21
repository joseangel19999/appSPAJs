import { paginas } from "../controllers/index.controller";

let contenido = document.getElementById("contenidoPaginas");

const router = async(route) => {
    contenido.innerHTML = '';
    switch (route) {
        case "#/":
            {
                return contenido.appendChild(paginas.homeP());
            }
            break;
        case "#/home":
            {
                return contenido.appendChild(paginas.homeP());
            }
            break;
        case "#/productos":
            {
                return contenido.appendChild(await paginas.productosP());
            }
            break;
        case "#/acerca-de":
            console.log("estas en  -> acerca de  ", route);
            break;
        default:
            {
                return contenido.appendChild(await paginas.notfoundP());
            }
            break;
    }
}

export { router };