const mongoose = require('mongoose');

const Artist = require('../models/Artist');

const artists = [
    {
        name: "Drake",
        year: 1986,
        genre: "Hip-hop, R&B, trap, pop, dancehall",
        albums: "Thank me later, Take Care, Nothing Was the Same, Views, More Life, Scorpion, Certified Lover Boy",
        image: "https://www.rap-up.com/app/uploads/2018/01/drake-elevator-1280x720.jpg"
    },
    {
        name: "Ed Sheeran",
        year: 1991,
        genre: "Pop, folk-pop, dance-pop",
        albums: "+, x, /, =",
        image: "https://www.teahub.io/photos/full/36-369521_ed-sheeran-photoshoot-uhd-4k-wallpaper-ed-sheeran.jpg"
    },
    {
        name: "Bad Bunny",
        year: 1994,
        genre: "Trap latino, hip-hop, rap, reggaeton, dancehall",
        albums: "X 100pre, YHLQMDLG, Oasis, El último tour del mundo",
        image: "https://los40.com/los40/imagenes/2021/06/09/bigbang/1623228092_357219_1623228255_gigante_normal.jpg"
    },
    {
        name: "The Weekend",
        year: 1990,
        genre: "Pop, disco, R&B, hip-hop, pop fussion, synth pop",
        albums: "Kiss Land, Beauty Behind the Madness, Starboy, After Hours, Dawn FM",
        image:"https://variety.com/wp-content/uploads/2020/04/the-weeknd-variety-cover-shoot-2-16x9-1.jpg"
    },
    {
        name: "Ariana Grande",
        year: 1993,
        genre: "Pop, R&B",
        albums: "Yours Truly, My Everything, Dangerous Woman, Sweetener, Thank U Next, Positions",
        image: "https://images.hdqwalls.com/wallpapers/ariana-grande-the-voice-season-21-photoshoot-1m.jpg"
    },{
        name: "Justin Bieber",
        year: 1994,
        genre: "Pop, R&B, hip-hop, dance",
        albums: "My World 2.0, Under the Mistletoe, Believe, Purpose, Changes, Justice",
        image: "https://img.nieuwsblad.be/fuyOLFSjna1jTXWA27hXNxA28aM=/960x640/smart/https%3A%2F%2Fstatic.nieuwsblad.be%2FAssets%2FImages_Upload%2F2020%2F04%2F08%2F2f04087a-7971-11ea-905f-c62abe791c98_web_scale_0.6349207_0.6349207__.jpg"
    },{
        name: "Post Malone",
        year: 1995,
        genre: "Pop, disco, R&B, hip-hop, trap, rock, country",
        albums: "Stoney, Berrbongs & Bentleys, Hollywood's Bleeding",
        image: "https://img.besthqwallpapers.com/Uploads/14-4-2018/48375/4k-post-malone-2018-american-singer-photoshoot.jpg"
    },{
        name: "Eminem",
        year: 1972,
        genre: "Rap, hip-hop, rapcore, trap, pop",
        albums: "Infinite, The Slim Shady LP, The Eminem Show, Encore, Relapse, Recovery, Revival, Kamikaze",
        image: "https://www.justshady.com/photos/photoshoot/eminem-with-ecko-clothes-2005-02.jpg"
    },
    {
        name: "Taylor Swift",
        year: 1989,
        genre: "Pop, country, alternative rock, country pop, folk pop, electropop",
        albums: "Taylor Swift, Fearless, Speak Now, Red, 1989, Reputation, Lover, Folklore, Evermore",
        image: "https://img3.goodfon.com/wallpaper/nbig/2/3d/taylor-swift-fotosessiya-6710.jpg"
    },
    {
        name: "BTS",
        year: 2013,
        genre: "K-pop, hip-hop, R&B, EDM",
        albums: "Dark & Wild, Wake Up, Youth, Wings, Face Yourslef, Love Yourself, Map of the Soul, Be",
        image: "https://kopromx.com/wp-content/uploads/2021/03/albumes.jpg"
    },
]


const artistDocuments = artists.map(artist => new Artist(artist));
mongoose
  .connect('mongodb+srv://ander:Ander7047!@cluster0.dglid.mongodb.net/MusicDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allArtists = await Artist.find();
    if (allArtists.length) {
      await Artist.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await Artist.insertMany(artistDocuments);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());

  