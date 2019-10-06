


document.addEventListener('DOMContentLoaded', () => {
    const padlock = document.querySelector('#padlock');
    const text = document.querySelector('#text');
    padlock.addEventListener('mouseenter', () => {
        console.log('works');
        text.classList.remove('hidden');
    });
    
    padlock.addEventListener('mouseleave', () => {
        console.log('leave');
        text.classList.add('hidden');
    });
});
