/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const promise = axios.get(`https://api.github.com/users/jazz-code`);

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

axios.get(`https://api.github.com/users/jazz-code`).then(data => {
  console.log("response", data);
  const cards = document.querySelector(".cards");
  const githubData = githubComponent(data.data);
  cards.appendChild(githubData);
});
// .catch(err => {
//   console.log(err);
// });

function githubComponent(githubObj) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("img");
  img.src = githubObj.avatar_url;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const title = document.createElement("h3");
  title.classList.add("name");
  title.textContent = githubObj.name;

  const userName = document.createElement("p");
  userName.classList.add("username");
  userName.textContent = githubObj.login;

  const location = document.createElement("p");
  location.textContent = `Location: ${githubObj.location}`;

  const profile = document.createElement("p");
  profile.textContent = `Profile: ${githubObj.html_url}`;

  // const anchor = document.createElement("a");

  const followers = document.createElement("p");
  followers.textContent = `Followers: ${githubObj.followers}`;

  const following = document.createElement("p");
  following.textContent = `Following: ${githubObj.following}`;

  const bio = document.createElement("p");
  bio.textContent = `Bio: ${githubObj.bio}`;

  card.appendChild(img);
  card.appendChild(cardInfo);
  card.appendChild(title);
  card.appendChild(userName);
  card.appendChild(location);
  card.appendChild(profile);
  card.appendChild(followers);
  card.appendChild(following);
  card.appendChild(bio);

  return card;
}
