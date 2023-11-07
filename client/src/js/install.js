const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.removeAttribute('hidden');
});

//Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  deferredPrompt.prompt();
  const choiceResult = await deferredPrompt.userChoice;

  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }

  deferredPrompt = null;
  butInstall.setAttribute('hidden', true);
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App was installed!', event);
});
