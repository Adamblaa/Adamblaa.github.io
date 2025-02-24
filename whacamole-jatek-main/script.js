let pont =0;






let dobozok = document.querySelectorAll('.negyzet');
function pontok(e)
 {
    if(e.target.classList.contains('cel')){
        pont+=1;
        e.target.classList.toggle('cel');
        let célpont = ujdoboz(dobozok);

        let bb =pont;
        célpont.classList.toggle('cel');
        
        

        document.getElementById("pont").innerHTML = bb;

        }
}


 
function ujdoboz(dobozok){
    return dobozok[Math.floor(Math.random()*16)];

}


function main(){


    for (const doboz of dobozok) {
        doboz.addEventListener('click',pontok);
    }
    let célpont = ujdoboz(dobozok);
    célpont.classList.toggle('cel');
 
}




main()