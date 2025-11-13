document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    
    // Открытие/закрытие меню
    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
    
    // Закрытие меню при клике на ссылку
    const menuLinks = document.querySelectorAll('.sidebar a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuIcon.classList.remove('active');
            sidebar.classList.remove('active');
        });
    });
    
    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });

    // Фильтрация карточек
    const filterButtons = document.querySelectorAll('.filter-btn');
    const componentCards = document.querySelectorAll('.component-card');
    const activeFilterText = document.getElementById('active-filter-text');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            activeFilterText.textContent = filterValue === 'all' ? 'Все' : filterValue;
            
            // Фильтруем карточки
            componentCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
});