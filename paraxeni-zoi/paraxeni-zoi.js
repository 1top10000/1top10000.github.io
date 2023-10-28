window.addEventListener('resize', function () {
    const x = window.innerWidth;
    const y = window.innerHeight;
    if (x < 700) {
        document.querySelector(".hf92").style.display = "none";
        document.querySelector(".hf93").style.display = "none";
        document.querySelector(".hf94").style.display = "none";
        document.querySelector(".hf95").style.display = "none";
    } else {
        document.querySelector(".hf92").style.display = "";
        document.querySelector(".hf93").style.display = "";
        document.querySelector(".hf94").style.display = "";
        document.querySelector(".hf95").style.display = "";
    }
});