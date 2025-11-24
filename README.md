# Spinda Painter

[English](#english) | [Español](#español)

## English

A modern web tool for customizing and exploring the unique Spinda spot patterns in Pokémon Generation III.

### Live Demo

[Spinda Painter - Live Demo](https://jdamiancabello.github.io/SpindaPainter-3gen/)

![Spinda Painter Preview](/screenshot.png)

### Features

- **Dark/Light Theme**: Automatic theme detection based on system preferences with manual toggle
- **Interactive Spot Customization**: Drag and drop Spinda's spots in real-time
- **Live Preview**: See changes instantly with pixel-perfect rendering
- **Pokémon Information**: View nature, gender, and ability based on PID
- **Bilingual Support**: Full support for Spanish and English
- **Fullscreen Mode**: View your Spinda in fullscreen with grid overlay
- **Fully Responsive**: Perfect experience on desktop, tablet, and mobile devices
- **Precise Rendering**: Spots are clipped to Spinda's silhouette for accurate visualization
- **PID Management**: Generate random PIDs or input custom ones with clipboard support

### Design Highlights

- **Modern UI**: Professional design with glassmorphism effects and smooth animations
- **Adaptive Colors**: Theme-aware color scheme (orange in light mode, purple in dark mode)
- **Custom Components**: Built without Bootstrap for better performance and customization
- **Grid System**: Toggle grid overlay to precisely position spots
- **Pixel Art Rendering**: Sharp, crisp pixel art display without blur

### Project Origin

This project is a tribute to the original Spinda Painter from the third generation of Pokémon. The original tool, developed in Chinese, is no longer available, so this web version seeks to preserve and enhance its unique functionality with modern web technologies.

### Technologies Used

- HTML5
- CSS3 (Custom Variables, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Canvas API for rendering
- LocalStorage for theme persistence

### How to Use

1. Visit the [Live Demo](https://jdamiancabello.github.io/SpindaPainter-3gen/)

   OR

2. Clone the repository
```bash
git clone https://github.com/JDamianCabello/SpindaPainter-3gen.git
```

3. Open the `index.html` file in your browser

### Main Features

#### PID System
- **Custom PID Input**: Enter a specific PID (hexadecimal) to generate a unique Spinda
- **Random Generation**: Click the "Reroll Spinda" button to generate a random PID
- **Clipboard Support**: Copy PID to clipboard with one click

#### Spot Customization
- **Drag & Drop**: Click and drag any of the 4 spots to reposition them
- **Real-time Updates**: See changes immediately in both the main canvas and preview
- **Touch Support**: Full touch support for mobile devices
- **Grid Overlay**: Toggle grid to see exact pixel positions

#### Theme System
- **Auto Detection**: Automatically matches your system's dark/light preference
- **Manual Toggle**: Switch themes with the sun/moon button
- **Persistent**: Your theme preference is saved in browser storage
- **Adaptive Colors**: All UI elements adapt to the selected theme

#### Fullscreen Mode
- **Expanded View**: Click the fullscreen button to see your Spinda in a larger view
- **Always-On Grid**: Grid is permanently visible in fullscreen for precise positioning
- **Sharp Rendering**: Pixel-perfect display with no blur or smoothing
- **ESC to Exit**: Press ESC or click outside to close fullscreen mode

### Language Change

Switch between Spanish and English by clicking on the flags in the top right corner of the interface.

### Contributors

- **ShinMugenNoKabe** - [GitHub Profile](https://github.com/ShinMugenNoKabe)
  - Allow users to manually input text in the PID input
  - Fixed the Spinda summary showing the wrong abilities
  - Fixed the nature of the Spinda not being calculated correctly
  - Added functionality to generate a new PID on page reload, and added a new button to reroll the PID and copy it to the OS clipboard

### Contributions

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

Distributed under the MIT License. See `LICENSE` for more information.

### Credits

- **Creator**: JDamianCabello
- **Inspiration**: Original Spinda Painter from the third generation of Pokémon
- **Background**: Pokémon Gen 3 pixel art

### Issues

If you find any bugs or have suggestions, please open an [issue](https://github.com/JDamianCabello/SpindaPainter-3gen/issues).

### Contact

JDamianCabello - [GitHub Profile](https://github.com/JDamianCabello)

---

## Español

Una herramienta web moderna para personalizar y explorar los únicos patrones de manchas de Spinda en Pokémon Generación III.

### Demo en Vivo

[Spinda Painter - Demo en Vivo](https://jdamiancabello.github.io/SpindaPainter-3gen/)

![Spinda Painter Preview](/screenshot.png)

### Características

- **Tema Claro/Oscuro**: Detección automática del tema según las preferencias del sistema con alternador manual
- **Personalización Interactiva de Manchas**: Arrastra y suelta las manchas de Spinda en tiempo real
- **Vista Previa en Vivo**: Ve los cambios instantáneamente con renderizado pixel-perfect
- **Información del Pokémon**: Visualiza naturaleza, género y habilidad basados en el PID
- **Soporte Bilingüe**: Soporte completo para español e inglés
- **Modo Pantalla Completa**: Visualiza tu Spinda en pantalla completa con rejilla superpuesta
- **Totalmente Responsive**: Experiencia perfecta en escritorio, tablet y móviles
- **Renderizado Preciso**: Las manchas se recortan a la silueta de Spinda para una visualización precisa
- **Gestión de PID**: Genera PIDs aleatorios o introduce personalizados con soporte de portapapeles

### Aspectos Destacados del Diseño

- **UI Moderna**: Diseño profesional con efectos de glassmorfismo y animaciones suaves
- **Colores Adaptativos**: Esquema de colores adaptable al tema (naranja en modo claro, púrpura en modo oscuro)
- **Componentes Personalizados**: Construido sin Bootstrap para mejor rendimiento y personalización
- **Sistema de Rejilla**: Alterna la rejilla superpuesta para posicionar manchas con precisión
- **Renderizado Pixel Art**: Visualización nítida y clara del pixel art sin difuminado

### Origen del Proyecto

Este proyecto es un tributo al Spinda Painter original de la tercera generación de Pokémon. La herramienta original, desarrollada en chino, ya no está disponible, por lo que esta versión web busca preservar y mejorar su funcionalidad única con tecnologías web modernas.

### Tecnologías Utilizadas

- HTML5
- CSS3 (Variables Personalizadas, Grid, Flexbox)
- JavaScript Vanilla (ES6+)
- Canvas API para renderizado
- LocalStorage para persistencia de tema

### Cómo Usar

1. Visita la [Demo en Vivo](https://jdamiancabello.github.io/SpindaPainter-3gen/)

   O

2. Clona el repositorio
```bash
git clone https://github.com/JDamianCabello/SpindaPainter-3gen.git
```

3. Abre el archivo `index.html` en tu navegador

### Funcionalidades Principales

#### Sistema PID
- **Entrada de PID Personalizada**: Introduce un PID específico (hexadecimal) para generar un Spinda único
- **Generación Aleatoria**: Haz clic en el botón "Generar nuevo Spinda" para generar un PID aleatorio
- **Soporte de Portapapeles**: Copia el PID al portapapeles con un clic

#### Personalización de Manchas
- **Arrastrar y Soltar**: Haz clic y arrastra cualquiera de las 4 manchas para reposicionarlas
- **Actualizaciones en Tiempo Real**: Ve los cambios inmediatamente en el canvas principal y la vista previa
- **Soporte Táctil**: Soporte táctil completo para dispositivos móviles
- **Rejilla Superpuesta**: Alterna la rejilla para ver las posiciones exactas de píxeles

#### Sistema de Temas
- **Detección Automática**: Se adapta automáticamente a la preferencia de tema claro/oscuro de tu sistema
- **Alternador Manual**: Cambia de tema con el botón sol/luna
- **Persistente**: Tu preferencia de tema se guarda en el almacenamiento del navegador
- **Colores Adaptativos**: Todos los elementos de la interfaz se adaptan al tema seleccionado

#### Modo Pantalla Completa
- **Vista Ampliada**: Haz clic en el botón de pantalla completa para ver tu Spinda en una vista más grande
- **Rejilla Siempre Activa**: La rejilla está permanentemente visible en pantalla completa para posicionamiento preciso
- **Renderizado Nítido**: Visualización pixel-perfect sin difuminado ni suavizado
- **ESC para Salir**: Presiona ESC o haz clic fuera para cerrar el modo pantalla completa

### Cambio de Idioma

Cambia entre español e inglés haciendo clic en las banderas en la esquina superior derecha de la interfaz.

### Colaboradores

- **ShinMugenNoKabe** - [Perfil de GitHub](https://github.com/ShinMugenNoKabe)
  - Permitir a los usuarios introducir texto manualmente en el campo PID
  - Corregido el resumen de Spinda que mostraba habilidades incorrectas
  - Corregido el cálculo incorrecto de la naturaleza de Spinda
  - Añadida funcionalidad para generar un nuevo PID al recargar la página, y añadido un nuevo botón para regenerar el PID y copiarlo al portapapeles del sistema operativo

### Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un fork del proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Confirma tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Sube tu rama (`git push origin feature/AmazingFeature`)
5. Abre una solicitud de extracción

### Licencia

Distribuido bajo la Licencia MIT. Consulta `LICENSE` para obtener más información.

### Créditos

- **Creador**: JDamianCabello
- **Inspiración**: Spinda Painter original de la tercera generación de Pokémon
- **Fondo**: Pixel art de Pokémon Gen 3

### Problemas

Si encuentras algún error o tienes sugerencias, por favor abre un [issue](https://github.com/JDamianCabello/SpindaPainter-3gen/issues).

### Contacto

JDamianCabello - [Perfil de GitHub](https://github.com/JDamianCabello)

Disfruta personalizando tus Spindas!
