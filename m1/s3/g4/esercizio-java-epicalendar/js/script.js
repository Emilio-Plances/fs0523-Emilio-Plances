let epicalendar= document.querySelector(`#epicalendar`);
let mese=epicalendar.querySelector(`.mese`);
let backward=  epicalendar.querySelector(`.backward`);
let forward= epicalendar.querySelector(`.forward`);
let bloccoNumeri=epicalendar.querySelector(`.days`);
let saveMeetings=epicalendar.querySelector(`.meeting-button button`);
let label=epicalendar.querySelector(`.meeting-day label`);
let meetingData=epicalendar.querySelector(`.meeting-day input`);
let meetingName=epicalendar.querySelector(`.meeting-name input`);
let meetingTime=epicalendar.querySelector(`.meeting-time input`)
let meetings=[];

oggi=new Date();
meseAttuale= oggi.getMonth();
let month=nuovoMese(meseAttuale);
let days=giorni(meseAttuale);

generaGiorni(days);
controlloAppuntamenti(month);
backward.addEventListener(`click`,()=>{
    meseAttuale--;
    month=nuovoMese(meseAttuale);
    days=giorni(meseAttuale);
    generaGiorni(days);
    controlloAppuntamenti(month);
})

forward.addEventListener(`click`,()=>{
    meseAttuale++;
    month=nuovoMese(meseAttuale);
    days=giorni(meseAttuale);
    generaGiorni(days);
    controlloAppuntamenti(month);
})

saveMeetings.addEventListener(`click`,()=>{
    
    meetingEvent();

})


function meetingEvent(){
    
    let meeting={}
    let position;
    let div=document.createElement(`div`)
    
    div.classList.add(`notifica`);

    if(!meetingName.value && !meetingData.value&& !meetingTime.value){
        alert (`Riempi tutti i campi`)
        return;
    }
    position=Number(meetingData.value.slice(-2))-1;
    bloccoNumeri.children[position].append(div);
    
    meeting[`name`]=meetingName.value;
    meeting[`day`]=meetingData.value;
    meeting[`hour`]=meetingTime.value;
    
    meetingName.value=``;
    meetingData.value=``;
    meetingTime.value=``;
    meetingData.style.display=`none`;
    label.style.display=`block`
    meetings.push(meeting);
}

function nuovoMese(meseAttuale){
    let nuovoMese= new Date().setMonth(meseAttuale);
    nuovoMese=new Date(nuovoMese);
    mese.innerText=nuovoMese.toLocaleString(`it-IT`,{month:`long`})+' '+nuovoMese.getFullYear();
    return nuovoMese;
}

function giorni(meseAttuale){
    let giorniMese=new Date();
    giorniMese.setMonth(meseAttuale+1);
    giorniMese.setDate(0);
    return giorniMese.getDate();
}

function bottoniGiorni(div,i){
    div.addEventListener('click',()=>{
        let nuovaData= new Date();
        nuovaData.setMonth(meseAttuale);
        nuovaData.setDate(i);
        
        let year=nuovaData.getFullYear();
        let month=String(nuovaData.getMonth()+1).padStart(2,0);
        let day=String(nuovaData.getDate()).padStart(2,0);
        
        meetingData.value=`${year}-${month}-${day}`;
        meetingData.style.display=`block`
        label.style.display=`none`;
    
    })
}

function generaGiorni(days){
    while(bloccoNumeri.firstChild){
        bloccoNumeri.removeChild(bloccoNumeri.firstChild);
      }

    let dataAttuale=``;
    for(i=1;i<=days;i++){
        let div=document.createElement(`div`);
        div.classList.add(`day`);
        div.innerText=i;
        
        dataAttuale=bottoniGiorni(div,i);
        console.log(dataAttuale);
        
        bloccoNumeri.append(div);
    }
}

function controlloAppuntamenti(data){

    meetings.forEach(element=>{
        let control=element.day.split(`-`);
        let[yearsM,monthM,dayM]=control;
        
        if(monthM-1==data.getMonth()&&yearsM==data.getFullYear()){
            let div2=document.createElement(`div`);
            div2.classList.add(`notifica`);
            bloccoNumeri.children[dayM-1].append(div2);
        }
    })
}