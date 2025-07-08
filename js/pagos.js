document.querySelector('.fecha-input').addEventListener('input', function(e) {
        // Eliminar cualquier caracter que no sea número
        let value = e.target.value.replace(/[^0-9]/g, '');
        
        // Formatear como DD/MM/AAAA
        if (value.length > 2 && value.length <= 4) {
            value = value.substring(0, 2) + '/' + value.substring(2);
        } else if (value.length > 4) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4) + '/' + value.substring(4, 8);
        }
        
        // Limitar a 10 caracteres (DD/MM/AAAA)
        e.target.value = value.substring(0, 10);
});
