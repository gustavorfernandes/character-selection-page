const charactersList = document.querySelectorAll('.character');

charactersList.forEach((character) => {
  character.addEventListener('mouseenter', () => {
    
    const selectedId = character.attributes.id.value;
    
    if (selectedId === 'ultron') return;

    const selectedCharacter = document.querySelector('.selected');
    selectedCharacter.classList.remove('selected');
    character.classList.add('selected');

    const player1Image = document.getElementById('character-player-1');
    player1Image.src = `./src/images/${selectedId}.png`;

    const selectedName = character.getAttribute('data-name');
    const player1Name = document.getElementById('player1-name');
    player1Name.innerHTML = selectedName;
  })
})
