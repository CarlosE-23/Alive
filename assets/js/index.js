const d = document;
const w = window;
const $header = d.getElementById("header");
const $navMobile = d.getElementById("nav-mobil");
const $navButton = d.getElementById("nav-button");
const $init = d.getElementById("init");
const $section4 = d.getElementById("section-4");
const $amenities = d.getElementById("amenities");
const $section7 = d.getElementById("section-7");
const $textEffect = d.getElementById("text-effect");

// Header
const deactivateHeader = () => {
  $header.classList.remove("active");
  $navButton.classList.remove("scroll");
};

const activateHeader = () => {
  $navButton.classList.add("scroll");
  $header.classList.add("active");
};

const headerEffect = () => {
  const scrollPosition = w.scrollY;

  if (scrollPosition > 0) activateHeader();
  else deactivateHeader();
};

window.addEventListener("scroll", () => {
  headerEffect();
});

// Nav responsive

$navButton.addEventListener("click", (e) => {
  $navButton.classList.toggle("active");

  if ($navButton.classList.contains("active"))
    $navMobile.classList.add("active");
  else $navMobile.classList.remove("active");
});

// Text Effect

async function textEffect(textList, $element) {
  while (true) {
    for (let text of textList) {
      $element.innerHTML = "";
      for (let letter of text) {
        await new Promise((resolve) => {
          setTimeout(() => {
            $element.innerHTML += letter;
            resolve();
          }, 50);
        });
      }
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}

const textList = [
  "The Best Location to Invest",
  "Situated in one of the city's prime areas—San Francisco. Close to supermarkets, banks, restaurants, cafes, shopping plazas, and more.​ Urban Panamá",
];

textEffect(textList, $textEffect);

// Intersection Observer Functions

const observerFunction = () => {
  const observerSection = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );
  const observerSection2 = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0,
    }
  );

  observerSection.observe($init);
  observerSection.observe($section4);
  observerSection2.observe($amenities);
  observerSection2.observe($section7);
};

window.addEventListener("DOMContentLoaded", () => {
  headerEffect();
  observerFunction();
});
