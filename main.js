
// 1-mashq
document.getElementById('adviceBtn').onclick = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    document.getElementById('adviceText').textContent = data.slip.advice;
};

// 2-mashq
document.getElementById('factBtn').onclick = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    document.getElementById('factText').textContent = data.fact;
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
};

// 3-mashq
document.getElementById('colorBtn').onclick = async () => {
    const response = await fetch('https://www.colr.org/json/color/random');
    const data = await response.json();
    const color = '#' + data.colors[0].hex;
    document.getElementById('colorBox').style.backgroundColor = color;
    document.getElementById('colorCode').textContent = color;
};

// 4-mashq
document.getElementById('jokeBtn').onclick = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    if (data.type === 'single') {
        document.getElementById('jokeText').textContent = data.joke;
    } else {
        document.getElementById('jokeText').textContent = `${data.setup} - ${data.delivery}`;
    }
};
// 5-mashq
document.getElementById('getInfoBtn').onclick = async () => {
    const name = document.getElementById('personName').value;
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    const data = await response.json();
    if (data.results) {
        const person = data.results[0];
        document.getElementById('personInfo').innerHTML = `
            <img src="${person.image}" alt="${person.name}">
            <p>Ism: ${person.name}</p>
            <p>Status: ${person.status}</p>
        `;
    } else {
        document.getElementById('personInfo').textContent = 'Bunday shaxs mavjud emas';
    }
};

// 6-mashq
document.getElementById('createUserBtn').onclick = async () => {
    const name = document.getElementById('userName').value;
    const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    });
    const data = await response.json();
    document.getElementById('confirmationMessage').textContent = 'Foydalanuvchi muvaffaqiyatli ro‘yxatga olindi';
};