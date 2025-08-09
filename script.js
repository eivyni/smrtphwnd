// script.js - Site Pessoal Retrô

// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    initializeVisitorCounter();
    initializeSparkles();
    initializeStats();
    initializeFormValidation();
});

// Sistema de contador de visitantes
function initializeVisitorCounter() {
    let count = localStorage.getItem('visitorCount') || 1337;
    count = parseInt(count);
    
    // Incrementa a cada visita
    count++;
    localStorage.setItem('visitorCount', count);
    
    const counterElement = document.getElementById('visitorCount');
    if (counterElement) {
        counterElement.textContent = count.toString().padStart(6, '0');
    }
    
    // Anima o contador periodicamente
    setInterval(() => {
        count++;
        localStorage.setItem('visitorCount', count);
        if (counterElement) {
            counterElement.textContent = count.toString().padStart(6, '0');
        }
    }, 30000); // A cada 30 segundos
}

// Sistema de sparkles animados
function initializeSparkles() {
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.className = 'sparkle';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.zIndex = '1000';
        sparkle.style.pointerEvents = 'none';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.remove();
            }
        }, 3000);
    }

    // Criar sparkles periodicamente
    setInterval(createSparkle, 3000);
    
    // Sparkles extras quando clica em qualquer lugar
    document.addEventListener('click', function(e) {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '⭐';
                sparkle.className = 'sparkle';
                sparkle.style.position = 'fixed';
                sparkle.style.left = (e.clientX + (Math.random() - 0.5) * 100) + 'px';
                sparkle.style.top = (e.clientY + (Math.random() - 0.5) * 100) + 'px';
                sparkle.style.zIndex = '1000';
                sparkle.style.pointerEvents = 'none';
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.remove();
                    }
                }, 2000);
            }, i * 100);
        }
    });
}

// Atualizar estatísticas do site
function initializeStats() {
    // Atualizar data da última atualização
    const lastUpdateElement = document.getElementById('lastUpdate');
    if (lastUpdateElement) {
        const today = new Date();
        lastUpdateElement.textContent = today.toLocaleDateString('pt-BR');
    }
    
    // Simular crescimento das visitas
    const totalVisitsElement = document.getElementById('totalVisits');
    if (totalVisitsElement) {
        let visits = parseInt(localStorage.getItem('totalVisits')) || 2547;
        visits += Math.floor(Math.random() * 10) + 1;
        localStorage.setItem('totalVisits', visits);
        totalVisitsElement.textContent = visits.toLocaleString('pt-BR');
    }
    
    // Contar comentários existentes
    const totalCommentsElement = document.getElementById('totalComments');
    const existingComments = document.querySelectorAll('.comment');
    if (totalCommentsElement && existingComments) {
        totalCommentsElement.textContent = existingComments.length;
    }
}

// Validação e efeitos do formulário
function initializeFormValidation() {
    const form = document.querySelector('form[name="guestbook"]');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        const nome = form.querySelector('input[name="nome"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const comentario = form.querySelector('textarea[name="comentario"]').value.trim();
        
        // Validações básicas
        if (nome.length < 2) {
            alert('⚠️ Por favor, digite um nome válido!');
            e.preventDefault();
            return;
        }
        
        if (comentario.length < 5) {
            alert('⚠️ Por favor, escreva um comentário mais detalhado!');
            e.preventDefault();
            return;
        }
        
        // Filtro básico de spam
        const spamWords = ['spam', 'viagra', 'casino', 'lottery'];
        const comentarioLower = comentario.toLowerCase();
        if (spamWords.some(word => comentarioLower.includes(word))) {
            alert('🚫 Comentário detectado como spam!');
            e.preventDefault();
            return;
        }
        
        // Efeito visual de sucesso
        const button = form.querySelector('button');
        button.textContent = '📤 Enviando...';
        button.disabled = true;
        
        // Sparkles de celebração
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createCelebrationSparkle(), i * 100);
        }
        
        // Som de envio (se o navegador suportar)
        try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTiSwCTWev1e+vRx4SJTDL1fhTdtlLV6ft6ixdJDWw8nC9mWIpnLrw0JlWMQs6ItLmw+OdqgOx3n5HNwY2a8vW2TqyNFRsm6zRIgMvRCNS7CxUHtdWQpjdcJxbWXQpfZ6X41lUHfSqM0t');
            audio.play().catch(() => {}); // Ignora erro se não conseguir tocar
        } catch(e) {}
        
        // Permite o envio do formulário
        setTimeout(() => {
            if (button) {
                button.textContent = '✅ Enviado!';
            }
        }, 1000);
    });
}

// Sparkles de celebração
function createCelebrationSparkle() {
    const sparkles = ['🎉', '🎊', '⭐', '✨', '🌟'];
    const sparkle = document.createElement('div');
    sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.className = 'sparkle';
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.zIndex = '1000';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = '24px';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.remove();
        }
    }, 3000);
}

// Easter eggs e funcionalidades extras
document.addEventListener('keydown', function(e) {
    // Konami Code: ↑↑↓↓←→←→BA
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    window.konamiProgress = window.konamiProgress || 0;
    
    if (e.keyCode === konamiCode[window.konamiProgress]) {
        window.konamiProgress++;
        if (window.konamiProgress === konamiCode.length) {
            alert('🎮 KONAMI CODE ATIVADO! Easter egg desbloqueado! 🎮');
            document.body.style.animation = 'rainbow 1s ease infinite';
            window.konamiProgress = 0;
            
            // Chuva de sparkles
            for (let i = 0; i < 50; i++) {
                setTimeout(() => createCelebrationSparkle(), i * 100);
            }
        }
    } else {
        window.konamiProgress = 0;
    }
});

// Funcionalidade de tempo online
function updateOnlineTime() {
    const startDate = new Date('2025-01-01');
    const now = new Date();
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const onlineElement = document.querySelector('.section:last-of-type p:nth-of-type(3)');
    if (onlineElement) {
        onlineElement.innerHTML = `🕒 Online há: ${diffDays} dias`;
    }
}

// Atualizar tempo online na inicialização
updateOnlineTime();
