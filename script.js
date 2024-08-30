
// const hello="MD TASRIK";  //string 
// const number=10;        //integer
// const login=true;       //boolean
// const friends=["Tasrik" , "Sadat" , "Safa"];  // Array

// const person = {
//     name : "tasrik",
//     age : 23,
//     job : "student",

// };  //object

// console.log(hello); //print er moto console a dekha jabe
// console.log(number);
// console.log(login);
// console.log(friends);
// console.log(person);

function handleContract(event) {

    event.preventDefault();

    // console.log("contract");
    // console.log(event);

    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.email);
    // console.log(event.target.message);

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log(name);
    console.log(email);
    console.log(message);

    const successContainer = document.getElementById("success-container");

    //console.log(document);
    console.log(successContainer);

    const nameParagraph = document.createElement("p");
    nameParagraph.innerText = `Your name : ${name}`;

    const emailParagraph = document.createElement("p");
    emailParagraph.innerText = `Your Email : ${email}`;

    const messageParagraph = document.createElement("p");
    messageParagraph.innerText = `Your Message : ${message}`;

    console.log(nameParagraph);
    console.log(emailParagraph);
    console.log(messageParagraph);

    successContainer.appendChild(nameParagraph);
    successContainer.appendChild(emailParagraph);
    successContainer.appendChild(messageParagraph);
}

const imageArray = [
    {
        url: "images/image 3.png",
    },
    {
        url: "images/image 5.png",
    },
    {
        url: "images/image 6.png",
    },
    {
        url: "images/image 7.png",
    },
    {
        url: "images/image 3.png",
    },
    {
        url: "images/image 5.png",
    }
];


function handleShowMoreProject() {
    const projectContainer = document.getElementById("projects");


    for (const item of imageArray) {
        // console.log(item);
        const projectDivImage = document.createElement("div");

        projectDivImage.classList.add("project");
        projectDivImage.innerHTML = `<img src="${item.url}" alt="">`;

        projectContainer.appendChild(projectDivImage);

    }

}



// const firstUrlObject=imageArray[0];
// const secondUrlObject=imageArray[1];
// const thirdUrlObject=imageArray[2];
// console.log(imageArray);
// console.log(firstUrlObject);
// console.log(firstUrlObject.url);
// console.log(secondUrlObject);
// console.log(thirdUrlObject);

// for (const item of imageArray) {
//     console.log(item);
// }

// for (let index = 0; index < imageArray.length; index++) {
//     const element = imageArray[index];
//     console.log(element);
// }
