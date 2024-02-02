function showPets() {
    document.querySelector('.homepage').style.display = 'none';
    document.getElementById('pets').style.display = 'block';
}

const pets = [
    {

        name: "Fluffy",
        species: "Cat",
        gender: "Male",
        age: 2,
        image: "images/Cat1.jpg",
        description: "Playful, Gentle, Curious"
    },
    {
        name: "Lulu",
        species: "Cat",
        gender: "Female",
        age: 3,
        image: "images/Cat2.jpg",
        description: "Gentle, Playful, Loyal, Friendly"
    },
    {
        name: "Misha",
        species: "Cat",
        gender: "Female",
        age: 3,
        image: "images/Cat3.jpg",
        description: "Independent, Funny, Dignified, Gentle"
    },
    {
        name: "Tiffany",
        species: "Cat",
        gender: "Female",
        age: 1,
        image: "images/Cat4.jpg",
        description: "Playful, Friendly, Affectionate"
    },
    {
        name: "Chino",
        species: "Cat",
        gender: "Male",
        age: 2,
        image: "images/Cat5.jpg",
        description: "Friendly, Affectionate, Playful, Funny"
    },
    {
        name: "Rex",
        species: "Dog",
        gender: "Male",
        age: 1,
        image: "images/Dog1.jpg",
        description: "Friendly, Affectionate, Gentle, Funny"
    },
    {
        name: "Milou",
        species: "Dog",
        gender: "Female",
        age: 3,
        image: "images/Dog2.jpg",
        description: "Friendly, Affectionate, Gentle, Smart"
    },
    {
        name: "Boo",
        species: "Dog",
        gender: "Male",
        age: 6,
        image: "images/Dog3.jpg",
        description: "Gentle, Smart, Friendly, Affectionate, Playful"
    },
    {
        name: "Mako",
        species: "Dog",
        gender: "Male",
        age: 1,
        image: "images/Dog4.jpg",
        description: "Gentle, Smart, Dignified, Playful"
    },
    {
        name: "Maddy",
        species: "Dog",
        gender: "Female",
        age: 2,
        image: "images/Dog5.jpg",
        description: "Curious, Funny, Playful"
    }
];

function displayPets() {
    const catsList = document.getElementById("catsList");
    const dogsList = document.getElementById("dogsList");

    pets.forEach(pet => {
        const card = document.createElement("div");
        card.classList.add("pet-card");

        const image = document.createElement("img");
        image.src = pet.image;
        card.appendChild(image);

        const name = document.createElement("h2");
        name.textContent = pet.name;
        card.appendChild(name);

        const species = document.createElement("p");
        species.textContent = `Species: ${pet.species}`;
        card.appendChild(species);

        const age = document.createElement("p");
        age.textContent = `Age: ${pet.age} years old`;
        card.appendChild(age);

        const description = document.createElement("p");
        description.textContent = pet.description;
        card.appendChild(description);

        const adoptBtn = document.createElement("button");
        adoptBtn.textContent = "Adopt";
        adoptBtn.classList.add("btn");
        adoptBtn.addEventListener("click", () => {
            showAdoptionForm(pet.species.toLowerCase(), pet);
        });
        card.appendChild(adoptBtn);

        if (pet.species === 'Cat') {
            catsList.appendChild(card);
        } else if (pet.species === 'Dog') {
            dogsList.appendChild(card);
        }
    });
}

function showAdoptionForm(species, pet) {
    const adoptionForm = document.getElementById(`${species}AdoptionForm`);
    adoptionForm.style.display = "block";

    const notification = document.getElementById("notification");
    notification.style.display = "block";

    document.getElementById(`${species}Name`).value = pet.name;
}

function adoptPet(species, event) {
    event.preventDefault();

    const petName = document.getElementById(`${species}Name`).value;
    alert(`Thank you for adopting ${petName}!`);

    document.getElementById(`${species}AdoptionForm`).reset();
    document.getElementById(`${species}AdoptionForm`).style.display = "none";
}

window.onload = displayPets;


