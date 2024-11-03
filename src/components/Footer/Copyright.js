import React from 'react'

export default function Copyright() {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-primary py-2'>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="mb-0 text-center text-white">&copy; {year}. All Rights Reserved.</p>
            {/* <p className='text-center text-white'> {year === 2024 ? "Your date year is perfect" : "Please set your date"}</p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}