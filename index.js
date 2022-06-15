async function api() {
  await fetch('https://ssl.geoplugin.net/json.gp?k=292af9fb00c1353d')
    .then((res) => res.json())
    .then(
      (data) =>
        (document.querySelector('header .city').innerHTML = data.geoplugin_city)
    );
}
api();
