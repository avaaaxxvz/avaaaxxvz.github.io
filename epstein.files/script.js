document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".jeffery");
    const buttons = document.querySelectorAll(".ep");

    function showPage(pageId) {
        pages.forEach(page => {
            page.style.display = "none";
        });

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.style.display = "block";
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            const target = button.dataset.target;
            if (target) {
                e.preventDefault();
                showPage(target);
            }
        });
    });

    // tampilkan halaman pertama
    showPage("page1");
});
