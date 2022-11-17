import React, { lazy } from 'react'

export const Iframe = ({ openMap, setOpenMap }) => {
  const src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12109.26968137635!2d22.9416259!3d40.64493285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1666177116930!5m2!1sen!2sgr'
  const width = '100%'
  const height = '100%'
  const load = 'lazy'
  const referrerPolicy = "no-referrer-when-downgrade"
  const allowfullscreen = ''
  const style="border:0;"

  
  if (!openMap) {
    return null

  }
  function closeModal(params) {
    setOpenMap(false)
  }

  return (
    <div className='iframe'>
        <span className="close" onClick={closeModal}></span>
        <div className='map-content'>
          <iframe src={src} width={width} height={height} style={{style}} allowFullScreen={allowfullscreen} loading={load} referrerPolicy={referrerPolicy}></iframe>

        </div>
      </div>
      )
}
