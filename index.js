// Importieren der benötigten Bibliotheken
import { Octokit, App } from "https://esm.sh/octokit";

// Abrufen des Buttons aus dem HTML-Dokument
const meinButton = document.querySelector(".meinButton");

// Event-Listener für den Klick-Event des Buttons hinzufügen
meinButton.addEventListener("click", async function () {
  // Erstellen einer neuen Octokit-Instanz mit Authentifizierung
  const octokit = new Octokit({
    auth: "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",
  });

  // Authentifizierungsstatus überprüfen
  const authStatus = await octokit.auth();
  if (!authStatus.token) {
    alert("Fehler: Nicht authentifiziert. Bitte melde dich an.");
    return;
  }

  // **Variablen definieren**
  const owner = "Schule-StartUP";
  const repo = "test7";
  
  const eventType = "trigger-workflow";
  const mediaType = "application/vnd.github.everest-preview+json";
  const headers = {
    Authorization: `token ${authStatus.token}`,
    Accept: mediaType,
    "Content-Type": "application/json",
  };

  // **Anfrage erstellen**
  const response = await octokit.request("POST", `/repos/${owner}/${repo}/dispatches`, {
    headers,
    mediaType: {
      previews: ["everest"],
    },
    event_type: eventType,
  });

  // **Fehlerbehandlung**
  try {
    // **Verarbeitung der Antwort**
    if (response.status === 204) {
      alert("GitHub Workflow wurde erfolgreich ausgelöst!");
    } else {
      console.error(
        "Fehler beim Auslösen des GitHub Workflows:",
        response.status,
        response.data
      );
      alert("Fehler beim Auslösen des GitHub Workflows. Siehe Konsole für Details.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Ein unerwarteter Fehler ist aufgetreten. Siehe Konsole für Details.");
  }

  console.log("Der Button wurde geklickt!");
  // **Füge hier weitere Aktionen hinzu, die ausgeführt werden sollen**
});

