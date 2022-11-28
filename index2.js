const root = document.getElementById("root")

let form = document.createElement("form")
form.style.width = "300px"
root.append(form)

let label = document.createElement("label")
label.textContent = "Nombre"
label.style.width = "100px"
form.append(label)

let input = document.createElement("input")
input.type = "text"
input.setAttribute("id","name")
input.style.width = "200px"
form.append(input)

label = document.createElement("label")
label.textContent = "Categoria"
label.style.width = "100px"
form.append(label)

let select = document.createElement("select")
select.setAttribute("id","category")
select.style.width = "200px"
form.append(select)

let options = document.createElement("option")
options.text = "Seleccione"
options.value = ""
select.append(options)

options = document.createElement("option")
options.text = "A (S/40)"
options.value = "40"
select.append(options)

options = document.createElement("option")
options.text = "B (S/35)"
options.value = "35"
select.append(options)

options = document.createElement("option")
options.text = "C (S/30)"
options.value = "30"
select.append(options)

label = document.createElement("label")
label.textContent = "Horas Trabajo"
label.style.width = "100px"
form.append(label)

input = document.createElement("input")
input.type = "number"
input.setAttribute("id", "hour")
input.style.width = "200px"
form.append(input)

label = document.createElement("label")
label.textContent = "Años Servicio"
label.style.width = "100px"
form.append(label)

select = document.createElement("select")
select.setAttribute("id", "year")
select.style.width = "200px"
form.append(select)

options = document.createElement("option")
options.text = "Seleccione"
options.value = ""
select.append(options)

options = document.createElement("option")
options.text = "1 - 3 (15%)"
options.value = "15"
select.append(options)

options = document.createElement("option")
options.text = "4 - 7 (20%)"
options.value = "20"
select.append(options)

options = document.createElement("option")
options.text = "8 - 12 (30%)"
options.value = "30"
select.append(options)

options = document.createElement("option")
options.text = "13 - más (35%)"
options.value = "35"
select.append(options)

let button = document.createElement("button")
button.type = "button"
button.textContent = "Calcular"
button.addEventListener("click", (e) => calcular())
form.append(button)

button = document.createElement("button")
button.type = "reset"
button.textContent = "Limpiar"
form.append(button)

let resp = document.createElement("div")
resp.setAttribute("id", "respuesta")
root.append(resp)

const respuesta = document.getElementById("respuesta")

function calcular() {
    let sueldo_basico = document.getElementById("category").value * document.getElementById("hour").value
    let bonificacion = sueldo_basico * document.getElementById("year").value / 100
    let sueldo_bruto = sueldo_basico + bonificacion
    let sueldo_neto = sueldo_bruto * 80 / 100

    let categoria = document.getElementById("category");
    let texto_categoria = categoria.options[categoria.selectedIndex].text;

    let anio_servicio = document.getElementById("year");
    let texto_anio_servicio = anio_servicio.options[anio_servicio.selectedIndex].text;

    respuesta.innerHTML = ""

    let p = document.createElement("p")
    p.textContent = `${document.getElementById("name").value} de Categoría ${texto_categoria} y con ${texto_anio_servicio} años de servicio recibira:`
    respuesta.append(p)

    p = document.createElement("p")
    p.textContent = `Sueldo Básico: S/ ${sueldo_basico}`
    respuesta.append(p)

    p = document.createElement("p")
    p.textContent = `Bonificación por años de servicio: S/ ${bonificacion}`
    respuesta.append(p)

    p = document.createElement("p")
    p.textContent = `Suedo Neto: S/ ${sueldo_neto} (80% del sueldo bruto total)`
    respuesta.append(p)
}