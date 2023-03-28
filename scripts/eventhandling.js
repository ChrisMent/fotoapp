//! Aktive Kategorie markieren


// Die Variable "icons" speichert das Element mit der ID "menu-icons". 
let icons = document.getElementById("menu-icons");

// In der Variable "icon" speichern wir alle Elemente, die die Klasse "menu-icon-text" haben.
let icon = icons.getElementsByClassName("menu-icon-text");

// Mit einer For-Schleife iterieren wir über die Elemente in der Variable "icon".
for (let i = 0; i < icon.length; i++) {

    // Wir fügen jedem Element in der Variable "icon" einen Event-Listener hinzu, der eine Funktion aufruft, sobald das Element angeklickt wird.
    icon[i].addEventListener("click", function () {

        // In der Funktion, die aufgerufen wird, wenn das Element angeklickt wird, speichern wir alle Elemente, die die Klasse "active" haben, in der Variablen "current".

        let current = document.getElementsByClassName("active");

        // Wenn die Variable "current" mehr als ein Element enthält, ersetzen wir die Klasse "active" durch eine leere Zeichenfolge (entfernen wird die Klasse: .active)
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Wenn das Element angeklickt wird, wird die Klasse "active" des angeklickten Elements hinzugefügt.
        this.className += " active";
    });
}

