window.addEventListener("scroll", function() {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;
    
    // Invert the scroll direction by using a negative multiplier
    document.getElementById('backgroundl').style.transform = `translateY(${scrollPosition * -0.1}px)`; // Adjust multiplier for effect strength
    document.getElementById('backgroundr').style.transform = `translateY(${scrollPosition * -0.1}px)`; // Adjust multiplier for effect strength
});



function updateBackgroundHeight() {
    // Set the height of the background container to match the document's height
    const docHeight = document.documentElement.scrollHeight;
    document.getElementById('backgroundl').style.height = `${docHeight}px`;
    document.getElementById('backgroundr').style.height = `${docHeight}px`;
}

// Update the background height on page load and window resize
window.addEventListener('load', updateBackgroundHeight);
window.addEventListener('resize', updateBackgroundHeight);
