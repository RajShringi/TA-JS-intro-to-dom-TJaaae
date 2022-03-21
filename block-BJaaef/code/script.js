let allPeople = got.houses.reduce((acc, cur) => {
  acc = [...acc, ...cur.people];
  return acc;
}, []);

let list = document.querySelector(".list");
let gotPeople = allPeople
  .map((person) => {
    return `
      <li class="card">
          <div class="flex">
            <img
              src=${person.image}
              alt=${person.name}
            />
            <h3>${person.name}</h3>
          </div>
          <p class="person-desc">
            ${person.description}
          </p>
          <a href=${person.wikiLink} class="btn" target="_blank">Learn More!</a>
      </li>
      `;
  })
  .join(" ");

list.innerHTML = gotPeople;
