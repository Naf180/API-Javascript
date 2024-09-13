document.addEventListener('DOMContentLoaded', function() {
  var box = document.getElementById('box');

  // Animation sur click (translation à droite)
  box.addEventListener('click', function() {
    gsap.to('#box', {
      x: 500,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Animation sur double clic (changer de couleur et opacité)
  box.addEventListener('dblclick', function() {
    gsap.to('#box', {
      backgroundColor: '#28a745',
      opacity: 0.8,
      duration: 1
    });
  });

  // Animation sur mouseover (augmenter la taille)
  box.addEventListener('mouseover', function() {
    gsap.to('#box', {
      scale: 1.3,
      duration: 0.5,
      ease: "power1.inOut"
    });
  });

  // Animation sur mouseleave (retour à la taille normale)
  box.addEventListener('mouseleave', function() {
    gsap.to('#box', {
      scale: 1,
      duration: 0.5,
      ease: "power1.inOut"
    });
  });

  // Animation sur clic droit (rotation)
  box.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    gsap.to('#box', {
      rotation: 360,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    });
  });
});
