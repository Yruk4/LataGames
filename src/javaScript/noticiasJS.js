document.addEventListener('DOMContentLoaded', function() {
    const balloons = document.querySelectorAll('.news-balloon');

    balloons.forEach(balloon => {
        const header = balloon.querySelector('.balloon-header');
        const content = balloon.querySelector('.balloon-content');

        header.addEventListener('click', () => {
            const isExpanded = content.style.display === 'block';
            
            content.style.display = isExpanded ? 'none' : 'block';
            balloon.style.height = isExpanded ? '60px' : 'auto';
        });
    });
});