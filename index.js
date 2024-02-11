// Zuerst holst du dir eine Referenz auf den Button, den du auswählen möchtest
const meinButton = document.querySelector('.meinButton');

// Dann fügst du einen Eventlistener hinzu, der auf das Klicken des Buttons reagiert
meinButton.addEventListener('click', async function() {
    try {
                const response = await fetch('https://api.github.com/repos/Schule-StartUP/test7/dispatches', {
                    method: 'POST',
                    headers: {
                        'Authorization': `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`,
                        'Accept': 'application/vnd.github.everest-preview+json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ event_type: 'trigger-workflow' })
                });

                if (response.ok) {
                    alert('GitHub Workflow wurde ausgelöst!');
                } else {
                    alert('Fehler beim Auslösen des GitHub Workflow.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
    console.log('Der Button wurde geklickt!');
    // Füge hier weitere Aktionen hinzu, die ausgeführt werden sollen
});
