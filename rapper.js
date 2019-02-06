function inspire() {
  console.log("🤗");
}

var tupac = {
  aliveDead: {
    alive: 'maybe',
    dead: {
      naturalCauses: ['heart attack', {

      }]
    }
  },
  name: 'tupac',
  girlfriends: ['quincy jones\' daughter', 'someone'],
  songs: 100,
  createNewSong: function() {
    console.log("createNewSong");
    // tupac.songs++;
    this.songs++;
  },
  freestyle: function(lyric) {
    if (lyric) {
      return "😎";
    }
    return '💩';
  },
  inspire: inspire
};

tupac.createNewSong();
tupac.freestyle();
console.log(tupac.freestyle());
console.log(tupac.freestyle("lyric"));
console.log(tupac.girlfriends.join('|'));
console.log(tupac.aliveDead.dead.naturalCauses[0].split(""));