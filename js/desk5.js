// Initialize map
const map = L.map('map').setView([-11.9404, -77.0428], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add some sample markers
const dangerMarker = L.circle([-11.9404, -77.0428], {
    color: '#ff4444',
    fillColor: '#ff4444',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

const cautionMarker = L.circle([-11.9304, -77.0528], {
    color: '#ffaa00',
    fillColor: '#ffaa00',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);

const safeMarker = L.circle([-11.9504, -77.0328], {
    color: '#00ff88',
    fillColor: '#00ff88',
    fillOpacity: 0.5,
    radius: 400
}).addTo(map);

// Add popups
dangerMarker.bindPopup("Zona de Peligro - Evitar área");
cautionMarker.bindPopup("Zona de Precaución - Mantenerse alerta");
safeMarker.bindPopup("Zona Segura - Área vigilada");

// Sidebar functionality mejorada
const toggleMenu = () => {
    const menuBtn = document.querySelector('.header__menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('mainContent');

    // Función para alternar el menú
    const handleToggleMenu = () => {
        console.log('Menú clickeado');
        
        const isActive = sidebar.classList.contains('active');
        
        if (isActive) {
            // Cerrar menú
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            mainContent.classList.remove('shifted');
            menuBtn.classList.remove('active');
            menuBtn.innerHTML = '&#9776;'; // Volver a las 3 líneas
        } else {
            // Abrir menú
            sidebar.classList.add('active');
            overlay.classList.add('active');
            mainContent.classList.add('shifted');
            menuBtn.classList.add('active');
            menuBtn.innerHTML = '&#10005;'; // Cambiar a X
        }
    };

    // Event listeners
    menuBtn.addEventListener('click', handleToggleMenu);
    overlay.addEventListener('click', handleToggleMenu);

    // Cerrar menú al hacer clic en un enlace (opcional)
    document.querySelectorAll('.sidebar__item').forEach(item => {
        item.addEventListener('click', () => {
            console.log('Navegando a:', item.querySelector('.sidebar__text').textContent);
            // handleToggleMenu(); // Descomenta si quieres cerrar el menú al hacer clic
        });
    });

    // Cerrar menú con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            handleToggleMenu();
        }
    });
};

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
});

// Refresh button functionality
document.querySelector('.refresh-btn').addEventListener('click', function() {
    this.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        this.style.transform = 'rotate(0deg)';
    }, 1000);
});

// Navigation buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.match(/^\d+$/)) {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Add some interactive effects
document.querySelectorAll('.report-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#00ff88';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'rgba(0, 255, 136, 0.3)';
    });
});

// Security badge click
document.querySelector('.security-badge').addEventListener('click', function() {
    alert('Sistema de Seguridad Activo - AyniGuard monitoreando 24/7');
});