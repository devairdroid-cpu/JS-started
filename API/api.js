document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const cardContainer = document.getElementById('user-cards');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            users.forEach(user => {
                const card = document.createElement('div');
                card.classList.add('card');

                const name = document.createElement('h2');
                name.textContent = user.name;

                const username = document.createElement('p');
                username.textContent = `Username: ${user.username}`;

                const email = document.createElement('p');
                email.textContent = `Email: ${user.email}`;

                const company = document.createElement('p');
                company.textContent = `Company: ${user.company.name}`;

                card.appendChild(name);
                card.appendChild(username);
                card.appendChild(email);
                card.appendChild(company);

                cardContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            cardContainer.innerHTML = '<p>Error loading users. Please try again later.</p>';
        });
});