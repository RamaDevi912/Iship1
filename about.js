const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});
// toggle
function toggle_on(){
    var tog= document.getElementsByClassName("toggle-opt")[0];
    tog.style.right="0";    
}

function toggle_off(){
    var tog= document.getElementsByClassName("toggle-opt")[0];
    tog.style.right="-40vw";
}