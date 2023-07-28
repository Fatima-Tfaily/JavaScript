const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.getElementById("closeBtn");
const modalContent = document.querySelector(".modal-content");
openBtn.addEventListener("click", function(){
    modal.style.display = "block";
    modal.html = modalTitle;
})
closeBtn.addEventListener("click", function(){
    modal.style.display = 'none';
}
);
modalContent.addEventListener("click",function(){
    modal.style.display = 'none';
})