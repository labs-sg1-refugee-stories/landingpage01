const header = document.querySelector("header");
const topDiv = header.querySelector(".top");
const bottomDiv = header.querySelector(".bottom");
const mobileDiv = header.querySelector(".mobile")
//console.log(topDiv, bottomDiv, mobileDiv)

class Header    {
    constructor(header) {
        this.header = header;
        this.anchor = document.createElement("a");
        this.anchor.textContent = "Refugee Stories"
        this.container = header.querySelector(".container")
        this.container.appendChild(this.anchor)
        this.searchBoxDiv = document.createElement("div");
        
        this.createUl(topDiv)
        this.createForm(topDiv)
        
    }

    createForm(formContainer)    {
        this.formContainer = formContainer;
        this.form = document.createElement("form")
        this.formInput = document.createElement("input")
        this.formInput.setAttribute("type", "text");
        this.submitButton = document.createElement("button");
        this.submitButton.textContent = "Search"
        this.submitButton.setAttribute("type", "submit");
        this.form.appendChild(this.formInput);
        this.form.appendChild(this.submitButton);
        formContainer.appendChild(this.form);
    }

    createUl(ulContainer)  {
        this.ulContainer = ulContainer;
        this.ul = document.createElement("ul");
        this.li1 = document.createElement("li")
        this.li2 = document.createElement("li")
        this.li3 = document.createElement("li")
        this.li4 = document.createElement("li")
        this.ul.append(this.li1)
        this.ul.append(this.li2)
        this.ul.append(this.li3)
        this.ul.append(this.li4)
        this.ul.append(this.li)
        ulContainer.appendChild(this.ul)
    }

    createLi(value)     {
        for (let i = 0; i < value.length; i++) {
          const li =  document.createElement("li"); 
          console.log(li)
           //return document.createElement("li");   
        }
    }
}

new Header(header)

