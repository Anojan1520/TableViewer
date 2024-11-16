function ModalAddEdit() {
    document.querySelector(".model-center").style.display = "block";
    document.getElementById("submit-btn1").style.display = "block";
    document.getElementById("submit-btn2").style.display = "none";



}
function modelCancel() {
    document.querySelector(".model-center").style.display = "none";


}


var MovieArray = JSON.parse(localStorage.getItem('movies')) || []

function AddData(event) {
    event.preventDefault()
    var Moviename = document.getElementById("Moviename").value;
    var Actor = document.getElementById("Actor").value;
    var Price = document.getElementById("Price").value;
    var moveieDetail = { moviename: Moviename, actor: Actor, price: Price }
    MovieArray.push(moveieDetail)
    console.log(moveieDetail)

    localStorage.setItem('movies', JSON.stringify(MovieArray))


    modelCancel();
    window.location.reload()
}
for (let i = 0; i < MovieArray.length; i++) {
    const element = MovieArray[i];
    console.log(element)
    var data = document.createElement('div')
    data.className = "tr"
    data.innerHTML = `
                    <div class="td">
                        <h3>${element.moviename}</h3>
                    </div>
                    <div class="td">
                        <h3>${element.actor}</h3>
                    </div>
                    <div class="td">
                        <h3>${element.price}</h3>
                    </div>
                    <div class="td">
                    <button class="submit-btn" value="${i}" onclick="Edit(event)">Edit</button><button class="submit-btn Cancel" value="${i}">Delete</button>
                    </div>
                    
                `
    document.getElementById("grid-tbody").appendChild(data)
    var data1 = document.createElement('tr')
    data1.innerHTML = `
                    <td>${element.moviename}</td>
                    <td>${element.actor}</td>
                    <td>${element.price}</td>
                    <td><button class="submit-btn" value="${i}" onclick="Edit(event)">Edit</button><button class="submit-btn Cancel" value="${i}" onclick=" deleteArray(event)">Delete</button></td>
                `
    document.getElementById("tbody").appendChild(data1)
}

function Edit(event) {
    document.querySelector(".model-center").style.display = "block";
    document.getElementById("submit-btn1").style.display = "none";
    document.getElementById("submit-btn2").style.display = "block";
    let arrayPlace = event.target.value
    let array = MovieArray[arrayPlace]
    document.getElementById("Moviename").value = array.moviename;
    document.getElementById("Actor").value = array.actor;
    document.getElementById("Price").value = array.price;
    document.getElementById("submit-btn2").value = arrayPlace;


}

function EditDetails(event) {
    let arrayPlace = event.target.value
    let array = MovieArray[arrayPlace]
    var Moviename = document.getElementById("Moviename").value;
    var Actor = document.getElementById("Actor").value;
    var Price = document.getElementById("Price").value;
    array.moviename = Moviename;
    array.actor = Actor;
    array.price = Price;

    localStorage.setItem('movies', JSON.stringify(MovieArray));
}

function deleteArray(event){
    let arrayPlace=event.target.value;
    MovieArray.splice(arrayPlace,1);
    localStorage.setItem('movies',JSON.stringify(MovieArray));
    window.location.reload()
}