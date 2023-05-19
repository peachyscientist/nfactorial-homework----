let text = document.getElementById('text');



window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
   

});

document.addEventListener("DOMContentLoaded", function() {
    var mobileMenuButton = document.querySelector(".mobile-menu-button");
    var navigation = document.querySelector(".navigation");
  
    mobileMenuButton.addEventListener("click", function() {
      navigation.classList.toggle("mobile-nav");
    });
  });

  function showText() {
    var text = document.getElementById("text");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  