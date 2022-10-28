function Function(index) {
    var x = document.querySelectorAll(".btn")[index];
    var y = document.querySelectorAll("button")[index];
    if (x.innerHTML === "Add to cart" || y.style.width==="60%") {
        x.innerHTML = "Select options";
        y.style.width="100%";
    } else {
        x.innerHTML = "Add to cart";
        y.style.width="60%";
    }

}


