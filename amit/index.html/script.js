// JavaScript to handle any interactive features if needed
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll('.project-link a');
    
    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.style.color = '#FF6347'; // Change color on hover
        });
        
        project.addEventListener('mouseout', () => {
            project.style.color = '#4CAF50'; // Reset color
        });
    });
});

