document.addEventListener("DOMContentLoaded", function () {
    if (typeof jQuery === "undefined") {
        console.error("Fehler: jQuery wurde nicht geladen!");
        return;
    }

    $(document).ready(function () {
        // Disable cut, copy, paste
        $("body").on("cut copy paste", function (e) {
            e.preventDefault();
        });

        // Disable right click
        $("body").on("contextmenu", function (e) {
            return false;
        });

        // Disable F12, Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+J
        $(document).keydown(function (e) {
            if (e.keyCode === 123 || // F12
                (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I, Ctrl+Shift+J
                (e.ctrlKey && e.keyCode === 85)) { // Ctrl+U
                return false;
            }
        });

        // Entwicklertools-Erkennung (verhindert Debugging)
        setInterval(function () {
            let before = new Date().getTime();
            debugger;
            let after = new Date().getTime();
            if (after - before > 200) {
                alert("Entwicklertools erkannt! Die Seite wird neu geladen.");
                window.location.reload(); // Neuladen der Seite
            }
        }, 5000); // Prüft alle 5 Sekunden
    });
});
