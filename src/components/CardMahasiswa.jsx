"use client" ;
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useState } from "react";


export default function CardMahasiswa(props) {
    const {nim, nama, angkatan, prodi, foto} = props
    const [angka, setAngka] = useState(0)

    const handleClick = () => {
        setAngka(angka + 1)
        
    }
    return (
        <div className="p-2 m-2 border border-slate-300 rounded-lg
                        grid justify-items-center text-slate-700">
        <CldImage className="rounded-full"
            src={foto}
            width="75"
            height="75"
            crop={{
                type: 'auto',
                source: true
            }}
        />
        <h1 className="text-xl font-semibold">{nama}</h1>
                <p>Nim      : {nim}</p>
                <p>Angkatan : {angkatan}</p>
                <p>prodi    : {prodi}</p>
                <Link className="text-blue-800 undeline hover:text-blue-800 mt-2"
                href={`/nilai/${nim}`}>
                    Lihat Nilai
                </Link>
                
                <Link className='text-purple-700 underline hover:text-blue-800'
                href={`/add-mahasiswa`}>
                    tambah mahasiswa
                </Link>

                {/* <div className='m-2'>
                    <button className='px-2 bg-blue-500 rounded-lg'
                    onClick={handleClick}>
                        counter
                    </button>
                    <p>{angka}</p>
                </div>   */}
        </div>      
    );
}