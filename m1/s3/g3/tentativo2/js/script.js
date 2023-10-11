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
        let span=document.createElement(`span`);
        let newButton=document.createElement(`button`);
        newDate= new Date();
        let now=`${newDate.getFullYear()}/${newDate.getMonth()}/${newDate.getDay()} | ${newDate.getHours()}:${newDate.getMinutes()}`
        console.log(now);
        newButton.innerHTML=`<ion-icon name="logo-bitbucket"></ion-icon>`;

        //scrive dentro p il valore dell'input
        p.innerText=formInput.value;
        span.innerText=now;

        //si occupa dell'Eliminazione
        newButton.addEventListener(`click`,()=>{
            li.remove();
        })

        //Aggiunge un mousover al button
        newButton.addEventListener(`mouseover`,()=>{
            newButton.style.backgroundColor=`red`;
            newButton.style.cursor=`pointer`;
        })
        newButton.addEventListener(`mouseleave`,()=>{
            newButton.style.backgroundColor=``;
        })

        //si occupa di segnare le quest fatte
        li.addEventListener(`click`,()=>{
            if(!p.style.textDecoration){
                p.style.textDecoration=`line-through`;
                li.style.backgroundColor=`rgb(207 171 133)`;
            }else{
                p.style.textDecoration=``;
                li.style.backgroundColor=``;
            }
        })
        li.addEventListener(`mouseover`,()=>{
            li.style.cursor=`pointer`;
        })

        //assegna ai vari alementi delle classi
        li.className=`newQuest`;
        newButton.className=`deleteButton`;

        //attacca tutti gli elementi alla lista
        div.append(p,span,newButton);
        li.append(div);
        ul.append(li);

        //resetta il valore di Input
        formInput.value=``;
    })
}

