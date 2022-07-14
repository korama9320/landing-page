//dynamic  navigation bar

const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");
const listArr = [];
let scrol = window.scrollY;
function navv() {
  for (section of sections) {
    const heading = section.querySelector("h2").textContent;
    const listItem = document.createElement("li");
    listItem.setAttribute("id", `${section.id}1`);
    listItem.innerHTML = `<a class='menu__link' href='#${section.id}'  onclick='smooth(this)'>${heading}</a>`;
    listArr.push(listItem);
    navList.appendChild(listItem);
  }
}
navv();
window.onscroll = () => {
  for (section of sections) {
    //active class,Add an active state to your navigation items when a section is in the viewport.
    if (
      section.getBoundingClientRect().top > -130 &&
      section.getBoundingClientRect().top < 490
    ) {
      section.classList.add("your-active-class");
      document.querySelector(`#${section.id}1`).style.backgroundColor = "#ddd";
    } else {
      section.classList.remove("your-active-class");
      document.querySelector(`#${section.id}1`).style.backgroundColor = "#fff";
    }
  }
  //Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
  if (sections[0].getBoundingClientRect().top < 15) {
    document.querySelector("#top").style.display = "inline-block";
  } else {
    document.querySelector("#top").style.display = "none";
  }
  //Hide fixed navigation bar while not scrolling (it should still be present on page load)

  if (scrol < window.scrollY) {
    document.querySelector(".page__header").style.display = "none";
  } else {
    document.querySelector(".page__header").style.display = "inline-block";
  }
  scrol = window.scrollY;
};

// smooth scroll
function smooth(obj) {
  obj.addEventListener("click", (event) => {
    event.preventDefault();
    const index = listArr.indexOf(obj.parentElement);
    document
      .getElementById(`${sections[index].id}`)
      .scrollIntoView({ behavior: "smooth" });
  });
}

//Make sections collapsible.
function showSection(obj) {
  obj.previousElementSibling.style.display = "inline-block";
  obj.style.display = "none";
}
function hideSection(obj) {
  obj.parentElement.style.display = "none";
  obj.parentElement.parentElement.parentElement.style.minHeight = "20vh";

  obj.parentElement.nextElementSibling.style.display = "inline";
}
