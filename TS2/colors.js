let currentBox = null;

const characters = {
    'Monday': { color: 'red', image: 'anger.png' }, 
    'Tuesday': { color: 'orange', image: 'anxiety.png' },
    'Wednesday': { color: 'yellow', image: 'joy.png' },
    'Thursday': { color: 'green', image: 'disgust.png' },
    'Friday': { color: 'blue', image: 'sadness.png' },
    'Saturday': { color: 'indigo', image: 'ennui.png' },
    'Sunday': { color: 'violet', image: 'fear.png' }
};

document.querySelectorAll('.days').forEach(button => {
    const day = button.getAttribute('box-day');
    button.style.backgroundColor = characters[day].color;
    
    button.addEventListener('click', () => {
        const { color, image } = characters[day] || { color: '#ffffff', image: 'default.png' };

        if (currentBox) {
            currentBox.style.top = '-200px';
            currentBox.style.opacity = '0';
        }

        const newBox = document.createElement('div');
        newBox.className = 'box';
        newBox.style.backgroundColor = color;
        newBox.innerHTML = `
            <img src="${image}" alt="${day}" style="width: 200px; height: auto;">
        `;

        Object.assign(newBox.style, {
            position: 'absolute',
            width: '400px',
            height: '400px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            top: '-200px',
            opacity: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            color: 'white'
        });

        document.body.appendChild(newBox);

        requestAnimationFrame(() => {
            newBox.style.top = '56%';
            newBox.style.opacity = '1';
        });

        currentBox = newBox;
    });
});
