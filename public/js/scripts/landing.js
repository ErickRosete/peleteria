$('#carousel').on('slid.bs.carousel', function () {
    // do something…
    console.log("changed")
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
        console.log(width)
        // if(width<768){
        updateSlide()
        // }
})
// https://stackoverflow.com/questions/16974664/remove-extra-spaces-in-string-javascript
// https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
// https://stackoverflow.com/questions/12991351/css-force-image-resize-and-keep-aspect-ratio
  function updateSlide(){
    let textContainers=document.querySelectorAll("div.active")[0].children[2].children
    let h1=textContainers[0].textContent
    let h2=textContainers[1].textContent
    let h3=textContainers[2].textContent
    console.log(h1)
    h1 = h1.replace(/\s+/g,' ').trim();
    h2 = h2.replace(/\s+/g,' ').trim();
    h3 = h3.replace(/\s+/g,' ').trim();

    console.log(h2)
    console.log(h3)
    let mobile=document.querySelector("#mobile-description")
    mobile.innerHTML="";
    console.log(mobile)
    let p1=document.createElement("p")
    p1.innerText=h1
    p1.className="desc-1"
    let p2=document.createElement("p")
    p2.innerText=h2
    p2.className="desc-2"
    let p3=document.createElement("p")
    p3.innerText=h3
    p3.className="desc-3"
    mobile.appendChild(p1)
    mobile.appendChild(p2)
    mobile.appendChild(p3)
  }

    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    console.log(width)
    // if(width<768){
        updateSlide()
    // }
