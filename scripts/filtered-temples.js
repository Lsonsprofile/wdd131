const button = document.querySelector('#menu');
const nav = document.querySelector('nav');
const body = document.body;

button.addEventListener('click', (e) => {
    e.stopPropagation();   
    button.classList.toggle('open');
    nav.classList.toggle('show');
});


body.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
        button.classList.remove('open');
    }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 550) {
    nav.classList.remove('show');
    button.classList.remove('open');
  }
});



// The big list of all temples (the one from the assignment + 3 more I added for you)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Apia Samoa",
    location: "Pesega, Apia",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah",
    dedicated: "1888, May, 17",
    area: 74792,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
  },
  {
    templeName: "Belém Brazil",
    location: "Belém, Pará, Brazil",
    dedicated: "2022, November, 20",
    area: 28675,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
  }
];

// Function that builds all the temple cards and puts them on the page
function displayTemples(templeArray) {
  const container = document.getElementById("temple-container");
  container.innerHTML = ""; // clear any old cards first

  templeArray.forEach(temple => {
    // Create a new <figure> for this temple
    const figure = document.createElement("figure");

    // Create the <img> with lazy loading
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy";               // ← This is the native lazy loading the assignment wants
    img.width = 300;
    img.height = 300;

    // Create the <figcaption> with all the info
    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    // Put img and figcaption inside the figure
    figure.appendChild(img);
    figure.appendChild(figcaption);

    // Put the whole figure inside the container
    container.appendChild(figure);
  });
}

// Run it once when the page loads (shows ALL temples first)
displayTemples(temples);

// FILTERING: Respond to menu clicks
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // stop the # from jumping

    const filter = link.textContent.trim();

    let filteredTemples = [];

    if (filter === "Home") {
      filteredTemples = temples;
    } else if (filter === "Old") {
      filteredTemples = temples.filter(t => parseInt(t.dedicated) < 1900);
    } else if (filter === "New") {
      filteredTemples = temples.filter(t => parseInt(t.dedicated) > 2000);
    } else if (filter === "Large") {
      filteredTemples = temples.filter(t => t.area > 90000);
    } else if (filter === "Small") {
      filteredTemples = temples.filter(t => t.area < 10000);
    }

    displayTemples(filteredTemples);
  });
});


const yearSpan = document.getElementById('currentYear');
const modSpan = document.getElementById('lastModified');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
modSpan.textContent = document.lastModified;

