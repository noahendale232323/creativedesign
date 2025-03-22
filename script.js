document.addEventListener('DOMContentLoaded', function() {
    
    const initNavbar = () => {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            navbar.style.background = window.scrollY > 100 
                ? 'linear-gradient(135deg, #2c3e50, #2c3e50)' 
                : 'linear-gradient(135deg, #2c3e50, #3498db)';
        });
    };

    
    const initCreatorPage = () => {
        const telegramBtn = document.querySelector('.telegram-btn');
        if(telegramBtn) {
            telegramBtn.addEventListener('click', () => {
    
                const count = 200;
                const defaults = {
                    origin: { y: 0.7 }
                };

                function fire(particleRatio, opts) {
                    confetti(Object.assign({}, defaults, opts, {
                        particleCount: Math.floor(count * particleRatio)
                    }));
                }

                fire(0.25, { spread: 26, startVelocity: 55 });
                fire(0.2, { spread: 60 });
                fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
                fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
                fire(0.1, { spread: 120, startVelocity: 45 });

                
                window.open('https://t.me/yourtelegram', '_blank');
            });
        }
    };

    initNavbar();
    initCreatorPage();
});