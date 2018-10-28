


import '../api/Templates.js';
import './template.js';
import './card.js';

import './body.html';
import { Ateliers } from '../api/Ateliers.js';







Template.body.events({    


  
//   Recupere le submit du formulaire
    'submit .new-atelier'(event) {      // Prevent default browser form submit
// empeche la page de s actualiser
event.preventDefault();      // Get value from form element
    //recupere la target qui est l objet avec la classe new-atelier
const target = event.target;
    
      
//recupere les informations dans les champ du formulaire modal
const nomatelier = target.champnom.value;
const descatelier = target.champdesc.value;      
const dateatelier = target.champdate.value;
const heureatelier = target.champheure.value;
const dureeatelier = target.champduree.value;     
const dispoatelier = target.champdispo.value;
const reserveatelier = target.champreserve.value;
const prixatelier = target.champprix.value;      
const imageatelier = target.champimage.value; 
       

//ecrit les valeur des champ du modal dans la console
console.log(nomatelier);
console.log(descatelier);
console.log(dateatelier);
console.log(heureatelier);
console.log(dureeatelier);
console.log(dispoatelier);
console.log(reserveatelier);
console.log(prixatelier);
console.log(imageatelier);




        
        Ateliers.insert({
    
            nomatelier,
            descatelier,
            dateatelier,
            heureatelier,
            dureeatelier,
            dispoatelier,
            reserveatelier,  
            prixatelier,
            imageatelier,  
            createdAt: new Date(), // current time
    
        });      
      
      // Clear form
    
        
     //RESET LES VALEUR DANS LE CHAMP DU MODAL
target.champnom.value = '';
target.champdesc.value = '';      
target.champdate.value = '';
target.champheure.value = '';
target.champduree.value = '';     
target.champdispo.value = '';
target.champreserve.value = '';
target.champprix.value = '';      
target.champimage.value = ''; 
    
    }, 
  
  });



  Template.body.helpers({
    ateliers() {
      return   Ateliers.find().fetch();
    },
   
});



Template.carte.events({    

    'click .modif': function(event) {

          //RECUPERE L OBJET QUI EST LE BUTTON MODIFIER
    const target = event.target;
    //RECUPERE L ID DE LA CARTE AUQUEL APPARTIENT LE BTN SUR LEQUEL ON VIENT DE VLIQUER
    const idMembre = target.getAttribute('data-id');
    //RECUPRE L OBJET DANS LA COLLECTION AVEC L ID  DE LA CARTE QU ON VIENT DE RECUPERER
    const at = Ateliers.findOne({_id:idMembre});


        // console.log( target );
        // console.log( idMembre );
        // console.log( at );
        // console.log( at.nomatelier );

//RECUPERE LE CHAMP NOM DU FORMULAIRE DU MODAL //CE FORMULAIRE SE SITUE DANS BODY.HTML
const lenom = document.querySelector("#champnom");
//RECUPERE LE CHAMP DESC
    const ladesc = document.querySelector("#champdesc");
//RECUPERE LE CHAMP URL
    const ladate = document.querySelector("#champdate");
//RECUPERE LE CHAMP NOM DU FORMULAIRE DU MODAL //CE FORMULAIRE SE SITUE DANS BODY.HTML
const lheure = document.querySelector("#champheure");
//RECUPERE LE CHAMP DESC
    const laduree = document.querySelector("#champduree");
//RECUPERE LE CHAMP URL
    const nbrdispo = document.querySelector("#champdispo");
//RECUPERE LE CHAMP NOM DU FORMULAIRE DU MODAL //CE FORMULAIRE SE SITUE DANS BODY.HTML
const nbrreserve = document.querySelector("#champreserve");
//RECUPERE LE CHAMP DESC
    const leprix = document.querySelector("#champprix");
//RECUPERE LE CHAMP URL
    const limage = document.querySelector("#champimage");
        

    lenom.value= at.nomatelier;

    //recupere les value du formulaire vide pour  linstant
        console.log( lenom.value );
        // console.log( ladesc.value );
        // console.log( ladate.value );
        // console.log( lheure.value );
        // console.log( laduree.value );
        // console.log( nbrdispo.value );
        // console.log( nbrreserve.value );
        // console.log( leprix.value );
        // console.log( limage.value );



    }
})







