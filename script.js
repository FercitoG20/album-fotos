const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

const photos = document.querySelectorAll(".photo img");
const captions = document.querySelectorAll(".photo p");
let currentPhotoIndex = 0;

const envelope = document.getElementById("envelope");
const anniversaryMessage = document.getElementById("anniversaryMessage");
const album = document.getElementById("album");

// Abrir sobre y mostrar el mensaje
function openEnvelope() {
  // Desplegar el sobre con animación
  envelope.querySelector('.flap-top').style.transform = 'rotateX(180deg)';
  envelope.querySelector('.flap-bottom').style.transform = 'rotateX(-180deg)';

  // Mostrar el mensaje de aniversario
  anniversaryMessage.classList.add('show');
  
  // Después de 4 segundos, ocultar el sobre y mostrar el álbum
  setTimeout(() => {
    anniversaryMessage.style.opacity = 0;
    setTimeout(() => {
      anniversaryMessage.style.display = 'none';
      envelope.style.display = 'none';  // El sobre desaparece
      album.style.display = 'block';  // Aparece el álbum
    }, 400);
  }, 4000); // El mensaje desaparece después de 4 segundos
}

// Cerrar Lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Navegar en Lightbox
function navigateLightbox(direction) {
  currentPhotoIndex += direction;
  if (currentPhotoIndex < 0) currentPhotoIndex = photos.length - 1;
  if (currentPhotoIndex >= photos.length) currentPhotoIndex = 0;
  updateLightbox();
}

// Actualizar contenido del Lightbox
function updateLightbox() {
  lightboxImg.src = photos[currentPhotoIndex].src;
  lightboxCaption.textContent = captions[currentPhotoIndex].textContent;
  lightbox.style.display = "flex"; // Mostrar el lightbox
}

// Reproducir/Pausar música
const music = document.getElementById("background-music");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
