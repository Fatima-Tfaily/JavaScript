const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.getElementById("closeBtn");
const modalContent = document.querySelector(".modal-content");
function closeModal() {
  modal.style.display = "none";
}
closeBtn.addEventListener("click", closeModal());
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