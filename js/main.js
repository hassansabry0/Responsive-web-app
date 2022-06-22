let comments = [
  {
    id: 0,
    name: "Mohamed Shehta",
    body: "  With supporting text below as a natural lead-in to additional content.",
    image: "images/forms.jpg",
    rate: 2,
  },
  {
    id: 1,
    name: "kareem Sabry",
    body: "  With supporting text below as a natural lead-in to additional content.",
    image: "./images/p3.jpg",
    rate: 4,
  },
  {
    id: 2,
    name: "Hassan Sabry",
    body: "  With supporting text below as a natural lead-in to additional content.",
    image: "images/team-3-800x800.jpg",
    rate: 4,
  },
  {
    id: 3,
    name: "Khaled El Khobery",
    body: "  With supporting text below as a ",
    image: "images/team-4-800x800.jpg",
    rate: 2,
  },
  {
    id: 4,
    name: "Abd El Rahman Abo Leaf",
    body: "  With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.",
    image: "images/team-6-800x800.jpg",
    rate: 5,
  },
];
window.addEventListener("load", function () {
  let navItems = this.document.querySelectorAll(".navbar-nav>a");
  navItems.forEach((anchor, index, array) => {
    anchor.addEventListener("click", function (event) {
      array.forEach((a) => {
        a.classList.remove("active");
      });
      event.target.classList.add("active");
    }); // end of click
  });
  // to load the last 3 comments
  let cardHeader = this.document.querySelector(".card-header");
  let cardBody = this.document.querySelector(".card-body");
  let cardFooter = document.querySelector(".card-footer");
  // put images in header
  for (let i = comments.length - 3; i < comments.length; i++) {
    let image = this.document.createElement("img");
    image.src = comments[i].image;
    image.classList.add("rounded", "rounded-circle");
    image.dataset.id = comments[i].id;
    cardHeader.append(image);
  } // end of put images in header

  // to load body
  cardHeader.childNodes.forEach((user) => {
    user.addEventListener("click", function (event) {
      if (cardBody.firstChild.localName === "h6") {
        cardBody.firstChild.remove();
      } // end of condition to remove rate if exist
      if (cardBody.lastChild.localName === "p") {
        cardBody.lastElementChild.remove();
      } // end of condition to remove body of comment if exist
      if (cardFooter.hasChildNodes()) {
        cardFooter.firstChild.remove();
      } // end of condition to remove name if exist
      for (let i = comments.length - 3; i < comments.length; i++) {
        if (+event.target.dataset.id === comments[i].id) {
          // add rate
          let rate = document.createElement("h6");
          rate.classList.add("card-title", "text-warning");
          for (let j = 0; j < comments[i].rate; j++) {
            let icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-star");
            rate.append(icon);
          }
          cardBody.prepend(rate);
          //add-body of comment
          let bodyComment = document.querySelector("p");
          bodyComment.classList.add("card-text", "opacity-75");
          bodyComment.innerText = comments[i].body;
          cardBody.append(bodyComment);
          // add name
          cardFooter.innerText = comments[i].name;
        }
      } // loop in json data
    }); //end of click
  }); //forEach on images
}); // end of load
