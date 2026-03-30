function initScrollProgress() {
    const progressBar = document.getElementById("progress-bar");

    if (!progressBar) return;

    window.addEventListener("scroll", () => {
        // Current scroll position
        const scrollTop = window.scrollY;

        // Total scrollable height
        const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        // Calculate percentage
        const scrollPercent = (scrollTop / scrollHeight) * 100;

        // Update progress bar width
        progressBar.style.width = scrollPercent + "%";
    });
}