(function() {

    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function yashwantFunction(){
        for(var x=0;x<items.length;x++){
            if(isElementInViewport(items[x])){
                items[x].classList.add("in-view")
            }
        }
    }
    
    window.addEventListener("scroll",yashwantFunction)
    
  
  
  })();