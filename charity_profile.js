document.addEventListener('DOMContentLoaded', (event) => {
    const volunteerNowButton = document.getElementById('volunteerNowButton');
    const formContainer = document.getElementById('formContainer'); 
    volunteerNowButton.addEventListener('click', function() {
        formContainer.innerHTML = '';

        const form = document.createElement('form');
        form.id = 'volunteerForm';

        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('placeholder', 'Your Name');
        nameInput.setAttribute('name', 'name');
        form.appendChild(nameInput);


        const emailInput = document.createElement('input');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('placeholder', 'Your Email');
        emailInput.setAttribute('name', 'email');
        form.appendChild(emailInput);

        const submitButton = document.createElement('input');
        submitButton.setAttribute('type', 'submit');
        submitButton.value = 'Submit';
        form.appendChild(submitButton);

        formContainer.appendChild(form);

        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const feedback = document.createElement('div');
            feedback.textContent = 'Thank you for volunteering!';
            formContainer.appendChild(feedback);
        });
    });
});
