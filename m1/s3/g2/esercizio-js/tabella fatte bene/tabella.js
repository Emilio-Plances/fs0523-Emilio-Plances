
generateTable();

function generateTable (){
    const voiceThead=[`immagine`,`Nome Prodotto`,`Quantità`,`Prezzo`,];
    let tableArea=document.getElementById(`tableArea`)
    let table=document.createElement(`table`);
    let thead=document.createElement(`thead`);
    let tr=document.createElement(`tr`);
    let td;
    let tbody=document.createElement(`tbody`);

    voiceThead.forEach(element=>{
        td=document.createElement(`td`)
        td.innerText=element;
        tr.append(td);
    })
    thead.append(tr);
    

    const items=[
        {
            immagine: `https://picsum.photos/200/300?random=1`,
            nomeProdotto: `bottiglia`,
            quantità: `10`,
            prezzo: `2$`
        },
        {
            immagine: `https://picsum.photos/200/300?random=2`,
            nomeProdotto: `penna`,
            quantità: `3`,
            prezzo: `0.5$`
        },
        {
            immagine: `https://picsum.photos/200/300?random=3`,
            nomeProdotto: `tazza`,
            quantità: `1`,
            prezzo: `10$`
        },
        {
            immagine: `https://picsum.photos/200/300?random=4`,
            nomeProdotto: `foglio`,
            quantità: `20`,
            prezzo: `10$`
        },
    ]

    items.forEach(element=>{
        tr=document.createElement(`tr`);
        td=document.createElement(`td`);
        
        img=document.createElement(`img`);
        img.src=element.immagine;
        td.append(img);
        tr.append(td);
        
        for(let prop in element){
            if(prop!=`immagine`){
                td=document.createElement(`td`)
                td.innerText=element[prop];
                tr.append(td);
            }
        }
        tbody.append(tr);
    })
    
    table.append(thead,tbody);
    tableArea.append(table);
}

function addRow(){
    
}