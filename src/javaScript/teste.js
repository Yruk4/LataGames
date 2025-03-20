document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".item").forEach(item => {
        item.addEventListener("click", function () {
            // Obtém o link dentro do item (caso tenha um <a>)
            const link = this.querySelector("a");
            if (link) {
                window.location.href = link.href;
            }
        });
    });
});