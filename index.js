import { Octokit, App } from "https://esm.sh/octokit";

const meinButton = document.querySelector('.meinButton');

meinButton.addEventListener('click', async function() {
    const octokit = new Octokit({ 
        auth: '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',
    });

    const authStatus = await octokit.auth();
    if (!authStatus.token) {
        alert('Fehler: Nicht authentifiziert. Bitte melde dich an.');
        return;
    }

    try {
        const response = await octokit.request('POST /repos/Schule-StartUP/test7/dispatches/.github/workflows/main.yml', {
            headers: {
                'Authorization': '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',
                'Accept': 'application/vnd.github.everest-preview+json',
                'Content-Type': 'application/json'
            },
            mediaType: {
                previews: ['everest']
            },
            event_type: 'trigger-workflow'
        });

        if (response.status === 204) {
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

