pressButton();

function pressButton() {
    let form=document.querySelector(`#myForm`);
    let questBlock=document.getElementById(`questBlock`);
    let button=document.querySelector(`#myForm button`);
    let text=document.querySelector(`[name="toDo"]`);
    let newButton;
    let p;
    let div;
    let div2;
    let buttonsArray=[];

    button.addEventListener(`click`, function(event){
        event.preventDefault();
        form.checkValidity();
        if(form.checkValidity()){
            div=document.createElement(`div`);
            p=document.createElement(`p`); 
            newButton=document.createElement(`button`);
            newButton.innerText=`Delete`;
            div2=document.createElement(`div`);
            div.className=`newQuest`;
            
            p.append(text.value);
            div2.append(p)
            div.append(div2,newButton);
            questBlock.append(div);
            newButton.className=`deleteButton`;
     

            
            //Parte che si occupa della cancellazione
            buttonsArray.push(newButton);

            buttonsArray.forEach(button=>{
                button.addEventListener(`click`,function(event){
                    event.preventDefault();
                    button.parentNode.remove();
                });
            })
            text.value=``;
            text.style.border=``;
        }else{
            alert(`Compila il campo`);
        }
    })
}
