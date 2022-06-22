async function api() {
  await fetch('https://ssl.geoplugin.net/json.gp?k=292af9fb00c1353d')
    .then((res) => res.json())
    .then(
      (data) =>
        (document.querySelector('header .city').innerHTML = data.geoplugin_city)
    );
}
api();


<!-- Fixed Button script -->
const scrollListener = () => {
    const element = document.querySelector('.presentation')
    const position = element.getBoundingClientRect().top.toFixed(0)
    
    const fixedButton = document.querySelector('.fixed_button')
    
    const button = document.querySelector('.link')
    const buttonPosition = button.getBoundingClientRect().top.toFixed(0)


    if(position < -340 && buttonPosition > 640 || buttonPosition < -30) {
        if(fixedButton.classList.contains('active')) {
            return
        } else {
            fixedButton.classList.add('active')
        }
    } else {
        fixedButton.classList.remove('active')
    }
};

window.addEventListener("scroll", scrollListener);