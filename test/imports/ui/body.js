


import '../api/Templates.js';
import './template.js';
import './card.js';

import './body.html';
import { Ateliers } from '../api/Ateliers.js';







Template.body.events({    


  //CREATION ATELIER
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

    // 'submit .remove'(event) { 
    //     event.preventDefault();
    //     console.log( "remove" );
    //     const hidden = document.querySelector("#edit-id");
    //     const idcarte =  hidden.value ;
    //     const at = Ateliers.findOne({_id:idcarte});
    //     Ateliers.remove(idcarte);
    //     // console.log( hidden );
    //     // console.log( idcarte );
    // },


    
    'click .del'(event) { 
        event.preventDefault();
        console.log( "remove" );
        const hidden = document.querySelector("#edit-id");
        const idcarte =  hidden.value ;
        const at = Ateliers.findOne({_id:idcarte});
        Ateliers.remove(idcarte);
        // console.log( hidden );
        // console.log( idcarte );
    },

    'submit .new-atelier-bis'(event) { 
        event.preventDefault();
        // console.log( "hello" );
//         //RECUPERE L OBJET QUI EST LE BUTTON MODIFIER
   const target = event.target;
//   //RECUPERE L ID DE LA CARTE AUQUEL APPARTIENT LE BTN SUR LEQUEL ON VIENT DE VLIQUER
  // const idMembre = target.getAttribute('data-id');


const hidden = document.querySelector("#edit-id");
  const idcarte =  hidden.value ;
  console.log( hidden );
  console.log( idcarte );
//   //RECUPRE L OBJET DANS LA COLLECTION AVEC L ID  DE LA CARTE QU ON VIENT DE RECUPERER
  const at = Ateliers.findOne({_id:idcarte});
  

//   VALEURS STOCKER DANS LA CARTE
//   console.log( at );
//    console.log( at.nomatelier );
//       console.log( at.descatelier );
//       console.log( at.dateatelier );
//       console.log( at.heureatelier );
//       console.log( at.dureeatelier);
//       console.log( at.dispoatelier);
//       console.log( at.reserveatelier );
//       console.log( at.prixatelier );
//       console.log( at.imageatelier );
      

// VALEUR DU FORMULAIRE BIS
    //   console.log( target );
    //   console.log( target.title.value );
    //   console.log( target.text.value );
    //   console.log( target.date.value );
    //   console.log( target.horaire.value );
    //   console.log( target.duree.value );
    //   console.log( target.dispo.value );
    //   console.log( target.reserve.value );
    //   console.log( target.prix.value );
    //   console.log( target.image.value );



   //JE PREND LA COLLECTION aTELIER et j update l element avec la identifient ici id 
        //et je change le valeur des parametre souhaiter de cet element
        Ateliers.update(idcarte, {
            $set: { 

                nomatelier:target.title.value ,
                descatelier:target.text.value ,
                dateatelier:target.date.value ,
                heureatelier:target.horaire.value ,
                dureeatelier:target.duree.value ,
                dispoatelier:target.dispo.value ,
                reserveatelier:target.reserve.value ,  
                prixatelier:target.prix.value ,
                imageatelier:target.image.value , }, 

        });
  },










  
  });



  Template.body.helpers({
    ateliers() {
      return   Ateliers.find().fetch();
    },
   
});



Template.carte.events({    
// RECUPERE INFO CARTE POUR FORMULAIRE BIS
    'click .modif': function(event) {

          //RECUPERE L OBJET QUI EST LE BUTTON MODIFIER
    const target = event.target;
    //RECUPERE L ID DE LA CARTE AUQUEL APPARTIENT LE BTN SUR LEQUEL ON VIENT DE VLIQUER
    const idMembre = target.getAttribute('data-id');
    //RECUPRE L OBJET DANS LA COLLECTION AVEC L ID  DE LA CARTE QU ON VIENT DE RECUPERER
    const at = Ateliers.findOne({_id:idMembre});


    //recupre id carte recupere hidden et lui attribue lid de la carte 
    const hidden = document.querySelector("#edit-id");
    hidden.value = idMembre;


        // console.log( target );
        // console.log( idMembre );
        // console.log( at );
        // console.log( at.nomatelier );

//RECUPERE LE CHAMP NOM DU FORMULAIRE DU MODAL //CE FORMULAIRE SE SITUE DANS BODY.HTML
const lenom = document.querySelector("#champnombis");
//RECUPERE LE CHAMP DESC
    const ladesc = document.querySelector("#champdescbis");
//RECUPERE LE CHAMP URL
    const ladate = document.querySelector("#champdatebis");
//RECUPERE LE CHAMP NOM DU FORMULAIRE DU MODAL //CE FORMULAIRE SE SITUE DANS BODY.HTML
const lheure = document.querySelector("#champheurebis");
//RECUPERE LE CHAMP DESC
    const laduree = document.querySelector("#champdureebis");
//RECUPERE LE CHAMP URL
    const nbrdispo = document.querySelector("#champdispobis");
//RECUPERE LE CHAMP NOM DU FORMULAIRE DU MODAL //CE FORMULAIRE SE SITUE DANS BODY.HTML
const nbrreserve = document.querySelector("#champreservebis");
//RECUPERE LE CHAMP DESC
    const leprix = document.querySelector("#champprixbis");
//RECUPERE LE CHAMP URL
    const limage = document.querySelector("#champimagebis");
        

    lenom.value= at.nomatelier;
    ladesc.value= at.descatelier;
    ladate.value= at.dateatelier;
    lheure.value= at.heureatelier;
    laduree.value= at.dureeatelier;
    nbrdispo.value= at.dispoatelier;
    nbrreserve.value= at.reserveatelier;
    leprix.value= at.prixatelier;
    limage.value= at.imageatelier;


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



    },


    'click .delete': function(event) {

     
        console.log( "heliop" );


        //RECUPERE L OBJET QUI EST LE BUTTON MODIFIER
  const target = event.target;
  //RECUPERE L ID DE LA CARTE AUQUEL APPARTIENT LE BTN SUR LEQUEL ON VIENT DE VLIQUER
  const idMembre = target.getAttribute('data-id');
  //RECUPRE L OBJET DANS LA COLLECTION AVEC L ID  DE LA CARTE QU ON VIENT DE RECUPERER
//   const at = Ateliers.findOne({_id:idMembre});


//   //recupre id carte recupere hidden et lui attribue lid de la carte 
  const hidden = document.querySelector("#edit-id");
  hidden.value = idMembre;


    //   console.log( target );
    //   console.log( idMembre );
    //   console.log( at );
      // console.log( at.nomatelier );

// //RECUPERE LE CHAMP NOM DU FORMULAIRE DU MODAL //CE FORMULAIRE SE SITUE DANS BODY.HTML
// const lenom = document.querySelector("#champnombis");
// //RECUPERE LE CHAMP DESC
//   const ladesc = document.querySelector("#champdescbis");
// //RECUPERE LE CHAMP URL
//   const ladate = document.querySelector("#champdatebis");
// //RECUPERE LE CHAMP NOM DU FORMULAIRE DU MODAL //CE FORMULAIRE SE SITUE DANS BODY.HTML
// const lheure = document.querySelector("#champheurebis");
// //RECUPERE LE CHAMP DESC
//   const laduree = document.querySelector("#champdureebis");
// //RECUPERE LE CHAMP URL
//   const nbrdispo = document.querySelector("#champdispobis");
// //RECUPERE LE CHAMP NOM DU FORMULAIRE DU MODAL //CE FORMULAIRE SE SITUE DANS BODY.HTML
// const nbrreserve = document.querySelector("#champreservebis");
// //RECUPERE LE CHAMP DESC
//   const leprix = document.querySelector("#champprixbis");
// //RECUPERE LE CHAMP URL
//   const limage = document.querySelector("#champimagebis");
      

//   lenom.value= at.nomatelier;
//   ladesc.value= at.descatelier;
//   ladate.value= at.dateatelier;
//   lheure.value= at.heureatelier;
//   laduree.value= at.dureeatelier;
//   nbrdispo.value= at.dispoatelier;
//   nbrreserve.value= at.reserveatelier;
//   leprix.value= at.prixatelier;
//   limage.value= at.imageatelier;


  //recupere les value du formulaire vide pour  linstant
    //   console.log( lenom.value );
      // console.log( ladesc.value );
      // console.log( ladate.value );
      // console.log( lheure.value );
      // console.log( laduree.value );
      // console.log( nbrdispo.value );
      // console.log( nbrreserve.value );
      // console.log( leprix.value );
      // console.log( limage.value );



  },
















})







