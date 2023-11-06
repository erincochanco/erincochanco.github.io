const sparkles = ["✨"]; // Use only one sparkle

document.addEventListener("mousemove", (event) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkles";
    sparkle.textContent = sparkles[0]; // Use the first (and only) sparkle in the array

    const spacing = 150; // Adjust the spacing between sparkles (in pixels)

    sparkle.style.left = `${event.pageX}px`;
    sparkle.style.top = `${event.pageY}px`;

    // Add some spacing between sparkles
    sparkle.style.transform = `translate(-${spacing / 2}px, -${spacing / -5}px)`;

    document.body.appendChild(sparkle);

    // Remove the sparkle after a while to avoid memory leaks
    setTimeout(() => {
        sparkle.remove();
    }, 200); // Adjust the duration for a slower trail (in milliseconds)
});

// Remove all sparkles when the page is unloaded or changed
window.addEventListener("beforeunload", () => {
    const sparkles = document.querySelectorAll(".sparkles");
    sparkles.forEach((sparkle) => {
        sparkle.remove();
    });
});
