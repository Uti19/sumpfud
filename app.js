const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
}) 

 // var i = 0;
  //var images = [];
  //var time = 3000;

  //images[0] = 'drink.jpg';
  //images[1] = 'meat.jpg';
  //images[2] = 'turkey.jpg';

 // function changeImg(){
     // document.slide.src = images[i];

      //if(i < images.length - 1){
        //  i++ 
      //} else {
        //  i = 0;
      //}
      //setTimeout("changeImg()", time); 
  //}

  //window.onload = changeImg; 

  var slideIndex = 0;
  showSlides();

  function showSlides() {
       var i;
       var slides =
       document.getElementsByClassName("mySlides");
       var dots = document.getElementsByClassName("dot");
       for (i = 0; i < slides.length; i++)
       {
           slides[i].style.display = "none";

       }
       slideIndex++;
       if (slideIndex > slides.length)
       {slideIndex = 1}
       for (i = 0; i < dots.length; i++) {
           dots[i].className = dots[i].className.replace(" active", "");
       }
       slides[slideIndex-1].style.display = "block";
       dots[slideIndex-1].className += "active";
       setTimeout(showSlides, 2000); //Change image every 2 seconds
  }    

  <script>
    function openMenu(evt, types) {
      var i, choices, category;
      choices = document.getElementsByClassName("choices");
      for (i = 0; i < choices.length; i++) {
        choices[i].style.display = "none";
    }

    category = document.getElementsByClassName("category"); 
    for (i = 0; i < category.length; i++) {
      category[i].className = category[i].className.replace("active", "");
    } 

    document.getElementById 
    }




  </script>