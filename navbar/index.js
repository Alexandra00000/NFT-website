function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();






// function myFunction() {
//     let x = document.getElementById('myDIV');
//     if (x.style.display === 'none') {
//       x.style.display = 'block';
//     } else {
//       x.style.display = 'none';
//     }
//   }
//   let answers=document.querySelectorAll(".accordion");
//         answers.forEach((event)=>{
//             event.addEventListener('click',()=>{
//                 if(event.classList.contains("active")){
//                     event.classList.remove("active");
//                 }
//                 else{
//                     event.classList.add("active");
//                 }
//             })
//         })