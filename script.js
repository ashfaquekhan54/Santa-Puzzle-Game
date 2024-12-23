// Shuffle the blocks when the page loads
const blocks = document.querySelectorAll('.piece');
const shuffledIndexes = [...Array(9).keys()]; // Create an array of 9 blocks for shuffle

// Shuffle the blocks
shuffledIndexes.sort(() => Math.random() - 0.5);

blocks.forEach((block, i) => {
    // Assign shuffled background positions to the blocks
    const row = Math.floor(shuffledIndexes[i] / 3);
    const col = shuffledIndexes[i] % 3;
    block.style.backgroundPosition = `${-col * 130}px ${-row * 130}px`;
    block.dataset.index = shuffledIndexes[i];
});

// Drag-and-drop logic
let draggedBlock = null;

blocks.forEach(block => {
    block.setAttribute('draggable', true);

    block.addEventListener('dragstart', (e) => {
        draggedBlock = block;
        setTimeout(() => {
            block.classList.add('dragging'); // Add dragging class for visual effect
        }, 0);
    });

    block.addEventListener('dragend', () => {
        draggedBlock = null;
        block.classList.remove('dragging'); // Remove dragging class when done
    });

    block.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow the drop
    });

    block.addEventListener('dragenter', (e) => {
        e.preventDefault(); // Prevent default behavior to allow dropping
        if (draggedBlock !== block) {
            // Swap blocks visually
            const draggedIndex = draggedBlock.dataset.index;
            draggedBlock.dataset.index = block.dataset.index;
            block.dataset.index = draggedIndex;

            // Swap the background positions
            const tempBackground = draggedBlock.style.backgroundPosition;
            draggedBlock.style.backgroundPosition = block.style.backgroundPosition;
            block.style.backgroundPosition = tempBackground;

            // Check if the puzzle is solved after the swap
            checkWin();
        }
    });
});

function checkWin() {
    const isSolved = [...blocks].every((block, i) => block.dataset.index == i);
    if (isSolved) {
        // Show win popup
        document.getElementById("win-popup").style.display = "block";
    }
}

function redirectToAdsterra() {
    window.location.href = 'https://engagedpungentrepress.com/f9pw15zp0?key=f9998871955ab6164275c308b108631d'; // Redirect to Adsterra link
}
