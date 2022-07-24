function book(title, author, pages,isread){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isread=isread;
    this.index;
}
book.prototype.info=function(){
    return this.title+" by "+this.author+" is "+this.pages+" pages long";

}


let myLibary=[];





function renderpage(item){
    
    let container=document.getElementById("wrapper");
    
        let element=document.createElement("div");
        element.setAttribute("class","card");
        element.setAttribute("display","inline");

        let elementTitle=document.createElement("div");
        elementTitle.setAttribute("class","child");
        elementTitle.innerHTML=item.title;

        let elementAuthor=document.createElement("div");
        elementAuthor.setAttribute("class","child");
        elementAuthor.innerHTML=item.author;

        let elementPages=document.createElement("div");
        elementPages.setAttribute("class","child");
        elementPages.innerHTML=item.pages+" pages";

        let readStatus=document.createElement("div");
        
        if(item.isread==true){
            
            console.log("class is read")
            readStatus.setAttribute("class",'read');
            readStatus.innerHTML="Read"
        }
        else{
            console.log("class is unread")
            readStatus.setAttribute("class","notread")
            readStatus.innerHTML="Not Read"
        }
        

        let removeButton=document.createElement("button");
        removeButton.innerHTML="Remove book";
        removeButton.addEventListener("click",()=>{
            myLibary.splice(item.index,1);
            displayPage();
           
        })
        
        

       container.appendChild(element)
        element.appendChild(elementTitle);
        element.appendChild(elementAuthor);
        element.appendChild(elementPages)
        element.appendChild(readStatus)
        element.appendChild(removeButton);
    }

function displayPage(){
    let container=document.getElementById("wrapper");
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    for(let i=0; i<myLibary.length;i++){
        console.log("break")
        myLibary[i].index=i;
        renderpage(myLibary[i]);
        }
     }

let newbookbutton=document.querySelector(".addBookButton")
newbookbutton.addEventListener('click',()=>{
    document.querySelector(".popupOuter").style.display="block";
 })

    let submitbook=document.querySelector('#bookDetailSubmit')
    submitbook.addEventListener('click',()=>{
    let title=document.querySelector('#title').value;
    let author=document.querySelector('#author').value;
    let pages=document.querySelector('#pages').value;
    let isread=document.querySelector('#isread').checked;
    console.log(isread)
    
    
    myLibary.push(new book(title,author,pages,isread))
    let newBookBox=document.querySelector(".popupOuter")
    newBookBox.style.display="none";
    displayPage();
    
}
)




displayPage();