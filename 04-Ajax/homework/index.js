$('.boton').click(function () {
    $.ajax({
        url: "http://localhost:5000/amigos",
        method: "GET",
        success: function (data) {
            const lista = document.querySelector("#lista");
            lista.innerHTML = "";
            data.forEach(element => {
                const div = document.createElement("div");
                const paragraph = document.createElement("p");
                paragraph.innerText = element.name;
                paragraph.classList = "paragraphFriends";
                paragraph.id = `p${element.id}`;
                div.appendChild(paragraph);
                lista.appendChild(div);
            });
        }
    })
});


let btnSearch = $('#search');

btnSearch.click(function (e) {
    const friend = document.querySelector("#amigo");
    friend.style.display = "none";
    const inputSearch = $("#input");
    if (inputSearch[0].value === "") {
        console.log("error");
    } else {
        const id = inputSearch[0].value;
        $.ajax({
            url: `http://localhost:5000/amigos/${id}`,
            method: "GET",
            success: function (data) {
                const pFriend = $(`#p${data.id}`)[0]
                marked(pFriend);
            },
            error: function (data) {

                friend.innerHTML = "No se encotró a el amigo"
                friend.style.display = "block"
                console.log(friend);
            }
        });
    }
});


let btnDelete = $('#delete');

btnDelete.click(function (e) {
    const inputDelete = $("#inputDelete");
    if (inputDelete[0].value === "") {
        console.log("error");
    } else {
        const id = inputDelete[0].value;
        $.ajax({
            url: `http://localhost:5000/amigos/${id}`,
            method: "DELETE",
            success: function (data) {
                const spanDelete = document.querySelector("#spanDelete");
                spanDelete.innerHTML = "Amigo eliminado con exito."
            }
        });
    }
});

let lastMarked = "";
function marked(pId) {
    if (!lastMarked) lastMarked = pId;
    lastMarked.classList = "paragraphFriends";
    pId.classList = pId.classList + " marked";
    lastMarked = pId;
}