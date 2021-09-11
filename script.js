function start() {
  for (i = 1; i < 51; i++) {
    char_id(i);
  }
}

const whole_container = document.createElement('div');
whole_container.className = 'whole_container';

async function char_id(id) {
  const link = await fetch(`https://www.swapi.tech/api/people/${id}`);
  const data = await link.json();
  const planet = await fetch(`https://www.swapi.tech/api/planets/${id}`);
  const data_planet = await planet.json();

  const info = document.createElement('div');
  info.className = 'info';

  info.innerHTML = `
    <div class="name_class"><strong>Name:</strong> ${data.result.properties.name}</div>
    <div><strong>Planet:</strong> ${data_planet.result.properties.name}</div>
    <div><strong>Height:</strong> ${data.result.properties.height}</div>
    <div><strong>DOB:</strong> ${data.result.properties.birth_year}</div>
    <div><strong>Hair-color:</strong> ${data.result.properties.hair_color}</div>
    `;
  console.log(data);
  whole_container.append(info);
}
document.body.append(whole_container);

start();
