function switchPanel(){
    let panelArea = event.target.closest('.area-panel');
    let index = Array.prototype.indexOf.call(event.target.parentNode.querySelectorAll("li"), event.target);
  
    let panel = panelArea.querySelector('.box-panel').children[index];
    for(let i = 0; i < panel.parentNode.children.length; i++){
      if(panel.parentNode.children[i].classList.contains('is-active')){
        panel.parentNode.children[i].classList.remove('is-active');
      }
    }
    panel.classList.add('is-active');
  }
  
  for(let tab of document.getElementsByClassName('tab')){
    tab.addEventListener('click',switchPanel)
  }