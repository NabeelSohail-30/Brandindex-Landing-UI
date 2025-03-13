document.querySelector(".btn-gray").addEventListener("click", () => {
  const brandList = document.querySelector(".brand-list");
  const count = brandList.children.length + 1;

  const newBrandItem = document.createElement("div");
  newBrandItem.classList.add("brand-item");
  newBrandItem.innerHTML = `
    <label class="numbering">${count}.</label>
    <select class="inpt" name="brand${count}">
      <option value="dalda">Dalda</option>
      <option value="soya-supreme">Soya Supreme</option>
      <option value="eva-canola">EVA Canola</option>
      <!-- Add more options as needed -->
    </select>
  `;
  brandList.appendChild(newBrandItem);
});

const sidenav_btn = document.getElementById("sidenav_icon");
const side_navbar = document.getElementById("side_navbar");
let show_side_nav = false;

if (sidenav_btn) {
  sidenav_btn.addEventListener("click", () => {
    if (show_side_nav) {
      side_navbar.style.left = "-200px";
      side_navbar.style.transition = "0.2s all ease";
      show_side_nav = false;
    } else {
      side_navbar.style.left = "0";
      show_side_nav = true;
    }
  });
}

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const finishBtn = document.getElementById("finish-btn");

let currentTab = 0;

function updateTabs() {
  // Update active tab
  tabs.forEach((tab, index) => {
    tab.classList.toggle("active", index === currentTab);
  });

  // Update active content
  contents.forEach((content, index) => {
    content.classList.toggle("active", index === currentTab);
  });

  // Update button states
  nextBtn.disabled = currentTab === tabs.length - 1;
  if (currentTab < tabs.length - 1) {
    nextBtn.style.display = "block";
    finishBtn.style.display = "none";
  } else if (currentTab == 4) {
    nextBtn.style.display = "none";
    finishBtn.style.display = "block";
  }
}

// Handle Next button
nextBtn.addEventListener("click", () => {
  if (currentTab < tabs.length - 1) {
    currentTab++;
    console.log(currentTab, "tab number");
    updateTabs();
  }
});

// Handle Back button
backBtn.addEventListener("click", () => {
  if (currentTab > 0) {
    currentTab--;
    updateTabs();
  } else {
    section_two.classList.remove("active");
    section_one.classList.add("active");
  }
});

// Initial setup
updateTabs();

const section_one = document.getElementById("section-one");
const section_two = document.getElementById("section-two");
const nextone = document.getElementById("next-one");

nextone.addEventListener("click", () => {
  section_one.classList.remove("active");
  section_two.classList.add("active");
});

finishBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Added",
    text: "Thank you for sharing your thoughts! Your voice matters and helps shape the brands you love. Come back soon to see how your favorite brands perform and contribute your insights for others!",
    icon: "success",
    confirmButtonText: "Okay",
    confirmButtonColor: "#4caf50",
  });
});
