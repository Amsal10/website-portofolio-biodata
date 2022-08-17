import React from 'react'
import ServiceItem from './ServiceItem'

function Service() {
    return (
        <div className='section bg-dark text-light'>
            <div className='container'>
                <h1>Service</h1>
                <div className='row'>
                    <ServiceItem
                        judul="desain"
                        warna="merah"
                        deskripsi="apa ya yang pas buat ditulis dibagian ini" />
                    <ServiceItem
                        judul="desain"
                        warna="hijau"
                        deskripsi="apa ya yang pas buat ditulis dibagian ini" />
                    <ServiceItem
                        judul="desain"
                        warna="biru"
                        deskripsi="apa ya yang pas buat ditulis dibagian ini" />
                    <ServiceItem
                        judul="desain"
                        warna="emas"
                        deskripsi="apa ya yang pas buat ditulis dibagian ini" />
                </div>
            </div>
        </div>
    )
}

export default Service