import React from 'react'

const Footer = () => {
    const CurrentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-4 py-4 border-t border-gray-600/30 text-stone-700 text-center font-poppins">
      <div className="container mx-auto">
        <p>&copy; {CurrentYear} Suchanya Chunlabut. All rights reserved. </p>
      </div>
    </footer>
  )
}

export default Footer