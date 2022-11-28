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




/*>> Alfredo Gonzales de Categoria A y con 1-3 a;os de servicio recibira:
Sueldo Basico: S/ 3,400
Bonificacion por a;os de servicio: S/ 510
Sueldo Neto: S/ 3,128 (80% del sueldo bruto total)*/