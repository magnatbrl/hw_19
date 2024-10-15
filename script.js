// На отдельной странице добавьте отображение данных для нашей API https://api.genderize.io/?name=james
// Сделайте верстку которая бы показывала данные по своему имени на странице
// Добавьте форму, чтобы можно было подставлять в запрос разные данные и в ответе по нажатию кнопки получать информацию по разным именам

document.getElementById('nameForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Предотвращает перезагрузку страницы

    const nameInput = document.getElementById('name').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch(`https://api.genderize.io/?name=${nameInput}`);
        const data = await response.json();

        if (data.gender) {
            resultDiv.innerHTML = `<p>Name: ${data.name}</p>
                                   <p>Gender: ${data.gender}</p>
                                   <p>Probability: ${data.probability}</p>
                                   <p>Count: ${data.count}</p>`;
        } else {
            resultDiv.innerHTML = `<p>No gender information available for "${nameInput}"</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
});
