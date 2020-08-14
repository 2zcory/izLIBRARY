/* IN USE
    * Tạo animate khi kết hợp với scss bằng cách thêm một class vào .burger-icon
    * SYNTAX: burgerClickAnimation(burger, classMarker);
    * SHORTHAND: burgerClickAnimation(); tự động áp dụng cho icon có class .burger-icon

*/

function burgerClickAnimation(className, classMarker) {
    const icon = className ? className : document.querySelector(".burger-icon");
    if (!icon) return;
    const marker = classMarker && typeof classMarker === "string" ? classMarker : "open";
    const btnParent = icon.parentNode;
    btnParent.addEventListener("click", () => {
        icon.classList.toggle(marker);
    })
}

export default burgerClickAnimation;