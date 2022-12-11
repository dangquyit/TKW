function clickMenu() {
    let menuElm = document.querySelector("#menu");
    if(menuElm.classList.contains("show")) {
      menuElm.classList.remove("show");
      menuElm.classList.add("hide");
    } else {
      menuElm.classList.remove("hide");
      menuElm.classList.add("show");
    }
  }