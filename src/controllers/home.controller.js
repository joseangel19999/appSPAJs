import views from '../views/home.html';

export default () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    const btnGuardar = divElement.querySelector("#btnGuardar");
    btnGuardar.addEventListener("click", () => {
        alert("click guardar");
    });

    return divElement;
}
/* export { paginaHome }; */