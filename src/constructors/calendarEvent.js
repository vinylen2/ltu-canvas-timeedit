module.exports = function(reservation) {
  return {
    title: reservation.columns[3],
    location_name: reservation.columns[1],
    location_address: reservation.columns[6],
    startdate: reservation.startdate,
    starttime: reservation.starttime,
    enddate: reservation.enddate,
    endtime: reservation.endtime,
    description: reservation.columns[7],
    id: reservation.id,
    // teacher: reservation.columns[2],
    // activity: reservation.columns[4],
  }
}