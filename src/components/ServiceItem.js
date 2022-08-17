import React from 'react'
import "../style/ServiceItem.css"

function ServiceItem(props) {
    const classCard = "card-body " + props.warna;
    return (
        <div className='col-md-6 col-sm-12 mt-4'>
            <div class="card text-dark p-3">
                <div class={classCard}>
                    <h5 class="card-title">{props.judul}</h5>
                    <p class="card-text">{props.deskripsi}</p>
                    {/* <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    )
}

export default ServiceItem