const openBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");
openBtn.addEventListener("click", function(){
   const userInput = prompt("Enter the modal title:");
    if (userInput) {
    modalTitle.textContent="";
    modalTitle.textContent = userInput;
    modal.style.display = "block";
    modal.html = modalContent;
}
}
)
closeBtn.addEventListener("click",function(){
    modal.style.display = "none";
})
window.addEventListener("click",function(event){
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });