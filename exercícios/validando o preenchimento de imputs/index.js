const inputText = document.querySelectorAll(".input-text");

inputText.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add("filledInField")
        } else {
            input.classList.remove("filledInField")
        }
    });
});