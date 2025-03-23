window.addEventListener("load", function () {
    const loader = document.getElementById("loading-screen");
    const content = document.getElementById("content");

    setTimeout(() => {
        loader.style.display = "none"; 
        content.style.filter = "none"; 
    }, 1000); 
});
