import React from 'react'

const CinemaSeatBooking = ({
    layout = {
        rows: 8,
        seatsPerRow: 12,
        aislePosition: 5,
    },
    seatTypes = {
        regular: {name: "Regular", price: 150, rows: [0, 1, 2]},
        premium: {name: "Premium", price: 250, rows: [3, 4, 5]},
        vip: {name: "VIP", price: 350, rows: [6, 7, 8]},
    },
    bookedSeats = [],
    currency = "₹",
    onBookingComplete = () => {},
    title = "Cinema Ticket booking",
    subTitle = "Enjoy your movie with your choice seat",
}) => {
  return (
    <>
      <div className='w-full min-h-screen bg-gray-50 p-4'>
      {/* Title */}
      <div className='max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6'>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
      </div>
      {/* Screen */}
      {/* Seat Map */}
      {/* Legend */}
      {/* Summary */}
      {/* Book Button */}
    </>
  )
}

export default CinemaSeatBooking
