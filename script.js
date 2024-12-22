// Shuffle the blocks when the page loads
const blocks = document.querySelectorAll('.piece');
const shuffledIndexes = [...Array(9).keys()].filter(i => i < 8); // 8 blocks only (excluding empty block)
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

    block.addEventListener('dragstart', () => {
        draggedBlock = block;
    });

    block.addEventListener('dragover', e => {
        e.preventDefault(); // Allow the drop
    });

    block.addEventListener('drop', () => {
        if (draggedBlock && draggedBlock !== block) {
            // Swap blocks visually
            const tempIndex = draggedBlock.dataset.index;
            draggedBlock.dataset.index = block.dataset.index;
            block.dataset.index = tempIndex;

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
    window.location.href = 'https://engagedpungentrepress.com/t4au2igb3?key=2b7eb6bd385bfde50c265687ca8f3fc5'; // Replace with your Adsterra link
}
