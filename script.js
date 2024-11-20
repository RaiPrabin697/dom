// Store DOM elements
const colorButton = document.getElementById('colorButton');
const addElementButton = document.getElementById('addElementButton');
const toggleButton = document.getElementById('toggleButton');
const animateButton = document.getElementById('animateButton');
const fetchButton = document.getElementById('fetchButton');

// Color change functionality
let colorIndex = 0;
const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead'];
colorButton.addEventListener('click', () => {
    const target = document.getElementById('colorTarget');
    colorIndex = (colorIndex + 1) % colors.length;
    target.style.backgroundColor = colors[colorIndex];
    target.style.color = colorIndex === 0 ? 'white' : 'black';
});

// Add element functionality
let elementCounter = 1;
addElementButton.addEventListener('click', () => {
    const container = document.getElementById('elementContainer');
    const newElement = document.createElement('div');
    newElement.textContent = `Dynamic Element ${elementCounter++}`;
    newElement.className = 'demo-element highlight';
    
    // Remove highlight after animation
    setTimeout(() => {
        newElement.classList.remove('highlight');
    }, 1000);
    
    container.appendChild(newElement);
});

// Toggle visibility functionality
toggleButton.addEventListener('click', () => {
    const target = document.getElementById('toggleTarget');
    target.classList.toggle('fade-out');
});

// Animation functionality
let isAnimated = false;
animateButton.addEventListener('click', () => {
    const target = document.getElementById('animationTarget');
    isAnimated = !isAnimated;
    target.classList.toggle('slide');
    animateButton.textContent = isAnimated ? 'Reset Animation' : 'Animate Element';
});

// Fetch data functionality
fetchButton.addEventListener('click', async () => {
    const container = document.getElementById('dataContainer');
    container.textContent = 'Loading...';
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        container.innerHTML = `
            <strong>Fetched Todo:</strong><br>
            Title: ${data.title}<br>
            Completed: ${data.completed ? '✅' : '❌'}
        `;
    } catch (error) {
        container.textContent = 'Error fetching data. Please try again.';
    }
});