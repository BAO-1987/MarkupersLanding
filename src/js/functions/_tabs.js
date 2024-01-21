// function initializeMultipleTabs() {
//   const tabContainers = document.querySelectorAll(".tabs");

//   tabContainers.forEach((container, index) => {
//     const tabsList = container.querySelector(".tabs__nav");
//     const tabButtons = tabsList.querySelectorAll(".tabs__link");
//     const tabPanels = container.querySelectorAll(".tabs__panels > div");

//     tabsList.setAttribute("role", "tablist");

//     tabsList.querySelectorAll(".tabs__item").forEach((listitem) => {
//       listitem.setAttribute("role", "presentation");
//     });

//     tabButtons.forEach((tab, tabIndex) => {
//       tab.setAttribute("role", "tab");
//       if (tabIndex === 0) {
//         tab.setAttribute("aria-selected", "true");
//       } else {
//         tab.setAttribute("tabindex", "-1");
//         tabPanels[tabIndex].setAttribute("hidden", "");
//       }
//     });

//     tabPanels.forEach((panel) => {
//       panel.setAttribute("role", "tabpanel");
//       panel.setAttribute("tabindex", "0");
//     });

//     container.addEventListener("click", (e) => {
//       const clickedTab = e.target.closest(".tabs__link");
//       if (!clickedTab) return;
//       e.preventDefault();
//       switchTab(clickedTab);
//     });

//     container.addEventListener("keydown", (e) => {
//       switch (e.key) {
//         case "ArrowLeft":
//           moveLeft();
//           break;
//         case "ArrowRight":
//           moveRight();
//           break;
//         case "Home":
//           e.preventDefault();
//           switchTab(tabButtons[0]);
//           break;
//         case "End":
//           e.preventDefault();
//           switchTab(tabButtons[tabButtons.length - 1]);
//           break;
//       }
//     });

//     function moveLeft() {
//       const currentTab = document.activeElement;
//       if (!currentTab.parentElement.previousElementSibling) {
//         switchTab(tabButtons[tabButtons.length - 1]);
//       } else {
//         switchTab(
//           currentTab.parentElement.previousElementSibling.querySelector(".tabs__link")
//         );
//       }
//     }

//     function moveRight() {
//       const currentTab = document.activeElement;
//       if (!currentTab.parentElement.nextElementSibling) {
//         switchTab(tabButtons[0]);
//       } else {
//         switchTab(currentTab.parentElement.nextElementSibling.querySelector(".tabs__link"));
//       }
//     }

//     function switchTab(newTab) {
//       const activePanelId = newTab.getAttribute("href");
//       const activePanel = container.querySelector(activePanelId);

//       tabButtons.forEach((button) => {
//         button.setAttribute("aria-selected", false);
//         button.setAttribute("tabindex", "-1");
//       });

//       tabPanels.forEach((panel) => {
//         panel.setAttribute("hidden", true);
//       });

//       activePanel.removeAttribute("hidden", false);

//       newTab.setAttribute("aria-selected", true);
//       newTab.setAttribute("tabindex", "0");
//       newTab.focus();
//     }
//   });
// }

// // Call the function to initialize multiple tab sets on the page
// initializeMultipleTabs();

function initializeMultipleTabs() {
  // Select all elements with the class "tabs"
  const tabContainers = document.querySelectorAll(".tabs");

  // Iterate over each tab container
  tabContainers.forEach((container, index) => {
    // Find relevant elements within the tab container
    const tabsList = container.querySelector(".tabs__nav");
    const tabButtons = tabsList.querySelectorAll(".tabs__link");
    const tabPanels = container.querySelectorAll(".tabs__panels > div");

    // Set ARIA roles and attributes for accessibility
    tabsList.setAttribute("role", "tablist");

    tabsList.querySelectorAll("li").forEach((listitem) => {
      listitem.setAttribute("role", "presentation");
    });

    // Make all tabs inactive and hide all panels initially
    tabButtons.forEach((tab, tabIndex) => {
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", "false");
      tab.setAttribute("tabindex", "-1");
      tabPanels[tabIndex].setAttribute("hidden", "");
    });

    tabPanels.forEach((panel) => {
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("tabindex", "0");
    });

    // Add event listeners for click and keydown events
    container.addEventListener("click", (e) => {
      const clickedTab = e.target.closest(".tabs__link");
      if (!clickedTab) return;
      e.preventDefault();
      switchTab(clickedTab);
    });

    container.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          moveLeft();
          break;
        case "ArrowRight":
          moveRight();
          break;
        case "Home":
          e.preventDefault();
          switchTab(tabButtons[0]);
          break;
        case "End":
          e.preventDefault();
          switchTab(tabButtons[tabButtons.length - 1]);
          break;
      }
    });

    // Function to move to the previous tab
    function moveLeft() {
      const currentTab = document.activeElement;
      if (!currentTab.parentElement.previousElementSibling) {
        switchTab(tabButtons[tabButtons.length - 1]);
      } else {
        switchTab(
          currentTab.parentElement.previousElementSibling.querySelector(".tabs__link")
        );
      }
    }

    // Function to move to the next tab
    function moveRight() {
      const currentTab = document.activeElement;
      if (!currentTab.parentElement.nextElementSibling) {
        switchTab(tabButtons[0]);
      } else {
        switchTab(currentTab.parentElement.nextElementSibling.querySelector(".tabs__link"));
      }
    }

    // Function to switch to a new tab
    function switchTab(newTab) {
      const activePanelId = newTab.getAttribute("href");
      const activePanel = container.querySelector(activePanelId);

      // Update ARIA attributes and visibility
      tabButtons.forEach((button) => {
        button.setAttribute("aria-selected", false);
        button.setAttribute("tabindex", "-1");
      });

      tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
      });

      activePanel.removeAttribute("hidden", false);

      newTab.setAttribute("aria-selected", true);
      newTab.setAttribute("tabindex", "0");
      newTab.focus();
    }
  });
}

// Call the function to initialize multiple tab sets on the page
initializeMultipleTabs();
