const myImage = document.querySelector("img");
myImage.onclick = () => 
{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "imagens/forex.jpg")
    { myImage.setAttribute("src", "imagens/dollar.jpg");
} else {
    myImage.setAttribute("src", "imagens/forex.jpg")
}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = () => 
{
    setUserName();
}

function setUserName ()
{
    const myName = prompt("Por favor, digite seu nome.");
    if (!myName) 
    {
        setUserName();
    }
    else 
    {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Forex é legal, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {setUserName();} 

else {const storedName = localStorage.getItem("name");
    myHeading.textContent = `Forex é legal, ${storedName}`;}

