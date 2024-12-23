// Shuffle the blocks when the page loads
const blocks = document.querySelectorAll('.piece');
const shuffledIndexes = [...Array(9).keys()];

// Shuffle the blocks
shuffledIndexes.sort(() => Math.random() - 0.5);

blocks.forEach((block, i) => {
    const row = Math.floor(shuffledIndexes[i] / 3);
    const col = shuffledIndexes[i] % 3;
    block.style.backgroundPosition = `${-col * 130}px ${-row * 130}px`;
    block.dataset.index = shuffledIndexes[i];
});

let draggedBlock = null;

blocks.forEach(block => {
    block.setAttribute('draggable', true);

    block.addEventListener('dragstart', (e) => {
        draggedBlock = block;
        setTimeout(() => block.classList.add('dragging'), 0);
    });

    block.addEventListener('dragend', () => {
        draggedBlock = null;
        block.classList.remove('dragging');
    });

    block.addEventListener('dragover', (e) => e.preventDefault());
    block.addEventListener('dragenter', (e) => {
        e.preventDefault();
        if (draggedBlock !== block) {
            const draggedIndex = draggedBlock.dataset.index;
            draggedBlock.dataset.index = block.dataset.index;
            block.dataset.index = draggedIndex;

            const tempBackground = draggedBlock.style.backgroundPosition;
            draggedBlock.style.backgroundPosition = block.style.backgroundPosition;
            block.style.backgroundPosition = tempBackground;

            checkWin();
        }
    });
});

function checkWin() {
    const isSolved = [...blocks].every((block, i) => block.dataset.index == i);
    if (isSolved) {
        document.getElementById("win-popup").style.display = "block";
    }
}

function redirectToAdsterra() {
    window.location.href = 'https://engagedpungentrepress.com/f9pw15zp0?key=f9998871955ab6164275c308b108631d';
}
