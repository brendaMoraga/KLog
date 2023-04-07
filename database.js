
//     function obtenerItinerarios(req, res) {
//         const { origen, destino, eta, tiempoTransito } = req.query;

//         let itinerariosFiltrados = itinerarios;

//         if (origen) {
//             itinerariosFiltrados = itinerariosFiltrados.filter(
//                 (itinerario) => itinerario.Origen === origen
//             );
//         }

//         if (destino) {
//             itinerariosFiltrados = itinerariosFiltrados.filter(
//                 (itinerario) => itinerario.Destino === destino
//             );
//         }

//         if (eta) {
//             itinerariosFiltrados = itinerariosFiltrados.filter(
//                 (itinerario) => itinerario.ETA === eta
//             );
//         }

//         if (tiempoTransito) {
//             itinerariosFiltrados = itinerariosFiltrados.filter(
//                 (itinerario) => {
//                     const fechaETA = new Date(itinerario.ETA);
//                     const fechaETD = new Date(itinerario.ETD);
//                     const tiempoEnMilisegundos = fechaETA.getTime() - fechaETD.getTime();
//                     const tiempoEnDias = tiempoEnMilisegundos / (1000 * 60 * 60 * 24);
//                     return tiempoEnDias === parseInt(tiempoTransito);
//                 }
//             );
//         }

//         res.json(itinerariosFiltrados);
//     }

// });

// app.listen(3000, () => {
//     console.log('Servidor iniciado en el puerto 3000');
// });