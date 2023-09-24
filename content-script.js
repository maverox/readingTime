let newCursor = document.createElement('div');
newCursor.className = 'new-cursor';
// newCursor.innerHTML = `
//   <svg width="24" height="24" viewBox="0 0 24 24">
//     <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5z"/>
//     <path d="M12 4.5c-4.135 0-7.5 3.365-7.5 7.5S7.865 19.5 12 19.5 19.5 16.135 19.5 12 16.135 4.5 12 4.5zm0 13.5c-3.59 0-6.5-2.91-6.5-6.5S8.41 5 12 5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"/>
//     <path d="M12 9c-.552 0-1 .448-1 1v3c0 .552.448 1 1 1s1-.448 1-1v-3c0-.552-.448-1-1-1z"/>
//   </svg>
// `;
document.body.appendChild(newCursor);


// Adding the animations when the
// mouse button is clicked

window.addEventListener("mousedown", (event) => {
	if (!newCursor.classList.contains("click")) {
		newCursor.classList.add("click");
        
		setTimeout(() => {
			newCursor.classList.remove("click");
		}, 800);
	}
});

// Getting the position of the newCursor
window.addEventListener("mousemove", (event) => {
    
	let x = event.pageX - newCursor.offsetWidth / 2,
		y = event.pageY - newCursor.offsetHeight / 2;
	newCursor.style.left = `${x}px`;
	newCursor.style.top = `${y}px`;
});
