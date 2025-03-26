const restaurantData = {
    "Gabel Loffel": {
        name: "GABEL LOFFEL",
        address: "235 GLENDALE AVE., MERIDIEN CITY <br>T: 490 49 4000 <br>W: GANDG.RES",
        info: "CATEGORY: SWISS <br> OPEN: 10AM to 10PM <br> PRICE: $$$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, milla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Present convallis uma a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed mune venenatis imperdiet sed ornare turpis.<br><br>Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
        image: "gabel_loffel.png"
    },
    "Gary Gari": {
        name: "GARY GARI",
        address: "76 NO. HIGHLAND AVE., MERIDIEN CITY <br>T: 490 24 6709 <br>W: GANDG.RES",
        info: "CATEGORY: JAPANESE <br> OPEN: 5PM to 10PM <br> PRICE: $$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, milla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Present convallis uma a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed mune venenatis imperdiet sed ornare turpis.<br><br>Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
        image: "gary_gari.png"
    },
    "Il Piatto": {
        name: "IL PIATTO",
        address: "1213 SHOUTOUT WAY MERIDIEN CITY <br>T: 490 42 1204 <br>W: ILPIATTO.RES",
        info: "CATEGORY: ITALIAN <br> OPEN: 11AM to 11PM <br> PRICE: $$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, milla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Present convallis uma a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed mune venenatis imperdiet sed ornare turpis.<br><br>Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
        image: "il_piatto.png"
    },
    "Pierre Platters": {
        name: "PIERRE PLATTERS",
        address: "68 8TH AVE., MERIDIEN CITY <br>T: 490 69 3080 <br>W: PIERREPRES",
        info: "CATEGORY: JAPANESE <br> OPEN: 5PM to 10PM <br> PRICE: $$$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, milla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Present convallis uma a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed mune venenatis imperdiet sed ornare turpis.<br><br>Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.",
        image: "pierre_platiers.png"
    }
};

function showRestaurant(name) {
    const restaurant = restaurantData[name];
    if (!restaurant) return;

    const detailsHTML = `
        <div class="restaurant-details-container">
            <div class="vertical-name">${restaurant.name}</div>
            <div class="image-container">
                <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
            </div>
            <div class="info-container">
        <h2 class="restaurant-title">${restaurant.name}</h2>

        <div class="info-content">
            <div class="left-column">
                <p>${restaurant.address}</p>
            </div>
            <div class="right-column">
                <p>${restaurant.info}</p>
            </div>
        </div>
            <p class="description">${restaurant.description}</p>
        </div>
        </div>
    `;

    document.getElementById("restaurant-list").style.display = "none";
    document.getElementById("restaurant-details").innerHTML = detailsHTML;
    document.getElementById("restaurant-details").style.display = "block";
}

function goToMainMenu() {
    document.getElementById("restaurant-list").style.display = "flex";
    document.getElementById("restaurant-details").style.display = "none";
}
