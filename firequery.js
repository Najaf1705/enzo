const admin = require('firebase-admin');
const serviceAccount = require('./servicekey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// const anime_list = [
//     {
//         "name": "Naruto",
//         "about": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
//         "aired": "Winter 2002",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3hqtXiYaVQyLj_SmMNQlnbLL7pYwS8Tn7w&s"
//     },
//     {
//         "name": "One Piece",
//         "about": "Monkey D. Luffy and his pirate crew embark on adventures to find the legendary One Piece treasure and become the Pirate King.",
//         "aired": "Fall 1999",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7qk0LVL6kU6wOQz9J5P7RJt9X0wE8LMGtw&s"
//     },
//     {
//         "name": "Bleach",
//         "about": "Ichigo Kurosaki becomes a Soul Reaper and battles evil spirits to protect the living and the dead.",
//         "aired": "Fall 2004",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQb0jKYa5uQ2WxygCpl7LpQOlvFxYKiAI5Pw&s"
//     },
//     {
//         "name": "Attack on Titan",
//         "about": "Eren Yeager and his friends join the Scout Regiment to fight against gigantic Titans threatening humanity.",
//         "aired": "Spring 2013",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy6FJH4v1EkK7qL2ZCnrxVG5FJq-X-1GnvA&s"
//     },
//     {
//         "name": "My Hero Academia",
//         "about": "Izuku Midoriya attends U.A. High School to become a professional hero in a world where superpowers are common.",
//         "aired": "Spring 2016",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZzstppG5wnfFkh0j3rvcrFl4NfgUqVfwTw&s"
//     },
//     {
//         "name": "Demon Slayer",
//         "about": "Tanjiro Kamado becomes a demon slayer to avenge his family and cure his sister who was turned into a demon.",
//         "aired": "Spring 2019",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzqgKuzcERx4eU1rz9zhUkZ4I5bZlOtH2jQ&s"
//     },
//     {
//         "name": "Sword Art Online",
//         "about": "Players are trapped in a virtual reality MMORPG and must clear all levels to escape.",
//         "aired": "Summer 2012",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9XfjXzWtV3s8SxMXBx4ddU4QkqTlk4A4DjA&s"
//     },
//     {
//         "name": "Fullmetal Alchemist: Brotherhood",
//         "about": "Edward and Alphonse Elric use alchemy to search for the Philosopher's Stone to restore their bodies.",
//         "aired": "Spring 2009",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFT1RTqS70e5PH4zFm4KUC8XGKlC-0GJ-ZYw&s"
//     },
//     {
//         "name": "Dragon Ball Z",
//         "about": "Goku and his friends defend Earth against powerful villains.",
//         "aired": "Spring 1989",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZUM8kFvFsnR_LxjztfgXG_QPZz2czE7eRg&s"
//     },
//     {
//         "name": "Tokyo Ghoul",
//         "about": "Ken Kaneki becomes a half-ghoul and struggles to live in a world where ghouls exist.",
//         "aired": "Summer 2014",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzGOzI5khg1rOz5rU-Wi5x1Ba_Z0UXHVi6Q&s"
//     },
//     {
//         "name": "Fairy Tail",
//         "about": "Natsu Dragneel and his guild embark on magical adventures.",
//         "aired": "Fall 2009",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2OeTkEXSRsT2_oXMsDbRFS1tX23tHRwQ6WA&s"
//     },
//     {
//         "name": "Death Note",
//         "about": "Light Yagami finds a notebook that allows him to kill anyone by writing their name in it.",
//         "aired": "Fall 2006",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdahUuRPEJrUC6iXPtS1BdTL5PfFb8tuQkA&s"
//     },
//     {
//         "name": "Black Clover",
//         "about": "Asta, a boy born without magic, aims to become the Wizard King.",
//         "aired": "Fall 2017",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlS2gRfM2QDDxxdW_KKTVbRqsSt72jcQLGA&s"
//     },
//     {
//         "name": "Blue Exorcist",
//         "about": "Rin Okumura, a teenager with demonic powers, trains to become an exorcist.",
//         "aired": "Spring 2011",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nHf-7kMlBLdsBckosqQ2pGna9WAKIeqjXw&s"
//     },
//     {
//         "name": "Hunter x Hunter",
//         "about": "Gon Freecss becomes a Hunter to find his father and explore the world.",
//         "aired": "Fall 2011",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToaN1xhtln4fyZ9AnBe5AJn9RfMX09XeNpDA&s"
//     },
//     {
//         "name": "JoJo's Bizarre Adventure",
//         "about": "The Joestar family battles supernatural forces across generations.",
//         "aired": "Fall 2012",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0gYhIp7exD32VJ3Ikm7Ac4W4bcsCh8XzFg&s"
//     },
//     {
//         "name": "Haikyuu!!",
//         "about": "Shoyo Hinata strives to become a top volleyball player despite his short stature.",
//         "aired": "Spring 2014",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLkryWX8GeaZk1lh03As3kAxAv-RcrdfjQhg&s"
//     },
//     {
//         "name": "The Seven Deadly Sins",
//         "about": "A group of knights must reunite to save their kingdom.",
//         "aired": "Fall 2014",
//         "category": "Shonen",
//         "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVx9shkRWikjEuVzAdLg6l68tlyGCrW4yOg&s"
//     },
// ];

// anime_list.forEach(async (anime) => {
//     const res = await db.collection('AnimeList').add(anime);
//     console.log('Added document with ID: ', res.id);
// });

const address=[
  {
      "name": "Naruto",
      "address": "Mt. Takao, Hachioji, Tokyo, Japan"
  },
  {
      "name": "One Piece",
      "address": "Gunkanjima, Nagasaki Prefecture, Japan"
  },
  {
      "name": "Bleach",
      "address": "Narita City, Chiba Prefecture, Japan"
  },
  {
      "name": "Attack on Titan",
      "address": "Nördlingen, Bavaria, Germany"
  },
  {
      "name": "My Hero Academia",
      "address": "Musashino, Tokyo, Japan"
  },
  {
      "name": "Demon Slayer",
      "address": "Mt. Kumotori, Saitama Prefecture, Japan"
  },
  {
      "name": "Sword Art Online",
      "address": "Odaiba, Tokyo, Japan"
  },
  {
      "name": "Fullmetal Alchemist: Brotherhood",
      "address": "Colmar, Alsace, France"
  },
  {
      "name": "Dragon Ball Z",
      "address": "Mt. Fuji, Japan"
  },
  {
      "name": "Tokyo Ghoul",
      "address": "Shinjuku, Tokyo, Japan"
  },
  {
      "name": "Fairy Tail",
      "address": "Paris, France"
  },
  {
      "name": "Death Note",
      "address": "Shibuya, Tokyo, Japan"
  },
  {
      "name": "Black Clover",
      "address": "Furano, Hokkaido, Japan"
  },
  {
      "name": "Blue Exorcist",
      "address": "Kyoto, Japan"
  },
  {
      "name": "Hunter x Hunter",
      "address": "Venice, Italy"
  },
  {
      "name": "JoJo's Bizarre Adventure",
      "address": "Naples, Italy"
  },
  {
      "name": "Haikyuu!!",
      "address": "Sendai, Miyagi Prefecture, Japan"
  },
  {
      "name": "The Seven Deadly Sins",
      "address": "Edinburgh, Scotland"
  }
]


async function alteration(data){
    // const arr=["Shonen","Sci-Fi","Sports"]
    const snapshot=await db.collection('AnimeList').where('name','==',data.name).get();

    snapshot.forEach(doc=>{
        // let x=Math.floor(Math.random() * (5 - 3 + 1)) + 3;
        // doc.ref.update({category: arr[x]});
        // doc.ref.update({rating: x});
        doc.ref.update({address: data.address});
    });
}

address.forEach((doc)=>{
  alteration(doc);
})
// alteration();
