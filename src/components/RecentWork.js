import React from 'react'

function RecentWork() {
  const daftarGambar = [
    "https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",


  ]
  return (
    <div className='section py-5'>
      <div className='container'>
        <h1> RecentWork </h1>
        <div className='row mt-5'>

          {
            daftarGambar.map(function (gambar) {
              return (
                <div className='col-md-4 col-sm-12 mt-4 gambar'>
                  <img
                    className='img-fluid' 
                    src={gambar} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default RecentWork