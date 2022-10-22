const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api/1.4?results=5");
    const data = await usersRequest.json();
    //console.log(data);

    // get array of users
    const userResults = data.results;
    //console.log(userResults);

    displayUsers(userResults);
};

const displayUsers = function (users) {
    randomFolks.innerHTML = "";

    for (let user of users) {
        const country = user.location.country;
        const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
        const imageUrl = user.picture.medium;
        
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src="${imageUrl}" alt="User avatar">
        `;
        randomFolks.append(userDiv);
    };
};

getData();

