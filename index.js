let dragarea = document.querySelector(".appbody"),
dragtext = dragarea.querySelector("h3"),
button = dragarea.querySelector("button"),
input = dragarea.querySelector("input");
let myfile;

button.onclick = () =>{
    input.click()
}

input.addEventListener("change",function(){
    myfile = this.files[0];
    dragarea.classList.add("active");
    showme();
})

dragarea.addEventListener("dragover",(e)=>{
    e.preventDefault();
    dragarea.classList.add("active");
    dragtext.textContent = "Upload File";
})

dragarea.addEventListener("dragleave",()=>{
    dragarea.classList.remove("active");
    dragtext.textContent="Drag and Drop";
})

dragarea.addEventListener("drop",(ev)=>{
    ev.preventDefault();
    myfile = ev.dataTransfer.files[0];
    showme();
})

function showme(){
    let filetype = myfile.type;
    let valed = ["image/jpeg","image/jpg","image/png"];

    if (valed.includes(filetype)){
       let filereader = new FileReader();

       filereader.onload = () =>{
        let imgurl = filereader.result;
        let img =`<img src="${imgurl}" alt="">`
        dragarea.innerHTML = img;
       }
       filereader.readAsDataURL(myfile);
    }
    else{
        alert("Faltu File Valo File Dao");
        dragarea.classList.remove("active");
        dragtext.textContent="Drag and Drop";
    }
}