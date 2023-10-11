pressButton();

function pressButton() {
    let form=document.querySelector(`#myForm`)
    let questList=document.querySelector(`#questList`);
    let formInput=document.querySelector(`.formInput`)
    let formButton=document.querySelector(`.formButton`);
    let ul=document.querySelector(`#questList`);
    
    formButton.addEventListener(`click`,(event)=>{
        event.preventDefault();

        //controlla la validità del form
        form.checkValidity();
        if(!form.checkValidity()){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hai dimenticato il testo'
              })
            return;
        }   

        //genera tutti gli elementi dell'HTML che servono
        let li=document.createElement(`li`);
        let div=document.createElement(`div`);
        let p=document.createElement(`p`);
        let newButton=document.createElement(`button`);
        newButton.innerText=`Delete`;

        //scrive dentro p il valore dell'input
        p.innerText=formInput.value;
        
        //si occupa dell'Eliminazione
        newButton.addEventListener(`click`,()=>{
            li.remove();
        })

        //si occupa di segnare le quest fatte
        li.addEventListener(`click`,()=>{
            if(!p.style.textDecoration)
                p.style.textDecoration=`line-through`;
            else
                p.style.textDecoration=``
        })

        //assegna ai vari alementi delle classi
        li.className=`newQuest`;
        newButton.className=`deleteButton`;

        //attacca tutti gli elementi alla lista
        div.append(p,newButton);
        li.append(div);
        ul.append(li);

        //resetta il valore di Input
        formInput.value=``;
    })
}

