console.log("texto de prueba")

function refresh(){
    location.reload();
}

function showSolutions(){
    let element = document.getElementById("solutions");
    element.classList.toggle("hide");
    changeButtonTxt();
}
let buttonSolTxt;
function changeButtonTxt(){
    buttonSolTxt = document.getElementById("sol");
    if (buttonSolTxt.textContent === "Hide Solutions"){
        buttonSolTxt.textContent = "Show Solutions";
    }else{
        buttonSolTxt.textContent = "Hide Solutions";
    }
    
}
