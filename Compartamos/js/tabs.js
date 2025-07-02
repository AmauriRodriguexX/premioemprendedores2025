document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabs a');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', function (e) {
        e.preventDefault();

        // Remueve clase active de todos los tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Agrega clase active al tab actual
        this.classList.add('active');

        // Oculta todos los contenidos
        contents.forEach(content => {
          content.classList.remove('active');
        });

        // Muestra el contenido correspondiente
        const region = this.getAttribute('data-region');
        const contentToShow = document.querySelector(`.tab-content[data-region="${region}"]`);
        if (contentToShow) contentToShow.classList.add('active');
      });
    });
  });
