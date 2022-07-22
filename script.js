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

function addBook(title,author,pages,isread){
    myLibary.push(new book(title,author,pages,isread))
}

function renderpage(){
    for(i=0;i<myLibary.length;i++){
        myLibary[i].index=i;
        let element=document.createElement("div");
        element.setAttribute("class","card");
        element.setAttribute("display","inline");

        let elementTitle=document.createElement("div");
        elementTitle.setAttribute("class","child");
        elementTitle.innerHTML=myLibary[i].title;

        let elementAuthor=document.createElement("div");
        elementAuthor.setAttribute("class","child");
        elementAuthor.innerHTML=myLibary[i].author;

        let elementPages=document.createElement("div");
        elementPages.setAttribute("class","child");
        elementPages.innerHTML=myLibary[i].pages+" pages";

        let readStatus=document.createElement("input");
        readStatus.setAttribute("class","child");
        readStatus.setAttribute("type","checkbox")
        readStatus.checked=myLibary[i].isread;

        let removeButton=document.createElement("button");
        removeButton.innerHTML="Remove book";
        removeButton.addEventListener("click",function(i){
            let j=i
            
            myLibary.slice(1,1);
            
            
        })
        
        

        let =document.getElementById("wrapper").appendChild(element)
        element.appendChild(elementTitle);
        element.appendChild(elementAuthor);
        element.appendChild(elementPages)
        element.appendChild(readStatus)
        element.appendChild(removeButton);
    }
}
addBook("harry potter", "Jk rowling", "367", true);
addBook("harry potter", "Jk rowling", "367", true);

