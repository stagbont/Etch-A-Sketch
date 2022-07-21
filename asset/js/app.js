const settingBtn = document.getElementById("setting-btn"),
      settingContainer = document.getElementById("sett-container"),
      closeBtn = document.getElementById("close-btn");

// Validate if setting button exits
if(settingBtn) {
    // listen for a click on the setting button
    settingBtn.addEventListener('click', () => {
        // Add to the classlist of setting Container show__sett
        settingContainer.classList.add("show__sett");
    })
}

// Validate if close button exits
if(closeBtn) {
    // listen for a click on the close button
    closeBtn.addEventListener('click', () => {
        // remove from the classlist of setting Container show__sett
        settingContainer.classList.remove("show__sett");
    })
}