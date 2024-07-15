const ADD_CLASS = "menu-studio";

const hero = document.getElementById("hero");
const portfolio = document.getElementById("portfolio");
const subscr = document.getElementById("subscr");

const listenerOne = (hero, observer) => {
  const studio = document.getElementById("studio");

  hero.forEach((element) => {
    if (element.isIntersecting) {
      studio.classList.add(ADD_CLASS);
    } else {
      studio.classList.remove(ADD_CLASS);
    }
  });
};

const observerOne = new IntersectionObserver(listenerOne);
observerOne.observe(hero);

const listenerTwo = (hero, observer) => {
  const portfolioBtn = document.getElementById("btnPortfolio");

  hero.forEach((element) => {
    if (element.isIntersecting) {
      portfolioBtn.classList.add(ADD_CLASS);
    } else {
      portfolioBtn.classList.remove(ADD_CLASS);
    }
  });
};

const observerTwo = new IntersectionObserver(listenerTwo);
observerTwo.observe(portfolio);


const listenerThree = (hero, observer) => {
  const subscrBtn = document.getElementById("btnSubscr");

  hero.forEach((element) => {
    if (element.isIntersecting) {
      subscrBtn.classList.add(ADD_CLASS);
    } else {
      subscrBtn.classList.remove(ADD_CLASS);
    }
  });
};

const observerThree = new IntersectionObserver(listenerThree);
observerThree.observe(subscr);
