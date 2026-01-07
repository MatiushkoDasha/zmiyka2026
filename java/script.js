const black = document.querySelector(".black"),
    bc = document.querySelector(".bc"),
    canel = document.querySelector(".canel"),
    tovar = document.querySelector(".tovar"),
    luka = document.querySelector("#luka"),
    miku = document.querySelector("#miku"),  
    kartca_luka = document.querySelector("#kartca_luka"),
    kartca_lukabc = document.querySelector("#kartca_lukabc"),
    kartca_mikub = document.querySelector("#kartca_mikub"),
    kartca_mikubc = document.querySelector("#kartca_mikubc"),
    kartca_miku_canel = document.querySelector("#kartca_miku_canel"),
    gumi = document.querySelector("#gumi"),  
    kartca_gumib = document.querySelector("#kartca_gumib"),
    kartca_gumibc = document.querySelector("#kartca_gumibc"),
    kartca_gumi_canel = document.querySelector("#kartca_gumi_canel"),
    len = document.querySelector("#len"),  
    kartca_lenb = document.querySelector("#kartca_lenb"),
    kartca_lenbc = document.querySelector("#kartca_lenbc"),
    kartca_len_canel = document.querySelector("#kartca_len_canel"),
    meiko = document.querySelector("#meiko"),  
    kartca_meikob = document.querySelector("#kartca_meikob"),
    kartca_meikobc = document.querySelector("#kartca_meikobc"),
    kartca_meiko_canel = document.querySelector("#kartca_meiko_canel"),
    kaito = document.querySelector("#kaito"),  
    kartca_kaitob = document.querySelector("#kartca_kaitob"),
    kartca_kaitobc = document.querySelector("#kartca_kaitobc"),
    kartca_kaito_canel = document.querySelector("#kartca_kaito_canel")

black.addEventListener("click", function() {
black.style.display = "none"
bc.style.display = "none"
})

canel.addEventListener("click", function() {
black.style.display = "none"
bc.style.display = "none"
})

luka.addEventListener("click", function() {
kartca_luka.style.display = "block"
kartca_lukabc.style.display = "flex"
})

miku.addEventListener("click", function() {
kartca_mikub.style.display = "block"
kartca_mikubc.style.display = "flex"
})

kartca_mikub.addEventListener("click", function() {
kartca_mikub.style.display = "none"
kartca_mikubc.style.display = "none"
})

kartca_miku_canel.addEventListener("click", function() {
kartca_mikub.style.display = "none"
kartca_mikubc.style.display = "none"
})

gumi.addEventListener("click", function() {
kartca_gumib.style.display = "block"
kartca_gumibc.style.display = "flex"
})

kartca_gumib.addEventListener("click", function() {
kartca_gumib.style.display = "none"
kartca_gumibc.style.display = "none"
})

kartca_gumi_canel.addEventListener("click", function() {
kartca_gumib.style.display = "none"
kartca_gumibc.style.display = "none"
})

len.addEventListener("click", function() {
kartca_lenb.style.display = "block"
kartca_lenbc.style.display = "flex"
})

kartca_lenb.addEventListener("click", function() {
kartca_lenb.style.display = "none"
kartca_lenbc.style.display = "none"
})

kartca_len_canel.addEventListener("click", function() {
kartca_lenb.style.display = "none"
kartca_lenbc.style.display = "none"
})

meiko.addEventListener("click", function() {
kartca_meikob.style.display = "block"
kartca_meikobc.style.display = "flex"
})

kartca_meikob.addEventListener("click", function() {
kartca_meikob.style.display = "none"
kartca_meikobc.style.display = "none"
})

kartca_meiko_canel.addEventListener("click", function() {
kartca_meikob.style.display = "none"
kartca_meikobc.style.display = "none"
})

kaito.addEventListener("click", function() {
kartca_kaitob.style.display = "block"
kartca_kaitobc.style.display = "flex"
})

kartca_kaitob.addEventListener("click", function() {
kartca_kaitob.style.display = "none"
kartca_kaitobc.style.display = "none"
})

kartca_kaito_canel.addEventListener("click", function() {
kartca_kaitob.style.display = "none"
kartca_kaitobc.style.display = "none"
})