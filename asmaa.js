let content = document.querySelector(".content");
let v = document.querySelector(".top");
let mnuebag = document.querySelector(".mnue-bag");
if (window.localStorage.getItem("contentmnue")) {
    mnuebag.innerHTML = window.localStorage.getItem("contentmnue");
}
let bag = document.querySelector(".bag");
let add = document.querySelectorAll(".buy")
let numcards = document.querySelector(".num-cards");
let total = document.querySelector(".total")
if (window.localStorage.getItem("num")) {
    numcards.innerHTML = window.localStorage.getItem("num");
}
bag.onclick = () => {
    mnuebag.classList.toggle("mnue-bag-open");
}
add.forEach((e) => {
    e.onclick = () => {
        let cardbag = document.createElement("div")
        let cardimg = document.createElement("img")
        let divinf = document.createElement("div");
        let h3 = document.createElement('h3');
        let coun = document.createElement("div");
        let buttonplus = document.createElement("button");
        let buttonmigns = document.createElement("button");
        let numcoun = document.createElement("p");
        let price = document.createElement("p");
        let clos = document.createElement("p");
        cardbag.className = "card-bag";
        divinf.className = "inf";
        coun.className = "coun";
        buttonplus.className = "plus";
        buttonmigns.className = "migns";
        numcoun.className = "num-coun";
        clos.className = "clos";
        price.className = "price"
        cardimg.src = e.parentElement.parentElement.firstElementChild.src;
        h3.innerHTML = e.parentElement.firstElementChild.innerHTML;
        buttonplus.innerHTML = "+";
        numcoun.innerHTML = "1";
        buttonmigns.innerHTML = "-";
        price.innerHTML = e.previousElementSibling.innerHTML;
        clos.innerHTML = "x";
        mnuebag.appendChild(cardbag);
        cardbag.appendChild(cardimg);
        cardbag.appendChild(divinf);
        divinf.appendChild(h3);
        divinf.appendChild(coun);
        coun.appendChild(buttonplus);
        coun.appendChild(numcoun);
        coun.appendChild(buttonmigns);
        divinf.appendChild(price);
        cardbag.appendChild(clos);
        total.innerHTML = parseInt(total.innerHTML) + parseInt(price.innerHTML);
        let plus = document.querySelectorAll(".plus");
let migns = document.querySelectorAll(".migns");
let delatecard = document.querySelectorAll(".clos");
delatecard.forEach((e) => {
    e.onclick = () => {
        total.innerHTML = parseInt(total.innerHTML) - parseInt(e.previousElementSibling.lastElementChild.innerHTML);
        e.parentElement.remove();
        window.localStorage.setItem("contentmnue", mnuebag.innerHTML)
        numcards.innerHTML = +numcards.innerHTML - 1;
window.localStorage.setItem("num", numcards.innerHTML)
    }
})
plus.forEach((e) => {
    e.onclick = (x) => {
    element = x.target.nextElementSibling
    element.innerHTML = +element.innerHTML + 1
    
    pric = e.parentElement.nextElementSibling;
    pric.innerHTML = parseInt(pric.innerHTML) + parseInt(pric.innerHTML) + "$";
    
    window.localStorage.setItem("contentmnue", mnuebag.innerHTML)
    }
})
migns.forEach((e) => {
    e.onclick = (x) => {
    element = x.target.previousElementSibling
    if (element.innerHTML != "1") {
        element.innerHTML = +element.innerHTML - 1
        
        pric = e.parentElement.nextElementSibling;
    pric.innerHTML = parseInt(pric.innerHTML) / 2 + "$";
    
    }
    window.localStorage.setItem("contentmnue", mnuebag.innerHTML)
    }
})
window.localStorage.setItem("contentmnue", mnuebag.innerHTML)
numcards.innerHTML = +numcards.innerHTML + 1;
window.localStorage.setItem("num", numcards.innerHTML)
    }
})
let plus = document.querySelectorAll(".plus");
let migns = document.querySelectorAll(".migns");
let delatecard = document.querySelectorAll(".clos");
delatecard.forEach((e) => {
    e.onclick = () => {
        total.innerHTML = parseInt(total.innerHTML) - parseInt(e.previousElementSibling.lastElementChild.innerHTML);
        e.parentElement.remove();
        window.localStorage.setItem("contentmnue"            , mnuebag.innerHTML)
        numcards.innerHTML = +numcards.innerHTML - 1;
window.localStorage.setItem("num", numcards.innerHTML)
    }
})
plus.forEach((e) => {
    e.onclick = (x) => {
    element = x.target.nextElementSibling
    element.innerHTML = +element.innerHTML + 1
    
    pric = e.parentElement.nextElementSibling;
    pric.innerHTML = parseInt(pric.innerHTML) + parseInt(pric.innerHTML) + "$";
    
    window.localStorage.setItem("contentmnue", mnuebag.innerHTML)
    }
})
migns.forEach((e) => {
    e.onclick = (x) => {
    element = x.target.previousElementSibling
    if (element.innerHTML != "1") {
        element.innerHTML = +element.innerHTML - 1
        pric = e.parentElement.nextElementSibling;
    pric.innerHTML = parseInt(pric.innerHTML) / 2 + "$";
    }
    window.localStorage.setItem("contentmnue", mnuebag.innerHTML)
    }
})
content.onscroll = () => {
    if (content.scrollTop >= "261.0909118652344") {
        v.style.display = "block";
    } else {
        v.style.display = "none";
    }
}