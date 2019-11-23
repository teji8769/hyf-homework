/*------------------REMOVIND A NAME(Array Removal)---------------*/

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// for (let i = 0; i < names.length; i++) {
//     if (names[i] === nameToRemove) {
//         names.splice(i,1);
//         i--;
//     } 
// }
// console.log(names);

names.splice(names.indexOf(nameToRemove),1)
console.log(names);


/*-----------------Whem will we be there----------------*/

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function totalTime(travelInformation) {
      const time= (travelInformation.destinationDistance/travelInformation.speed);
      const hours = Math.floor(time);
      const minutes = Math.round((time-hours)*60);
    //   console.log(time);
    //   console.log(hours);   
    //   console.log(minutes);
         console.log(`Total time taken is ${hours} hours and ${minutes} minutes`);

  }

  const travelTime = totalTime(travelInformation);
  console.log(travelTime);

/*-------------Series duration of my life---------------------------*/

const seriesDurations = [{
        title: 'Game of thrones',
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: 'Sopranos',
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: 'The Wire',
        days: 2,
        hours: 12,
        minutes: 0,
    }
]
/*function to inclide our favourite series*/

function addseries(title, days, hours, minutes) {
    let addNewSeries = {
        title,
        days,
        hours,
        minutes
    }
    seriesDurations.push(addNewSeries)
}

addseries('Avengers', 1, 3, 25)
console.log(seriesDurations)

/*calculating the time of life span*/
function avgLifeSpan(age) {

    const ageInMinutes = age * 12 * 365 * 24 * 60;
    let totalSeriesPercentage = 0;
    for (let i = 0; i < seriesDurations.length; i++) {
        const daysInMiutes = seriesDurations[i].days * 24 * 60;
        const hoursInMinutes = seriesDurations[i].hours * 60;
        const minutes = seriesDurations[i].minutes;
        const totaltimeInMinutes = daysInMiutes + hoursInMinutes + minutes;
        const percentageOfEachSeries = (totaltimeInMinutes / ageInMinutes) * 100;
        console.log(`${seriesDurations[i].title} took ${percentageOfEachSeries.toFixed(4)}% of my life`);
        totalSeriesPercentage += percentageOfEachSeries;
    }
    return (`${totalSeriesPercentage.toFixed(4)}%e of my total life`);

}
console.log(avgLifeSpan(80));


/*-----------My Favourite Songs-----------*/

const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];
/*adding song to database*/
function addSongToDatabase(song) {
    songDatabase.push(song);
}
addSongToDatabase({songId:4,title:'My fav song',artist:'xyz'});
addSongToDatabase({songId:4,title:'Melody',artist:'abc'});
console.log(songDatabase);
/*searching for song*/
function getSongByTitle(title) {
    for (let i = 0; i < songDatabase.length; i++) {
        if(songDatabase[i].title === title){
        return songDatabase[i];
        }
    }
}
//const searchedSong = getSongByTitle('When is enough too little?');
//console.log(searchedSong);
const searchedSong2 = getSongByTitle('When is enough too little?');
console.log(searchedSong2);

console.log(getSongByTitle('Melody'));
// Creating own Playlist---//
const myPlaylist = []
function addSongToMyPlaylist(title) {
    return myPlaylist.push(getSongByTitle(title));
    
}
addSongToMyPlaylist('My fav song');
console.log(myPlaylist); /*My playList details*/

/*----------Notepad-------------*/

const notes = [];
function addNote(content , id) {
  if (typeof(content === 'string'  && typeof(id === 'number'))) {
    notes.push({
      content,id
    });
    
  } else {
    'The value of the keys are not having value of the corresponding parameters'
  }
}
addNote('Note on HYF', 1);
addNote('Note on JAVASCRIPT' , 2)

function getNoteFromId(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i].content;
    }
    
  }
  return 'Given Id is not valid'
}
console.log(getNoteFromId(1));
console.log(getNoteFromId(2));
console.log(getNoteFromId(1.1));

function getNotes() {
  return notes;
}
console.log(getNotes());

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log('The notes with following Id ' + notes[i].id + ' has the following notes ' + notes[i].content); 
  }
}
logOutNotesFormatted();


