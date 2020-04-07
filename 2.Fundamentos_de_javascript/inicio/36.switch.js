let metodoPago = 'efectivo';

switch (metodoPago) {
  case 'efectivo':
    console.log('pago en efectivo');
    break;
  case 'credito':
    console.log('pago en credito');
    break;
  case 'tarjeta':
    console.log('pago en tarjeta');
    break;
  default:
    console.log('metodo de pago no soportado');
    break;
}
