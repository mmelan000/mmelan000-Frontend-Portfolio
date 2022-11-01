function redirect() {
  if (
    confirm(
      'Hey! You found my old portfolio! Would you like to visit my new portfolio?'
    )
  ) {
    window.location.assign('https://mmelan000.github.io/React-Portfolio/');
  }

  return;
}

redirect();
