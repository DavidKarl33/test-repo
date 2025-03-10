    const listItems = document.querySelectorAll('.selectHero li');
    const showHeroImage = document.querySelector('.showHero img');
    const showHeroName = document.querySelector('.showHero h2');

    const characters ={
        "don": "Don",
        "gregor": "Gregor",
        "sincalir": "Sinclair",
        "mersault": "Mersault",
        "outis": "Outis",
        "faust": "Faust",
        "heath": "Heath",
        "ishmael": "Ishmael",
        "yisang": "Yisang"
    };

    listItems.forEach((li, index) => {
        li.addEventListener('click', () => {

            listItems.forEach(item => item.classList.remove('selected'));
            
            li.classList.add('selected');
    
            const imgName = li.querySelector('img').src.split('/').pop().split('.')[0];
            
            showHeroImage.src = `showCharacter/${imgName}.gif`;
           
            showHeroName.textContent = characters[imgName] ;
        
        });
    });
