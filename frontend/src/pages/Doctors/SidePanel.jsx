import React, { useState } from 'react'
import convertTime from '../../utils/convertTime'
import { BASE_URL } from '../../config'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import HashLoader from 'react-spinners/HashLoader'

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const bookingHandler = async () => {
    setLoading(true)

    try {
      const token = localStorage.getItem('token')
      if (!token) {
        setLoading(false)
        return toast.error('Please login to book an appointment')
      }

      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      }

      if (data.session && data.session.url) {
        // Store the session ID in localStorage
        localStorage.setItem('stripe_session_id', data.session.id)
        
        // Redirect to Stripe checkout
        window.location.href = data.session.url
      } else {
        throw new Error('No checkout session URL received')
      }

    } catch (err) {
      toast.error(err.message)
      console.error('Booking error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text__para mt-0 font-semibold'>
          Ticket Price
        </p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
          {ticketPrice} INR
        </span>
      </div>

      <div className='mt-[30px]'>
        <p className='text__para mt-0 font-semibold text-headingColor'>
          Available Time Slots:
        </p>

        <ul className='mt-3'>
          {timeSlots?.map((item, index) => (
            <li key={index} className='flex items-center justify-between mb-2'>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>

              <p className='text-[15px] leading-6 text-textColor font-semibold'>
                {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={bookingHandler} className='btn px-2 w-full rounded-md'>
        {loading ? <HashLoader size={25} color="#fff" /> : 'Book Appointment'}
      </button>
    </div>
  )
}

export default SidePanel
