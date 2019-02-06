var bands = {
  queen: {
    name: 'queen',
    albums: 'many'
  },
  beatles: {
    name: 'beatles',
    albums: 'the most'
  },
  backstreetboys: {
    name: 'backstreetboys',
    albums: "just dropped a new one, didn't they?"
  },
  kanye: {
    name: 'kanye',
    albums: 'college dropout was the only good one'
  },
  // key: {
  //   name: 'key'
  // }
};

// for(var i = 0; i < bands.length; i++) {
//   var band = bands[i];
//   console.log("🤗", band.albums);
// }

for (var key in bands) {
  var band = bands[key];
  console.log("🤗", band.albums);
  // console.log(bands.key);
}

// var emojis = ["🤗", '😎', '💩']; 
// for (var key in emojis) {
//   console.log(key);
// }