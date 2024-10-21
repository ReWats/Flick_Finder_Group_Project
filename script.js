// create array of movies, including names, genre, decade, length, image.
const movies = [
  {
    title: "A Room with a View",
    year: 1985,
    genre: "romance",
    actors: [" Maggie Smith", " Helena Bonham Carter", " Denholm Elliott"],
    ageRating: "PG",
    length: 117,
    description:"Lucy Honeychurch (Helena Bonham Carter) shares a brief romance with George Emerson in Florence. Yet as she tries to move on with her life and look for marriage elsewhere, can she truly forget the events of that summer?",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2hhICRXi82dYcCCyNEeEbyAB9WEhvYDXci4kFi6iaGB6CaRX"
  },
  {
    title: "Titanic",
    year: 1997,
    genre: "romance",
    actors: [" Leonardo DiCaprio", " Kate Winslet", " Billy Zane"],
    ageRating: "12",
    length: 194,
    description:"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQlOeIost26Qv6cAAT73c9LLi0oRcXOJ6QQ5h3J1fUogSX_sD"
  },
  {
    title: "Pride&Prejudice",
    year: 2005,
    genre: "romance",
    actors: [" Keira Knightley", " Matthew Macfadyen", " Brenda Blethyn"],
    ageRating: "U",
    length: 129,
    description:"Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?",
    image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCrsuB8jRxM56vhmM1VsetxoZtP-P-PZvN1lB-RkZM5D2ae7Vf"
  },
  {
    title: "About Time",
    year: 2013,
    genre: "romance",
    actors: [" Domhnall Gleeson", " Rachel McAdams", " Bill Nighy"],
    ageRating: "12a",
    length: 123,
    description:"At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQISeoVD--jC4jXqYUl8ZbT7l2IT2lEZBE5_IEmFYgvcUFc8_95&psig=AOvVaw2EmXjPO5cAe4DnqGTG2ooK&ust=1728769106690000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCMjZufWkh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "The idea of you",
    year: 2024,
    genre: "romance",
    actors: [" Anne Hathaway", " Nicholas Galitzine", " Ella Rubin"],
    ageRating: "15",
    length: 115,
    description:"Solène, a 40-year-old single mom, begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcS0gG3DTq4oRc_SW7aHjZOQG5rIeEmGk0mSN73JEXqeHQuziPJG&psig=AOvVaw3BLAii1ImBtwvne9tNJ2T9&ust=1728769148594000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCJDhxomlh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Zoolander",
    year: 2001,
    genre: "comedy",
    actors: [" Ben Stiller", " Owen Wilson", " Christine Taylor"],
    ageRating: "12",
    length: 89,
    description:"At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSc5eLi2JsjkhJPVnBl-8udd9S5n-Q4XUKyApArh9rfEZYuxFzT&psig=AOvVaw1Ye0sx5sGdlIoOECXO20NH&ust=1728769177895000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCMCC3Zilh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "21 Jump Street",
    year: 2012,
    genre: "comedy",
    actors: [" Jonah Hill", " Channing Tatum", " Ice Cube"],
    ageRating: "15",
    length: 109,
    description:"A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTlrEwuDXX2EcLMc6YST6aaFlxwYwFgaxAK27b7DzRrR_EHLUGD&psig=AOvVaw0bwWbJNtuAadj38_VrE9bq&ust=1728769225550000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCIDojq6lh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Mrs Doubtfire",
    year: 1993,
    genre: "comedy",
    actors: [" Robin Williams", " Sally Field", " Pierce Brosnan"],
    ageRating: "12",
    length: 126,
    description:"After a bitter divorce, an actor disguises himself as a female housekeeper to spend time with his children held in custody by his former wife.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRw1715W2AqkavEP8_QJXlx6ZaZk3GsPfejZZi71i9wJOAJDWsD&psig=AOvVaw10o4xVLmwA5H790bkRZj9X&ust=1728769256155000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCKD75bylh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Ace Ventura: Pet Detective",
    year: 1994,
    genre: "comedy",
    actors: [" Jim Carrey", " Courteney Cox", " Sean Young"],
    ageRating: "12",
    length: 86,
    description:"A goofy detective specializing in animals goes in search of the missing mascot of the Miami Dolphins.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcT4gUD9rW4eacY7dWzqD8HnuSvAovZ44PQ6w2rCKsVDXqsEaxzl&psig=AOvVaw2CKSOKsU8Yd7HpWvPYMaAK&ust=1728769316485000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCKDuvNmlh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Beverly Hills Cop",
    year: 1984,
    genre: "comedy",
    actors: [" Eddie Murphy", " Judge Reinhold", " John Ashton"],
    ageRating: "15",
    length: 105,
    description:"A freewheeling Detroit cop pursuing a murder investigation finds himself dealing with the very different culture of Beverly Hills.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQEaT9snQRAYe4sneTr907UnzjRN8zWAij3Wa5k8jiN9ZlIIKdU&psig=AOvVaw1S_avUJl37fq5CYk5Hm3Y-&ust=1728769284396000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCICW-culh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Die Hard",
    year: 1988,
    genre: "action",
    actors: [" Bruce Willis", " Alan Rickman", " Bonnie Bedelia"],
    ageRating: "18",
    length: 131,
    description:"A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSo4rynrhfsiBKcV57MBiwg66Nk91gp2OtOWsGMQzkOeAbBByN3&psig=AOvVaw1oj2I73cePjiUOPxKW7rKH&ust=1728769846690000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCODErNanh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Speed",
    year: 1994,
    genre: "action",
    actors: [" Keanu Reeves", " Dennis Hopper", " Sandra Bullock"],
    ageRating: "15",
    length: 116,
    description:"A young police officer must prevent a bomb exploding aboard a city bus by keeping its speed above 50 mph.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRUoawiBER0gwOQ-77LsKxT7fonQ71q6tdch6WPhr020UIrVow3&psig=AOvVaw2vDD8XP_nzmyaiHSSIe6xQ&ust=1728769870868000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCPD16OGnh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "The Fast and the Furious",
    year: 2001,
    genre: "action",
    actors: [" Vin Diesel", " Paul Walker", " Michelle Rodriguez"],
    ageRating: "15",
    length: 106,
    description:"Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to end it.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRPZrglZn6wabuojpWMK7HKjasMaSSDiP8L7hLVyDwUG3B8BPby&psig=AOvVaw0wsnkQSHLIIvJvKGZZydiW&ust=1728769920606000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCNDqw_mnh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Salt",
    year: 2010,
    genre: "action",
    actors: [" Angelina Jolie", " Liev Schreiber", " Chiwetel Ejiofor"],
    ageRating: "15",
    length: 104,
    description:"A CIA agent goes on the run after a defector accuses her of being a Russian spy.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSLxDifXPfC8UMnCikL635VosLMX6VYVm-ceyTCW_wBtId13jIw&psig=AOvVaw0dT_-E36Ag99yTZuUXmL29&ust=1728769950522000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCNiw44eoh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Top Gun: Maverick",
    year: 2022,
    genre: "action",
    actors: [" Tom Cruise", " Jennifer Connelly", " Miles Teller"],
    ageRating: "12a",
    length: 131,
    description:"The story involves Maverick confronting his past while training a group of younger Top Gun graduates, including the son of his deceased best friend, for a dangerous mission",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTb0I81g39NGDx0sKP5F_DECCsdzoOwh9MVUD0PLSVvQpf3rpIM&psig=AOvVaw0_PlPB72s6PQnRGZlBiF4r&ust=1728769979464000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCJiwzpWoh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Gremlins",
    year: 1984,
    genre: "horror",
    actors: [" Zach Galligan", " Phoebe Cates", " Hoyt Axton"],
    ageRating: "15",
    length: 106,
    description:"A young man inadvertently breaks three important rules concerning his new pet and unleashes a horde of malevolently mischievous monsters on a small town.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRgvfbm6Nq_y11rHw27037Pz20KdBjDudI3UsbMxoGRwtOgrvnr&psig=AOvVaw3cyPgaxoGBHDCVp6upjOA2&ust=1728769343597000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCJCS7ealh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Dracula",
    year: 1992,
    genre: "horror",
    actors: [" Gary Oldman", " Winona Ryder", " Anthony Hopkins"],
    ageRating: "18",
    length: 128,
    description:"The centuries old vampire Count Dracula comes to England to seduce his barrister Jonathan Harker's fiancée Mina Murray and inflict havoc in the foreign land.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRfWTpnjEWCBbmgfelKRYundT-LIudVm8I8ZTTiAot8AHQc0bn_&psig=AOvVaw0cZ02D-9pvv_Snb4-8Hx61&ust=1728769382401000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCKC8wPmlh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Trick 'r Treat",
    year: 2007,
    genre: "horror",
    actors: [" Anna Paquin", " Brian Cox", " Dylan Baker"],
    ageRating: 15,
    length: 82,
    description:"Five Halloween stories: A principal has a secret life, a virgin is looking for her first time, a group of kids pull a prank, a woman who loathes Halloween does not respect the rules and a mean old man meets a demonic trick-or-treater.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTqsvFDcfn0oTyPyrvvyFLZ_pKTUfpm5q1ihBzUNUJFAmyZaXVB&psig=AOvVaw3dKg0SR34MAeuGqV8TaVPW&ust=1728769415302000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCLDrx4imh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "The Cabin in the Woods",
    year: 2011,
    genre: "horror",
    actors: [" Kristen Connolly", " Chris Hemsworth", " Anna Hutchison"],
    ageRating: "15",
    length: 95,
    description:"A group of kids go to a remote cabin in the woods where their fate is unknowingly controlled by technicians as part of a world-wide conspiracy where all horror movie clichés are revealed to be part of an elaborate sacrifice ritual.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQYZNVONhFNpMm4dzjAuZpc9XNzXmES9XXRoz7Ww51yE9KvPdtF&psig=AOvVaw0vQwwaTdGy9AgU7YvS9ZeM&ust=1728769442948000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCOit5pWmh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "The Dark and Wicked",
    year: 2020,
    genre: "horror",
    actors: [" Marin Ireland", " Michael Abbott", " Jr.Julie Oliver-Touchstone"],
    ageRating: "18",
    length: 95,
    description:"On a secluded farm in a nondescript rural town, a man is slowly dying. His family gathers to mourn, and soon a darkness grows, marked by waking nightmares and a growing sense that something evil is taking over the family.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSoHEzCzRMtOyX12SgpkjCnPdTQmi7dFi5NXF9VX8U97cC9GbeI&psig=AOvVaw1NNk3_DCJfZBTUS2sb77Y7&ust=1728769500405000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCKjOnLGmh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "E.T. the Extra-Terrestrial",
    year: 1982,
    genre: "family",
    actors: [" Henry Thomas", " Drew Barrymore", " Peter Coyote"],
    ageRating: "PG",
    length: 115,
    description:"A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQVtCI-F-fCKN3HUPRXzIcZe2e-DC97NRjhVgkG1iw2-DBqBdJ3&psig=AOvVaw0cU2KUYPKO0sF-x9L-iQf9&ust=1728769523481000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCPDxkbymh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "The Lion King",
    year: 1994,
    genre: "family",
    actors: [" Matthew Broderick", " Jeremy Irons", " James Earl Jones"],
    ageRating: "U",
    length: 88,
    description:"Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRNviEmFZs763Ex1O9GUk-XcTMtws6FEuXV73fn-g6ZBuIsGvYz&psig=AOvVaw3MJgUiObpjxNp6Kt4d7SVD&ust=1728769574667000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCPCy29Smh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Spirited away",
    year: 2003,
    genre: "family",
    actors: [" Daveigh Chase", " Suzanne Pleshette", " Miyu Irino"],
    ageRating: "PG",
    length: 125,
    description:"During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSUhcxBy7msWBIrxRvKnczoXV61Vd6kqP5H2Kh3m2U8MMG15JIj&psig=AOvVaw2hq9bjQM42MeXeNT2vOHJq&ust=1728769633014000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCMDHr_Cmh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Harry Potter and Goblet of Fire",
    year: 2005,
    genre: "family",
    actors: [" Daniel Radcliffe", " Emma Watson", " Rupert Grint"],
    ageRating: "12a",
    length: 157,
    description:"Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQMXiXr846cpzfD-JsSJgteVBmlSgoyFtggYl-noUqiDol7u0Bt&psig=AOvVaw2XsQxIMhHQoth7z1rbmRSb&ust=1728769656518000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCOjKzvumh4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Inside Out 2",
    year: 2024,
    genre: "family",
    actors: [" Amy Poehler", " Maya Hawke", " Kensington Tallman"],
    ageRating: "U",
    length: 96,
    description:"A sequel that features Riley entering puberty and experiencing brand new, more complex emotions as a result. As Riley tries to adapt to her teenage years, her old emotions try to adapt to the possibility of being replaced",
    image:"https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQaH-PV6Pj6jNAORPN-HlRUyQT8j4wmZ5gzabxWaF3ksGuwpkIJ&psig=AOvVaw0BCH54ap2rmpKoEp8Rl_QW&ust=1728769822368000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCLjj2Mqnh4kDFQAAAAAdAAAAABAE"
  }
];

//Function to create a list of all titles from the moviesArray
function getAllTitles(moviesArray) {
    return moviesArray.map(function(movie) {
        return movie.title;
    });
}

//Constant of a list with all titles from the array
const allMovieTitles = getAllTitles(movies);

//Panlin start code
// Function returns array of movies that match user's preferences
function filterMovies(preferences) {
  return movies.filter(
    (movie) =>
      movie.genre === preferences.genre &&
      Math.floor(movie.year / 10) * 10 === parseInt(preferences.decade) &&
      (preferences.length === "short"
        ? movie.length < 120
        : movie.length >= 120)
  );
}

//Function displays the results. if no movie meets the criteria, it will show <p> content, otherwise, it will show matching movies with movie images and information (name, length and decade).
function displayFilteredResults(filteredMovies) {
  const resultsDiv = document.getElementById("findAFilmResults");
  resultsDiv.innerHTML = "";

  if (filteredMovies.length === 0) {
    resultsDiv.innerHTML = "<p>No movies found matching your criteria.</p>";
  } else {
    filteredMovies.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.className = "movie-card";

      const img = document.createElement("img");
      img.src = movie.image;
      img.alt = movie.title;
      movieCard.appendChild(img);

      const movieInfo = document.createElement("div");
      movieInfo.className = "movie-info";
      movieInfo.innerHTML = `
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
                <p>${movie.actors}</p>
                <p>${movie.year}, ${movie.length} minutes, ${movie.ageRating}</p>
            `;
      movieCard.appendChild(movieInfo);
      
      //Create a "Save" button for each movie that we have recommended
      const saveButton = document.createElement("button");
      saveButton.textContent = "Add to List";
      saveButton.onclick = () => saveMovie(movie);
            ;

      movieCard.appendChild(saveButton);
      resultsDiv.appendChild(movieCard);
    });
  }
}

// when click the searchButton, it will show movieForm
document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  const movieForm = document.getElementById("movieForm");

  searchButton.addEventListener("click", function () {
    movieForm.style.display = "flex";
    searchButton.style.display = "none";
  });

  // when click submit button, it will call filterMovies() and displayFilteredResults() functions.
  movieForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const preferences = {
      genre: document.getElementById("genre").value,
      decade: document.getElementById("decade").value,
      length: document.getElementById("length").value
    };

    const filteredMovies = filterMovies(preferences);
    displayFilteredResults(filteredMovies);
  });
});
//Panlin end code

//Function to get random movies
function getRandomMovies(count) {
  const randomMovies = [];
  const movieCopy = movies.slice();

//Loop until we have the desired number of random movies
  while (randomMovies.length < count) {
    const randomIndex = Math.floor(Math.random() * movieCopy.length);
    const pickedMovie = movieCopy.splice(randomIndex, 1)[0];
    
    randomMovies.push(pickedMovie);
  }
  return randomMovies
}

//Function displays the results. It will show 3 random movies with movie images and information (name, length and decade).
function displayRandomResults(randomMovies) {
  const resultsDiv = document.getElementById("surpriseResults");
  resultsDiv.innerHTML = "";
  randomMovies.forEach((randomMovie) => {
      const movieCard = document.createElement("div");
      movieCard.className = "movie-card";

      const img = document.createElement("img");
      img.src = randomMovie.image;
      img.alt = randomMovie.title;
      movieCard.appendChild(img);

      const movieInfo = document.createElement("div");
      movieInfo.className = "movie-info";
      movieInfo.innerHTML = `
                <h3>${randomMovie.title}</h3>
                <p>${randomMovie.description}</p>
                <p>${randomMovie.actors}</p>
                <p>${randomMovie.year},   ${randomMovie.length} minutes, ${randomMovie.ageRating}</p>`
      
      //Create a "Save" button for each movie that we have recommended
      const saveButton = document.createElement("button");
      saveButton.textContent = "Add to List";
      saveButton.onclick = () => saveMovie(randomMovie);
            ;
    
      movieCard.appendChild(movieInfo);
      movieCard.appendChild(saveButton);
      resultsDiv.appendChild(movieCard);
    });
  }

  // when click surprise me button, it will call randomMovies() and displayResults() functions.
surpriseForm.addEventListener("click", function (e) {
   e.preventDefault();
  const randomMovies = getRandomMovies(3);
  displayRandomResults(randomMovies);
   });

//Create a separate array to store our saved movies 
let savedMovies = []; 

//Function to save a movie
function saveMovie(movie) {
  if (!savedMovies.includes(movie)) {
    savedMovies.push(movie); 
//Add movie to saved list
    updateSavedMoviesList();
  } else {

//Give an alert if user tries to add same movie twice,tried using blurt for something better looking but couldn't get the external css + js to work in codepen
    alert(`${movie.title} is already in your saved list.`);
  }
}

//Function to update the saved movies display
function updateSavedMoviesList() {
  const savedList = document.getElementById("savedMovies");
  savedList.innerHTML = ""; 

//Create a list of the saved movies  
  savedMovies.forEach(movie => {
    const listItem = document.createElement("li");
    listItem.textContent = `${movie.title};  ${movie.genre} : (${movie.year}) - ${movie.length} minutes`;
    savedList.appendChild(listItem);
  });
}

const card = document.querySelectorAll(".card__inner");

function flipCard() {
  this.classList.toggle('is-flipped');
}
card.forEach((card) => card.addEventListener("click", flipCard));
