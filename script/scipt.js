 //Fond
 document.getElementById('valider').addEventListener('click',function(event){
     event.preventDefault();
     document.getElementById('fond').style.visibility="visible";
     document.getElementById('fond2').style.visibility="hidden";
 })

  //aprecu et signer

  var btnApercu = document.getElementById('btnApercu');
  var btnSigner = document.getElementById('btnSigner');
  var apercuOrdo = document.getElementById('apercu-ordo');
  var btnFermer = document.getElementById('fermer');

  btnApercu.addEventListener('click',function(){
    apercuOrdo.style.visibility ="visible";
  })

  btnApercu.addEventListener('click' , function(){
      btnSigner.style.backgroundColor ="rgba(70, 70, 70, 0.8)";
      btnSigner.style.cursor ="pointer";
      btnApercu.style.backgroundColor ="rgba(70, 70, 70, 0.2)";
      btnApercu.style.cursor="default";
  })


function signerOrdo(){
    var r = confirm("voulez vous signer l'ordonnance?");
    if(r = true){
        window.location.reload();
    }
    
}  

btnFermer.addEventListener('click',function(){
    apercuOrdo.style.visibility="hidden";
})


//apercu

document.getElementById('numero-assure').addEventListener('input',function(event){
    document.getElementById('numero-assure-apercu').innerText = event.target.value ;
})

document.getElementById('nom-assure').addEventListener('input',function(event){
    document.getElementById('nom-assure-apercu').innerText = event.target.value ;
})

document.getElementById('date').addEventListener('input',function(event){
    document.getElementById('date-apercu').innerText = event.target.value ;
})

document.getElementById('nom-beneficitaire').addEventListener('input',function(event){
    document.getElementById('nom-beneficitaire-apercu').innerText = event.target.value ;
})








//source of truth 2

var medicaments = [
    
    
]

var medicamentsContainer = document.getElementById('medicaments');
var newMedicamentNameInput = document.querySelector('[name="nom-medicament"]');
var newMedicamentQuantiteInput = document.querySelector('[name="quantite-medicament"]');
var newMedicamentPrixInput = document.querySelector('[name="prix-medicament"]');
  
function handleAddMedicament(event){
    event.preventDefault();
    if(newMedicamentNameInput.value && newMedicamentQuantiteInput.value && newMedicamentPrixInput.value){
        medicaments.push({
            nom: newMedicamentNameInput.value ,
            quantite: newMedicamentQuantiteInput.value,
            prix : newMedicamentPrixInput.value,
            id : medicaments.length +1,
        });
        newMedicamentNameInput.value = "";
        newMedicamentQuantiteInput.value ="";
        newMedicamentPrixInput.value = "";
    }
    printMedicaments();
}

function printMedicaments(){
    medicamentsContainer.innerHTML ="";
    medicaments.forEach(function(medicament,index){
        medicamentsContainer.innerHTML +=`
        
        <div class="medicament">
            <span id="nom-medicament-apercu">${medicament.nom} </span>
            <span id="quantite-medicament-apercu">${medicament.quantite} </span>
            <span id="prix-medicament-apercu">${medicament.prix}DA</span>
            <span id="sous-total-medicament-apercu">${medicament.prix * medicament.quantite} DA </span>
            
        </div>`;
    })
}

function init(){
    printMedicaments()
}

init();

