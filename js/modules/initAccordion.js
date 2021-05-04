export default function initAccordion() {
  
}

const itemFaq = document.querySelectorAll('dt')
const activeClass = 'ativo'

// Adiciona a classe aos primeiro itens da lista
itemFaq[0].classList.add(activeClass);
itemFaq[0].nextElementSibling.classList.add(activeClass);

function activeAccordion() {
  //Remove a classe de cada item para evitar abrir todas as 
  itemFaq.forEach((removeClass)=>{
    removeClass.classList.remove(activeClass)
    removeClass.nextElementSibling.classList.remove(activeClass)
  })

  // Adiciona a classe no item e proximo item clicado
  this.classList.add(activeClass)
  this.nextElementSibling.classList.add(activeClass)
  console.log(this)
}

// Evento de Click
itemFaq.forEach((item) =>{
  item.addEventListener('click', activeAccordion)
})