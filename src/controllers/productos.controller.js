import productos from "../views/productos.html";

const getProductos = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
}
export default async() => {

    const divElement = document.createElement('div');
    divElement.innerHTML = productos;

    const prod = divElement.querySelector("#productos");
    let totalProd = divElement.querySelector("#totalProductos");

    const prodElement = await getProductos();
    totalProd.innerHTML = prodElement.length;
    prodElement.forEach((post) => {
        prod.innerHTML += `
            <li class="list-group border-primary bg-dark text-white">
                <h3>
                ${post.title}
                </h3>
                <p>
                ${post.body}
                </p>
            </li>
        `;
    });
    return divElement;
}