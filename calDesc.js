monto=0, calculoDescuento=0.0, montoFinal=0.0

monto =parseFloat(prompt("¿De cuanto es el monto?"))

if (monto>100) {
    calculoDescuento=monto*0.1
montoFinal=monto-calculoDescuento
} else
{
   calculoDescuento=monto*0.02
   montoFinal=monto-calculoDescuento
}
alert("El descuento es de:  " + calculoDescuento)
alert("El monto final es de:  "+ montoFinal)