const xoNames = ['Bled White','Sweet Adeline', 'Tomorrow Tomorrow', 'Baby Britain', 'Pitseleh','Independence Day',  'Waltz #1'];

const ratatatNames = ['Cherry', 'Desert Eagle', 'Crips', 'Breaking Away', 'El Pico']

const setNames = function(album, songList) {
  for (let i = 0; i < album.length; i++) {
    album[i].file = songList[i];
  }
}
