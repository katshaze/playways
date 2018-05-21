const xoNames = ['Sweet Adeline', 'Tomorrow Tomorrow', 'Baby Britain', 'Pitseleh', 'Independence Day', 'Bled White', 'Waltz #1'];

const ratatatNames = ['El Pico', 'Crips', 'Desert Eagle', 'Breaking Away', 'Cherry']

const setNames = function(album, songList) {
  for (let i = 0; i < album.length; i++) {
    album[i].file = songList[i];
  }
}
