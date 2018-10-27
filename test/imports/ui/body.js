


import '../api/Templates.js';
import './template.js';

import './body.html';







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




        
        // Msgs.insert({
    
        //   nom,
    
        //   desc,
  
        //   url,
    
        //   createdAt: new Date(), // current time
    
        // });      
      
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