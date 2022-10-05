const imgRight = document.getElementsByClassName("imgDesktopRight");
const buttonCenter = document.getElementById("buttonTopCenter");
const buttonRight = document.getElementById("buttonTopRight");

const imgCenter = document.querySelector(".imgDesktop");

const focusButtons = document.querySelectorAll(".focus-button");
focusButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const imgFocus = document.querySelector(`.${button.dataset.focus}`);

        [imgFocus.src, imgCenter.src] = [imgCenter.src, imgFocus.src];
    })
})
