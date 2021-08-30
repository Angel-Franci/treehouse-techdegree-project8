const box = document.querySelector('.box');
const cardwrap = document.querySelector('.cardwrap');
const x = document.querySelector('.x');
const tint = document.querySelector('.tint');

for(i = 1; i < 13; i++ ) {
    var ooo = document.createElement('div');
    ooo.classList.add("image" + [i], "image");
    box.appendChild(ooo);
    console.log(i)
 }

const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');
const image4 = document.querySelector('.image4');
const image5 = document.querySelector('.image5');
const image6 = document.querySelector('.image6');
const image7 = document.querySelector('.image7');
const image8 = document.querySelector('.image8');
const image9 = document.querySelector('.image9');
const image10 = document.querySelector('.image10');
const image11 = document.querySelector('.image11');
const image12 = document.querySelector('.image12');

const data = fetch('https://randomuser.me/api/?results=50') .then(response => response.json());

data
.then(resul => {
    image1.innerHTML = `<img src=${resul.results[0].picture.medium} alt=user,face> <h5>${resul.results[0].name.first} ${resul.results[0].name.last}</h5> <h5>${resul.results[0].email}</h5> <h5>${resul.results[0].location.city}</h5>`;
    image2.innerHTML = `<img src=${resul.results[15].picture.medium} alt=user,face> <h5>${resul.results[15].name.first} ${resul.results[15].name.last}</h5> <h5>${resul.results[15].email}</h5> <h5>${resul.results[15].location.city}</h5>`;
    image3.innerHTML = `<img src=${resul.results[23].picture.medium} alt=user,face> <h5>${resul.results[23].name.first} ${resul.results[23].name.last}</h5> <h5>${resul.results[23].email}</h5> <h5>${resul.results[23].location.city}</h5>`;
    image4.innerHTML = `<img src=${resul.results[32].picture.medium} alt=user,face> <h5>${resul.results[32].name.first} ${resul.results[32].name.last}</h5> <h5>${resul.results[32].email}</h5> <h5>${resul.results[32].location.city}</h5>`;
    image5.innerHTML = `<img src=${resul.results[46].picture.medium} alt=user,face> <h5>${resul.results[46].name.first} ${resul.results[46].name.last}</h5> <h5>${resul.results[46].email}</h5> <h5>${resul.results[46].location.city}</h5>`;
    image6.innerHTML = `<img src=${resul.results[5].picture.medium} alt=user,face> <h5>${resul.results[5].name.first} ${resul.results[5].name.last}</h5> <h5>${resul.results[5].email}</h5> <h5>${resul.results[5].location.city}</h5>`;
    image7.innerHTML = `<img src=${resul.results[16].picture.medium} alt=user,face> <h5>${resul.results[16].name.first} ${resul.results[16].name.last}</h5> <h5>${resul.results[16].email}</h5> <h5>${resul.results[16].location.city}</h5>`;
    image8.innerHTML = `<img src=${resul.results[37].picture.medium} alt=user,face> <h5>${resul.results[37].name.first} ${resul.results[37].name.last}</h5> <h5>${resul.results[37].email}</h5> <h5>${resul.results[37].location.city}</h5>`;
    image9.innerHTML = `<img src=${resul.results[8].picture.medium} alt=user,face> <h5>${resul.results[8].name.first} ${resul.results[8].name.last}</h5> <h5>${resul.results[8].email}</h5> <h5>${resul.results[8].location.city}</h5>`;
    image10.innerHTML = `<img src=${resul.results[49].picture.medium} alt=user,face> <h5>${resul.results[49].name.first} ${resul.results[49].name.last}</h5> <h5>${resul.results[49].email}</h5> <h5>${resul.results[49].location.city}</h5>`;
    image11.innerHTML = `<img src=${resul.results[18].picture.medium} alt=user,face> <h5>${resul.results[18].name.first} ${resul.results[18].name.last}</h5> <h5>${resul.results[18].email}</h5> <h5>${resul.results[18].location.city}</h5>`;
    image12.innerHTML = `<img src=${resul.results[11].picture.medium} alt=user,face> <h5>${resul.results[11].name.first} ${resul.results[11].name.last}</h5> <h5>${resul.results[11].email}</h5> <h5>${resul.results[11].location.city}</h5>`;
});

let counter1 = 1;
let counter2 = 1;
let counter3 = 1;
let counter4 = 1;
let counter5 = 1;
let counter6 = 1;
let counter7 = 1;
let counter8 = 1;
let counter9 = 1;
let counter10 = 1;
let counter11 = 1;
let counter12 = 1;
image1.onclick = function() {
       cardwrap.style.display = 'block';
       tint.style.display = 'block';
       if (counter1 < 2) {
              counter1++;
              var card = document.createElement('div');
               card.classList.add("card1", "card");
              cardwrap.appendChild(card);
              data
              .then(cards => {
                     card.innerHTML = `<img src=${cards.results[0].picture.large} alt=user,face> <h5>${cards.results[0].name.first} ${cards.results[0].name.last}</h5> <h5>${cards.results[0].email}</h5> <h5>${cards.results[0].location.city}</h5> <div class='line'></div> <h5>${cards.results[0].cell}</h5> <h5>${cards.results[0].location.street.number} ${cards.results[0].location.street.name} ${cards.results[0].location.city} ${cards.results[0].location.state} ${cards.results[0].location.postcode}</h5> <h5>Birthday: ${cards.results[0].dob.date.slice(0, 10)}</h5>`;
               });
        }
        if (counter1 === 2) {
              document.querySelector('.card1').style.display = 'block';
        }
        x.onclick = function() {
              document.querySelector('.card1').style.display = 'none';
              cardwrap.style.display = 'none';
              tint.style.display = 'none';
       };
};

image2.onclick = function() {
       cardwrap.style.display = 'block';
       tint.style.display = 'block';
       if (counter2 < 2) {
              counter2++;
              var card = document.createElement('div');
              card.classList.add("card2", "card");
              cardwrap.appendChild(card);
              data
              .then(cards => {
                     card.innerHTML = `<img src=${cards.results[15].picture.large} alt=user,face> <h5>${cards.results[15].name.first} ${cards.results[15].name.last}</h5> <h5>${cards.results[15].email}</h5> <h5>${cards.results[15].location.city}</h5> <div class='line'></div> <h5>${cards.results[15].cell}</h5> <h5>${cards.results[15].location.street.number} ${cards.results[15].location.street.name} ${cards.results[15].location.city} ${cards.results[15].location.state} ${cards.results[15].location.postcode}</h5> <h5>Birthday: ${cards.results[15].dob.date.slice(0, 10)}</h5>`;
       });
       }
       if (counter2 === 2) {
              document.querySelector('.card2').style.display = 'block';
        }
        x.onclick = function() {
              document.querySelector('.card2').style.display = 'none';
              cardwrap.style.display = 'none';
              tint.style.display = 'none';
       };
};

image3.onclick = function() {
       cardwrap.style.display = 'block';
       tint.style.display = 'block';
       if (counter3 < 2) {
              counter3++;
       var card = document.createElement('div');
       card.classList.add("card3", "card");
       cardwrap.appendChild(card);
       data
       .then(cards => {
card.innerHTML = `<img src=${cards.results[23].picture.large} alt=user,face> <h5>${cards.results[23].name.first} ${cards.results[23].name.last}</h5> <h5>${cards.results[23].email}</h5> <h5>${cards.results[23].location.city}</h5> <div class='line'></div> <h5>${cards.results[23].cell}</h5> <h5>${cards.results[23].location.street.number} ${cards.results[23].location.street.name} ${cards.results[23].location.city} ${cards.results[23].location.state} ${cards.results[23].location.postcode}</h5> <h5>Birthday: ${cards.results[23].dob.date.slice(0, 10)}</h5>`;
       });
}
if (counter3 === 2) {
       document.querySelector('.card3').style.display = 'block';
 }
 x.onclick = function() {
       document.querySelector('.card3').style.display = 'none';
       cardwrap.style.display = 'none';
       tint.style.display = 'none';
};
};

image4.onclick = function() {
       cardwrap.style.display = 'block';
       tint.style.display = 'block';
       if (counter4 < 2) {
              counter4++;
       var card = document.createElement('div');
       card.classList.add("card4", "card");
       cardwrap.appendChild(card);
       data
       .then(cards => {
card.innerHTML = `<img src=${cards.results[32].picture.large} alt=user,face> <h5>${cards.results[32].name.first} ${cards.results[32].name.last}</h5> <h5>${cards.results[32].email}</h5> <h5>${cards.results[32].location.city}</h5> <div class='line'></div> <h5>${cards.results[32].cell}</h5> <h5>${cards.results[32].location.street.number} ${cards.results[32].location.street.name} ${cards.results[32].location.city} ${cards.results[32].location.state} ${cards.results[32].location.postcode}</h5> <h5>Birthday: ${cards.results[32].dob.date.slice(0, 10)}</h5>`;
       });
}
if (counter2 === 2) {
       document.querySelector('.card4').style.display = 'block';
 }
 x.onclick = function() {
       document.querySelector('.card4').style.display = 'none';
       cardwrap.style.display = 'none';
       tint.style.display = 'none';
};
};

image5.onclick = function() {
       cardwrap.style.display = 'block';
       tint.style.display = 'block';
       if (counter5 < 2) {
              counter5++;
       var card = document.createElement('div');
       card.classList.add("card5", "card");
       cardwrap.appendChild(card);
       data
       .then(cards => {
card.innerHTML = `<img src=${cards.results[46].picture.large} alt=user,face> <h5>${cards.results[46].name.first} ${cards.results[46].name.last}</h5> <h5>${cards.results[46].email}</h5> <h5>${cards.results[46].location.city}</h5> <div class='line'></div> <h5>${cards.results[46].cell}</h5> <h5>${cards.results[46].location.street.number} ${cards.results[46].location.street.name} ${cards.results[46].location.city} ${cards.results[46].location.state} ${cards.results[46].location.postcode}</h5> <h5>Birthday: ${cards.results[46].dob.date.slice(0, 10)}</h5>`;
       });
}
if (counter2 === 2) {
       document.querySelector('.card5').style.display = 'block';
 }
 x.onclick = function() {
       document.querySelector('.card5').style.display = 'none';
       cardwrap.style.display = 'none';
       tint.style.display = 'none';
};
};

image6.onclick = function() {
       cardwrap.style.display = 'block';
       tint.style.display = 'block';
       if (counter6 < 2) {
              counter6++;
       var card = document.createElement('div');
       card.classList.add("card6", "card");
       cardwrap.appendChild(card);
       data
       .then(cards => {
card.innerHTML = `<img src=${cards.results[5].picture.large} alt=user,face> <h5>${cards.results[5].name.first} ${cards.results[5].name.last}</h5> <h5>${cards.results[5].email}</h5> <h5>${cards.results[5].location.city}</h5> <div class='line'></div> <h5>${cards.results[5].cell}</h5> <h5>${cards.results[5].location.street.number} ${cards.results[5].location.street.name} ${cards.results[5].location.city} ${cards.results[5].location.state} ${cards.results[5].location.postcode}</h5> <h5>Birthday: ${cards.results[5].dob.date.slice(0, 10)}</h5>`;
       });
}
if (counter2 === 2) {
       document.querySelector('.card6').style.display = 'block';
 }
 x.onclick = function() {
       document.querySelector('.card6').style.display = 'none';
       cardwrap.style.display = 'none';
       tint.style.display = 'none';
};
};

image7.onclick = function() {
       cardwrap.style.display = 'block';
       tint.style.display = 'block';
       if (counter7 < 2) {
              counter7++;
       var card = document.createElement('div');
       card.classList.add("card7", "card");
       cardwrap.appendChild(card);
       data
       .then(cards => {
card.innerHTML = `<img src=${cards.results[16].picture.large} alt=user,face> <h5>${cards.results[16].name.first} ${cards.results[16].name.last}</h5> <h5>${cards.results[16].email}</h5> <h5>${cards.results[16].location.city}</h5> <div class='line'></div> <h5>${cards.results[16].cell}</h5> <h5>${cards.results[16].location.street.number} ${cards.results[16].location.street.name} ${cards.results[16].location.city} ${cards.results[16].location.state} ${cards.results[16].location.postcode}</h5> <h5>Birthday: ${cards.results[16].dob.date.slice(0, 10)}</h5>`;
       });
}
if (counter2 === 2) {
       document.querySelector('.card7').style.display = 'block';
 }
 x.onclick = function() {
       document.querySelector('.card7').style.display = 'none';
       cardwrap.style.display = 'none';
       tint.style.display = 'none';
};
};

image8.onclick = function() {
       cardwrap.style.display = 'block';
       tint.style.display = 'block';
       if (counter8 < 2) {
              counter8++;
       var card = document.createElement('div');
       card.classList.add("card8", "card");
       cardwrap.appendChild(card);
       data
       .then(cards => {
card.innerHTML = `<img src=${cards.results[37].picture.large} alt=user,face> <h5>${cards.results[37].name.first} ${cards.results[37].name.last}</h5> <h5>${cards.results[37].email}</h5> <h5>${cards.results[37].location.city}</h5> <div class='line'></div> <h5>${cards.results[37].cell}</h5> <h5>${cards.results[37].location.street.number} ${cards.results[37].location.street.name} ${cards.results[37].location.city} ${cards.results[37].location.state} ${cards.results[37].location.postcode}</h5> <h5>Birthday: ${cards.results[37].dob.date.slice(0, 10)}</h5>`;
       });
}
if (counter2 === 2) {
       document.querySelector('.card8').style.display = 'block';
 }
 x.onclick = function() {
       document.querySelector('.card8').style.display = 'none';
       cardwrap.style.display = 'none';
       tint.style.display = 'none';
};
};

image9.onclick = function() {
       cardwrap.style.display = 'block';
       tint.style.display = 'block';
       if (counter9 < 2) {
              counter9++;
       var card = document.createElement('div');
       card.classList.add("card9", "card");
       cardwrap.appendChild(card);
       data
       .then(cards => {
card.innerHTML = `<img src=${cards.results[8].picture.large} alt=user,face> <h5>${cards.results[8].name.first} ${cards.results[8].name.last}</h5> <h5>${cards.results[8].email}</h5> <h5>${cards.results[8].location.city}</h5> <div class='line'></div> <h5>${cards.results[8].cell}</h5> <h5>${cards.results[8].location.street.number} ${cards.results[8].location.street.name} ${cards.results[8].location.city} ${cards.results[8].location.state} ${cards.results[8].location.postcode}</h5> <h5>Birthday: ${cards.results[8].dob.date.slice(0, 10)}</h5>`;
       });
}
if (counter2 === 2) {
       document.querySelector('.card9').style.display = 'block';
 }
 x.onclick = function() {
       document.querySelector('.card9').style.display = 'none';
       cardwrap.style.display = 'none';
       tint.style.display = 'none';
};
};

image10.onclick = function() {
       cardwrap.style.display = 'block';
       tint.style.display = 'block';
       if (counter10 < 2) {
              counter10++;
       var card = document.createElement('div');
       card.classList.add("card10", "card");
       cardwrap.appendChild(card);
       data
       .then(cards => {
card.innerHTML = `<img src=${cards.results[49].picture.large} alt=user,face> <h5>${cards.results[49].name.first} ${cards.results[49].name.last}</h5> <h5>${cards.results[49].email}</h5> <h5>${cards.results[49].location.city}</h5> <div class='line'></div> <h5>${cards.results[49].cell}</h5> <h5>${cards.results[49].location.street.number} ${cards.results[49].location.street.name} ${cards.results[49].location.city} ${cards.results[49].location.state} ${cards.results[49].location.postcode}</h5> <h5>Birthday: ${cards.results[49].dob.date.slice(0, 10)}</h5>`;
       });
}
if (counter2 === 2) {
       document.querySelector('.card10').style.display = 'block';
 }
 x.onclick = function() {
       document.querySelector('.card10').style.display = 'none';
       cardwrap.style.display = 'none';
       tint.style.display = 'none';
};
};

image11.onclick = function() {
       cardwrap.style.display = 'block';
       tint.style.display = 'block';
       if (counter11 < 2) {
              counter11++;
       var card = document.createElement('div');
       card.classList.add("card11", "card");
       cardwrap.appendChild(card);
       data
       .then(cards => {
card.innerHTML = `<img src=${cards.results[18].picture.large} alt=user,face> <h5>${cards.results[18].name.first} ${cards.results[18].name.last}</h5> <h5>${cards.results[18].email}</h5> <h5>${cards.results[18].location.city}</h5> <div class='line'></div> <h5>${cards.results[18].cell}</h5> <h5>${cards.results[18].location.street.number} ${cards.results[18].location.street.name} ${cards.results[18].location.city} ${cards.results[18].location.state} ${cards.results[18].location.postcode}</h5> <h5>Birthday: ${cards.results[18].dob.date.slice(0, 10)}</h5>`;
       });
}
if (counter2 === 2) {
       document.querySelector('.card11').style.display = 'block';
 }
 x.onclick = function() {
       document.querySelector('.card11').style.display = 'none';
       cardwrap.style.display = 'none';
       tint.style.display = 'none';
};
};

image12.onclick = function() {
       cardwrap.style.display = 'block';
       tint.style.display = 'block';
       if (counter12 < 2) {
              counter12++;
       var card = document.createElement('div');
       card.classList.add("card12", "card");
       cardwrap.appendChild(card);
       data
       .then(cards => {
card.innerHTML = `<img src=${cards.results[11].picture.large} alt=user,face> <h5>${cards.results[11].name.first} ${cards.results[11].name.last}</h5> <h5>${cards.results[11].email}</h5> <h5>${cards.results[11].location.city}</h5> <div class='line'></div> <h5>${cards.results[11].cell}</h5> <h5>${cards.results[11].location.street.number} ${cards.results[11].location.street.name} ${cards.results[11].location.city} ${cards.results[11].location.state} ${cards.results[11].location.postcode}</h5> <h5>Birthday: ${cards.results[11].dob.date.slice(0, 10)}</h5>`;
       });
}
if (counter2 === 2) {
       document.querySelector('.card12').style.display = 'block';
 }
 x.onclick = function() {
       document.querySelector('.card12').style.display = 'none';
       cardwrap.style.display = 'none';
       tint.style.display = 'none';
};
};

