const headerWeekDay = document.getElementById("headerWeekDay");
const headerDate = document.getElementById("headerDate");
const headerMonth = document.getElementById("headerMonth");
const orderForm = document.getElementById("order_form");
const searchIcon = document.getElementById("searchIcon");
const loginBtn = document.getElementById("loginButton");
const buySubscriptionBtn = document.getElementById("buySubscriptionBtn");
const header = document.querySelector(".header");
const toggleClass = "is-sticky";
const menuIconWrapper = document.querySelector(".menuIconWrapper");
const navHideClass = "headerElHidden";
const headerNavList = document.querySelector(".headerNavList");
const footerBtn = document.querySelector(".newsLetterBtn");

let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const date = new Date();
const formatDate = new Intl.DateTimeFormat("en-US", options).formatToParts(
  date
);

const weekDay = formatDate[0].value;
const weekDate = formatDate[4].value;
const month = formatDate[2].value;

headerWeekDay.innerHTML = weekDay;

headerDate.innerHTML = weekDate;

headerMonth.innerHTML = month;

searchIcon.addEventListener("click", (e) => {
  orderForm.scrollIntoView({ behavior: "smooth" });
});

loginBtn.addEventListener("click", (e) => {
  orderForm.scrollIntoView({ behavior: "smooth" });
});

buySubscriptionBtn.addEventListener("click", (e) => {
  orderForm.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > header.offsetHeight) {
    header.classList.add(toggleClass);
    // headerNavList.add(navHideClass);
  } else {
    header.classList.remove(toggleClass);
    // headerNavList.remove(navHideClass);
  }
  if (currentScroll === 0) {
    headerNavList.classList.remove(navHideClass);
  }
});

menuIconWrapper.addEventListener("click", () => {
  headerNavList.classList.toggle(navHideClass);
});

footerBtn.addEventListener("click", () => {
  orderForm.scrollIntoView({ behavior: "smooth" });
});
