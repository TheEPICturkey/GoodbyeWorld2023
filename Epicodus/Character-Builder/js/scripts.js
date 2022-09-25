window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let raceDragonborn = document.getElementById("Dragonborn");
    raceDragonborn.setAttribute("class", "hidden");
    let raceElf = document.getElementById("Elf");
    raceElf.setAttribute("class", "hidden");
    let raceDwarf = document.getElementById("Dwarf");
    raceDwarf.setAttribute("class", "hidden");

    const Race = (document.querySelector("input#Animals").value);

    if (Race === "Dwarf") {
      raceDwarf.removeAttribute("class");
    } else if (Race === "Elf") {
      raceElf.removeAttribute("class");
    } else if (Race === "Dragonborn") {
      raceDragonborn.removeAttribute("class");
    } else {return}
  };
};