// Redireciona para o WhatsApp ao clicar no botão
document.querySelectorAll('.btn, .btn1').forEach(button => {
    button.addEventListener('click', () => {
        const phoneNumber = "5548996917300"; // Substitua pelo número de telefone correto
        const message = "Olá! Gostaria de agendar uma consulta.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
});
