 document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
  
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });


  const carregarBarraNavegacao = (id) => {
    const navbar = document.getElementById(id)
    
    navbar.innerHTML = `
          <ul class="navbar">
              <li class="nav-item"><a class="nav-link text-uppercase" href="#sobre">sobre mim</a></li>
              <li class="nav-item"><a href="#contato" class="nav-link text-uppercase">contato</a></li>
          </ul> 
    
    `
  }
