function calcularSalario() {

    let nombre = document.getElementById("nombre").value;
    let horas = parseFloat(document.getElementById("horas").value);
    let pagoHora = parseFloat(document.getElementById("pagoHora").value);

    if (!nombre || isNaN(horas) || isNaN(pagoHora)) {
        document.getElementById("resultado").innerHTML =
            "Por favor completa todos los campos correctamente.";
        return;
    }

    let salario = horas * pagoHora;

    document.getElementById("resultado").innerHTML =
        "<h3>Desglose</h3>" +
        "<p>Empleado: " + nombre + "</p>" +
        "<p>Horas trabajadas: " + horas + "</p>" +
        "<p>Pago por hora: $" + pagoHora.toFixed(2) + "</p>" +
        "<p>Salario semanal: $" + salario.toFixed(2) + "</p>";
}