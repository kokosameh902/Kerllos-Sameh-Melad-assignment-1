document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

document.querySelectorAll('.product').forEach(function(product) {
    product.addEventListener('click', function() {
        product.classList.toggle('active');
    });
});
