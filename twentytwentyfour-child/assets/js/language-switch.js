document.addEventListener('DOMContentLoaded', function() {
    // Detecta el idioma del navegador, ej. "en-US", "es-ES", etc.
    const userLang = (navigator.language || navigator.userLanguage).substr(0, 2);
  
    // Selecciona el link del botón en la navbar
    const navButton = document.querySelector('.btn-navar a');
    // Selecciona los h3 del footer
    const footerHeaders = document.querySelectorAll('#footer h3');
  
    // Según el idioma, cambia los textos
    switch (userLang) {
      case 'es':
        if (navButton) navButton.textContent = 'REGRESAR A LA BIBLIOTECA';
        // Asumiendo que el primer h3 es "CONTACT US" y el segundo es "Oficinas"
        if (footerHeaders[0]) footerHeaders[0].textContent = 'CONTÁCTANOS';
        if (footerHeaders[1]) footerHeaders[1].textContent = 'OFICINAS';
        break;
  
      case 'fr':
        if (navButton) navButton.textContent = 'RETOUR À LA BIBLIOTHÈQUE';
        if (footerHeaders[0]) footerHeaders[0].textContent = 'CONTACTEZ-NOUS';
        if (footerHeaders[1]) footerHeaders[1].textContent = 'BUREAUX';
        break;
  
      case 'de':
        if (navButton) navButton.textContent = 'ZURÜCK ZUR BIBLIOTHEK';
        if (footerHeaders[0]) footerHeaders[0].textContent = 'KONTAKTIERE UNS';
        if (footerHeaders[1]) footerHeaders[1].textContent = 'BÜROS';
        break;
  
      // Puedes añadir más idiomas según sea necesario
  
      default:
        // En inglés por defecto
        if (navButton) navButton.textContent = 'RETURN TO LIBRARY';
        if (footerHeaders[0]) footerHeaders[0].textContent = 'CONTACT US';
        if (footerHeaders[1]) footerHeaders[1].textContent = 'OFFICES';
        break;
    }
  });
  