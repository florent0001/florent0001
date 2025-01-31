window.addEventListener("scroll", function() {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;
    
    // Invert the scroll direction by using a negative multiplier
    document.getElementById('backgroundl').style.transform = `translateY(${scrollPosition * -0.1}px)`; // Adjust multiplier for effect strength
    document.getElementById('backgroundr').style.transform = `translateY(${scrollPosition * -0.1}px)`; // Adjust multiplier for effect strength
});

function adjustOpacityBasedOnScreenSize() {
    const screenWidth = window.innerWidth;
    let opacity = 1; // Default opacity


    
    opacity = Math.max(0,Math.min(1,(screenWidth-900)/980)); 
    opacity=opacity*opacity;
    opacity=opacity*opacity;

    document.getElementById('backgroundl').style.opacity = opacity;
    document.getElementById('backgroundr').style.opacity = opacity;
}



function updateBackgroundHeight() {
    // Set the height of the background container to match the document's height
    const docHeight = document.documentElement.scrollHeight;
    document.getElementById('backgroundl').style.width = `${docWidth}px`;
    document.getElementById('backgroundr').style.width = `${docWidth}px`;
}

// Update the background height on page load and window resize
window.addEventListener('load', updateBackgroundHeight,adjustOpacityBasedOnScreenSize);
window.addEventListener('resize', updateBackgroundHeight);
window.addEventListener('resize', adjustOpacityBasedOnScreenSize);


