let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponiveis > 0) ? "Reserva confirma"
                  : (quartosDisponiveis > 0) ? "Aguardando confirmação" 
                  : "Sem quartos disponiveis";
console.log(statusReserva);