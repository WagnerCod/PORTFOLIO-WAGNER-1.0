document.addEventListener('DOMContentLoaded', function() {
    var smoothScrollLinks = document.getElementsByClassName('smooth-scroll');
  
    for (var i = 0; i < smoothScrollLinks.length; i++) {
      smoothScrollLinks[i].addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
      
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });