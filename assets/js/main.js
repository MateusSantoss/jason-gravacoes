 
 //sistema de navegação
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


 

  //carrega a lista com as produções após o usário clicar em listar produções
  const CarregarProducoes =  () => {
    
    document.getElementById('producoes-button').remove()
    document.getElementById('lista-producoes').innerHTML = `
    <div class="row producoes-list">
    <div class="col-md-4 col-12 m-2  m-md-0">
       <iframe  class="iframe"
          src="https://www.youtube.com/embed/93Mhet5wAWg?si=2vJLmU2H7xYFgV-n" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
       </iframe>
    </div>

    <div class="col-md-4 col-12 m-2 m-md-0">
       <iframe 
         class="iframe"
          src="https://www.youtube.com/embed/vWmzjHlb5_g?si=yjONBM5pB7tuPPSY" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
      </iframe>
    </div>

    <div class="col-md-4 col-12 m-2  m-md-0">
       <iframe 
          src="https://www.youtube.com/embed/w4vGmc4v0dI?si=uGelHy857FvlL4Tr" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
       </iframe>
       
    </div>

    <div class="col-md-4 col-12 m-2  m-md-0">
       <iframe 
          src="https://www.youtube.com/embed/-pHVpSgbCIM?si=xyATwfK-WdFVDCCZ" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
       </iframe>
    </div>

    <div class="col-md-4 col-12 m-2  m-md-0">
       <iframe  
           src="https://www.youtube.com/embed/L3Z_lsJ3I7k?si=GO_CCCOWGN3q77t7" 
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           allowfullscreen>
       </iframe>
    </div>

    <div class="col-md-4 col-12 m-2  m-md-0">
       <iframe 
          src="https://www.youtube.com/embed/mzyzLhkLFjQ?si=TOfccEVWKu7BH1_-" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
       </iframe>
    </div>
 </div>
    ` 
  }

  let nav = Array()
  const carregarBarraNavegacao = (id) => {
    
    
    const navbar = document.getElementById(id)
    
 
  
    //lista da barra de navegação é modficada dinamicamente após o usuário escolher uma "rota"
    switch (id) {
      case "producoes-nav":
        console.log(id)
        nav[0]  = ` <li class="nav-item"><a class="nav-link text-uppercase" href="#sobre" onclick="carregarBarraNavegacao('sobre-nav')">sobre mim</a></li>`
        nav[1] = `<li class="nav-item"><a href="#contato" class="nav-link text-uppercase" onclick="carregarBarraNavegacao('contato-nav')">contato</a></li>`
        break;
      case "sobre-nav":
        nav[0]  = `<li class="nav-item"><a href="#producoes" class="nav-link text-uppercase" onclick="carregarBarraNavegacao('producoes-nav')">produções</a></li>`
        nav[1] = `<li class="nav-item"><a href="#contato" class="nav-link text-uppercase" onclick="carregarBarraNavegacao('contato-nav')">contato</a></li>`
        break;
      case "contato-nav":
        nav[0] = `<li class="nav-item"><a href="#producoes" class="nav-link text-uppercase" onclick="carregarBarraNavegacao('producoes-nav')">produções</a></li>`
        nav[1] = `<li class="nav-item"><a class="nav-link text-uppercase" href="#sobre" onclick="carregarBarraNavegacao('sobre-nav')">sobre mim</a></li>`
    
      default:
        break;
    }

   

  
          navbar.innerHTML = `
          <ul class="navbar">
             ${nav[0]
            }
            <br>

            ${ nav[1]}
          </ul> 

        `

       
    
     
   
    
    
  }
