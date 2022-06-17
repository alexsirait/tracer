import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni7(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        h1: dataKuesioner.h1 || '',
        h2: dataKuesioner.h2 || '',
        h3: dataKuesioner.h3 || '',
        h4: dataKuesioner.h4 || '',
        h5: dataKuesioner.h5 || '',
        h6: dataKuesioner.h6 || '',
        h7: dataKuesioner.h7 || '',
        h8: dataKuesioner.h8 || '',
        h9: dataKuesioner.h9 || '',
        h10: dataKuesioner.h10 || '',
        h11: dataKuesioner.h11 || '',
        h12: dataKuesioner.h12 || '',
        h13: dataKuesioner.h13 || '',
        h14: dataKuesioner.h14 || '',
        h15: dataKuesioner.h15 || '',
        h16: dataKuesioner.h16 || '',
        h17: dataKuesioner.h17 || '',
        h18: dataKuesioner.h18 || '',
        h19: dataKuesioner.h19 || '',
        h20: dataKuesioner.h20 || '',
        h21: dataKuesioner.h21 || '',
        h22: dataKuesioner.h22 || '',
        h23: dataKuesioner.h23 || '',
        h24: dataKuesioner.h24 || '',
        h25: dataKuesioner.h25 || '',
        h26: dataKuesioner.h26 || '',
        h27: dataKuesioner.h27 || '',
        h28: dataKuesioner.h28 || '',
        h29: dataKuesioner.h29 || '',
        h30: dataKuesioner.h30 || '',
        h31: dataKuesioner.h31 || '',
        h32: dataKuesioner.h32 || '',
        h33: dataKuesioner.h33 || '',
        h34: dataKuesioner.h34 || '',
        h35: dataKuesioner.h35 || '',
        h36: dataKuesioner.h36 || '',
        h37: dataKuesioner.h37 || '',
        h38: dataKuesioner.h38 || '',
        h39: dataKuesioner.h39 || '',
        h40: dataKuesioner.h40 || '',
        h41: dataKuesioner.h41 || '',
        h42: dataKuesioner.h42 || '',
        h43: dataKuesioner.h43 || '',
        h44: dataKuesioner.h44 || '',
        h45: dataKuesioner.h45 || '',
        h46: dataKuesioner.h46 || '',
        h47: dataKuesioner.h47 || '',
        h48: dataKuesioner.h48 || '',
        h49: dataKuesioner.h49 || '',
        h50: dataKuesioner.h50 || '',
        h51: dataKuesioner.h51 || '',
        h52: dataKuesioner.h52 || '',
        h53: dataKuesioner.h53 || '',
        h54: dataKuesioner.h54 || '',
        h55: dataKuesioner.h55 || '',
        h56: dataKuesioner.h56 || '',
        h57: dataKuesioner.h57 || '',
        h58: dataKuesioner.h58 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update7', dataKuesioner.id))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                        <span>Kuesioner</span>
                    </h2>}
        >
            <Head title="Kuesioner" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <div>
                            <form onSubmit={updateHandler}>
                                <div className="mb-6">
                                    <h1 className='text-2xl mb-3 font-semibold'>Umpan balik dari lulusan</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h1">
                                        Apa alasan Anda memilih pendidikan Vokasi? (boleh lebih dari satu jawaban)
                                    </label>
                                    <label className="block text-gray-500 text-sm mb-2">
                                        (Pendidikan vokasi mencakup SMK, pendidikan tinggi vokasi/politeknik, kursus dan pelatihan)
                                    </label>
                                    <div className='block items-center gap-x-4'>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h1" id='h110' onChange={e => setData('h1', e.target.checked)} defaultChecked={data.h1 == '1' && true}/> <label htmlFor='h110' className='text-sm text-gray-700'>Ingin cepat mendapatkan pekerjaan</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h2" id='h210' onChange={e => setData('h2', e.target.checked)} defaultChecked={data.h2 == '1' && true}/> <label htmlFor='h210' className='text-sm text-gray-700'>Keterbatasan ekonomi</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h3" id='h310' onChange={e => setData('h3', e.target.checked)} defaultChecked={data.h3 == '1' && true}/> <label htmlFor='h310' className='text-sm text-gray-700'>Biaya lebih terjangkau</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h4" id='h410' onChange={e => setData('h4', e.target.checked)} defaultChecked={data.h4 == '1' && true}/> <label htmlFor='h410' className='text-sm text-gray-700'>Pilihan sendiri</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h5" id='h510' onChange={e => setData('h5', e.target.checked)} defaultChecked={data.h5 == '1' && true}/> <label htmlFor='h510' className='text-sm text-gray-700'>Diajak teman</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h6" id='h610' onChange={e => setData('h6', e.target.checked)} defaultChecked={data.h6 == '1' && true}/> <label htmlFor='h610' className='text-sm text-gray-700'>Keinginan orang tua</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="h7" id='h710' onChange={e => setData('h7', e.target.checked)} defaultChecked={data.h7 == '1' && true}/> <label htmlFor='h710' className='text-sm text-gray-700'>Tidak diterima di sekolah lain</label></div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Seberapa penting kemampuan berikut ini dibutuhkan di instansi/lembaga/perusahaan/tempat Anda bekerja/berwirausaha?
                                    </label>
                                    <div className="ml-4 md:ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h8">
                                            Kemampuan menggunakan peralatan teknologi informasi
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h8}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h8" id='h810' defaultChecked={data.h8 === '1' && true} /> <label htmlFor='h810' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h8" id='h820' defaultChecked={data.h8 === '2' && true} /> <label htmlFor='h820' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h8" id='h830' defaultChecked={data.h8 === '3' && true} /> <label htmlFor='h830' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h8" id='h840' defaultChecked={data.h8 === '4' && true} /> <label htmlFor='h840' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h8" id='h850' defaultChecked={data.h8 === '5' && true} /> <label htmlFor='h850' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h8 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h9">
                                            Kemampuan berbahasa asing
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h9}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h9" id='h910' defaultChecked={data.h9 === '1' && true} /> <label htmlFor='h910' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h9" id='h920' defaultChecked={data.h9 === '2' && true} /> <label htmlFor='h920' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h9" id='h930' defaultChecked={data.h9 === '3' && true} /> <label htmlFor='h930' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h9" id='h940' defaultChecked={data.h9 === '4' && true} /> <label htmlFor='h940' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h9" id='h950' defaultChecked={data.h9 === '5' && true} /> <label htmlFor='h950' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h9 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h10">
                                            Kemampuan menyampaikan ide dan solusi
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h10}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h10" id='h1010' defaultChecked={data.h10 === '1' && true} /> <label htmlFor='h1010' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h10" id='h1020' defaultChecked={data.h10 === '2' && true} /> <label htmlFor='h1020' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h10" id='h1030' defaultChecked={data.h10 === '3' && true} /> <label htmlFor='h1030' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h10" id='h1040' defaultChecked={data.h10 === '4' && true} /> <label htmlFor='h1040' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h10" id='h1050' defaultChecked={data.h10 === '5' && true} /> <label htmlFor='h1050' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h10 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h11">
                                            Kemampuan untuk beradaptasi dengan lingkungan kerja
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h11}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h11" id='h1110' defaultChecked={data.h11 === '1' && true} /> <label htmlFor='h1110' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h11" id='h1120' defaultChecked={data.h11 === '2' && true} /> <label htmlFor='h1120' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h11" id='h1130' defaultChecked={data.h11 === '3' && true} /> <label htmlFor='h1130' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h11" id='h1140' defaultChecked={data.h11 === '4' && true} /> <label htmlFor='h1140' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h11" id='h1150' defaultChecked={data.h11 === '5' && true} /> <label htmlFor='h1150' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h11 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h12">
                                            Berpikir analitis
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h12}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h12" id='h1210' defaultChecked={data.h12 === '1' && true} /> <label htmlFor='h1210' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h12" id='h1220' defaultChecked={data.h12 === '2' && true} /> <label htmlFor='h1220' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h12" id='h1230' defaultChecked={data.h12 === '3' && true} /> <label htmlFor='h1230' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h12" id='h1240' defaultChecked={data.h12 === '4' && true} /> <label htmlFor='h1240' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h12" id='h1250' defaultChecked={data.h12 === '5' && true} /> <label htmlFor='h1250' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h12 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h13">
                                            Kemampuan bekerja secara efektif untuk mencapai tujuan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h13}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h13" id='h1310' defaultChecked={data.h13 === '1' && true} /> <label htmlFor='h1310' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h13" id='h1320' defaultChecked={data.h13 === '2' && true} /> <label htmlFor='h1320' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h13" id='h1330' defaultChecked={data.h13 === '3' && true} /> <label htmlFor='h1330' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h13" id='h1340' defaultChecked={data.h13 === '4' && true} /> <label htmlFor='h1340' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h13" id='h1350' defaultChecked={data.h13 === '5' && true} /> <label htmlFor='h1350' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h13 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h14">
                                            Kemampuan mengelola pekerjaan secara efisien
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h14}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h14" id='h1410' defaultChecked={data.h14 === '1' && true} /> <label htmlFor='h1410' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h14" id='h1420' defaultChecked={data.h14 === '2' && true} /> <label htmlFor='h1420' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h14" id='h1430' defaultChecked={data.h14 === '3' && true} /> <label htmlFor='h1430' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h14" id='h1440' defaultChecked={data.h14 === '4' && true} /> <label htmlFor='h1440' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h14" id='h1450' defaultChecked={data.h14 === '5' && true} /> <label htmlFor='h1450' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h14 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h15">
                                            Kemampuan bekerja sama dalam tim
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h15}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h15" id='h1510' defaultChecked={data.h15 === '1' && true} /> <label htmlFor='h1510' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h15" id='h1520' defaultChecked={data.h15 === '2' && true} /> <label htmlFor='h1520' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h15" id='h1530' defaultChecked={data.h15 === '3' && true} /> <label htmlFor='h1530' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h15" id='h1540' defaultChecked={data.h15 === '4' && true} /> <label htmlFor='h1540' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h15" id='h1550' defaultChecked={data.h15 === '5' && true} /> <label htmlFor='h1550' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h15 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="h16">
                                            Berkinerja baik walaupun ada di bawah tekanan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h16}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h16" id='h1610' defaultChecked={data.h16 === '1' && true} /> <label htmlFor='h1610' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h16" id='h1620' defaultChecked={data.h16 === '2' && true} /> <label htmlFor='h1620' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h16" id='h1630' defaultChecked={data.h16 === '3' && true} /> <label htmlFor='h1630' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h16" id='h1640' defaultChecked={data.h16 === '4' && true} /> <label htmlFor='h1640' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h16" id='h1650' defaultChecked={data.h16 === '5' && true} /> <label htmlFor='h1650' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h16 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h17">
                                        Bagaimana keselarasan pekerjaan/wirausaha Anda sekarang dengan prodi/bidang keahlian/keterampilan Anda di satuan pendidikan/sekolah?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.h17}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sangat tidak selaras" name="h17" id='h1710' defaultChecked={data.h17 === 'Sangat tidak selaras' && true} /> <label htmlFor='h1710' className='text-sm text-gray-700'>Sangat tidak selaras</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak selaras" name="h17" id='h1720' defaultChecked={data.h17 === 'Tidak selaras' && true} /> <label htmlFor='h1720' className='text-sm text-gray-700'>Tidak selaras</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Cukup selaras" name="h17" id='h1730' defaultChecked={data.h17 === 'Cukup selaras' && true} /> <label htmlFor='h1730' className='text-sm text-gray-700'>Cukup selaras</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Selaras" name="h17" id='h1740' defaultChecked={data.h17 === 'Selaras' && true} /> <label htmlFor='h1740' className='text-sm text-gray-700'>Selaras</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sangat selaras" name="h17" id='h1750' defaultChecked={data.h17 === 'Sangat selaras' && true} /> <label htmlFor='h1750' className='text-sm text-gray-700'>Sangat selaras</label></div>
                                    </div>
                                    {errors.h17 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Seberapa bermanfaat Studi Anda dikaitkan dengan pekerjaan/wirausaha sekarang?
                                    </label>
                                    <div className="ml-4 md:ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h18">
                                            Teori dan praktik
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h18}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h18" id='h1810' defaultChecked={data.h18 === '1' && true} /> <label htmlFor='h1810' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h18" id='h1820' defaultChecked={data.h18 === '2' && true} /> <label htmlFor='h1820' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h18" id='h1830' defaultChecked={data.h18 === '3' && true} /> <label htmlFor='h1830' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h18" id='h1840' defaultChecked={data.h18 === '4' && true} /> <label htmlFor='h1840' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h18" id='h1850' defaultChecked={data.h18 === '5' && true} /> <label htmlFor='h1850' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h18 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h19">
                                            Sikap dan kemampuan berkomunikasi (budaya kerja)
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h19}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h19" id='h1910' defaultChecked={data.h19 === '1' && true} /> <label htmlFor='h1910' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h19" id='h1920' defaultChecked={data.h19 === '2' && true} /> <label htmlFor='h1920' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h19" id='h1930' defaultChecked={data.h19 === '3' && true} /> <label htmlFor='h1930' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h19" id='h1940' defaultChecked={data.h19 === '4' && true} /> <label htmlFor='h1940' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h19" id='h1950' defaultChecked={data.h19 === '5' && true} /> <label htmlFor='h1950' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h19 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h20">
                                            Jejaring kerja sama dengan DUDI
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h20}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h20" id='h2010' defaultChecked={data.h20 === '1' && true} /> <label htmlFor='h2010' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h20" id='h2020' defaultChecked={data.h20 === '2' && true} /> <label htmlFor='h2020' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h20" id='h2030' defaultChecked={data.h20 === '3' && true} /> <label htmlFor='h2030' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h20" id='h2040' defaultChecked={data.h20 === '4' && true} /> <label htmlFor='h2040' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h20" id='h2050' defaultChecked={data.h20 === '5' && true} /> <label htmlFor='h2050' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h20 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h21">
                                            Kemandirian (budaya kerja)
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h21}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h21" id='h2110' defaultChecked={data.h21 === '1' && true} /> <label htmlFor='h2110' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h21" id='h2120' defaultChecked={data.h21 === '2' && true} /> <label htmlFor='h2120' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h21" id='h2130' defaultChecked={data.h21 === '3' && true} /> <label htmlFor='h2130' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h21" id='h2140' defaultChecked={data.h21 === '4' && true} /> <label htmlFor='h2140' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h21" id='h2150' defaultChecked={data.h21 === '5' && true} /> <label htmlFor='h2150' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h21 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h22">
                                            Magang/prakerin
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h22}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h22" id='h2210' defaultChecked={data.h22 === '1' && true} /> <label htmlFor='h2210' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h22" id='h2220' defaultChecked={data.h22 === '2' && true} /> <label htmlFor='h2220' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h22" id='h2230' defaultChecked={data.h22 === '3' && true} /> <label htmlFor='h2230' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h22" id='h2240' defaultChecked={data.h22 === '4' && true} /> <label htmlFor='h2240' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h22" id='h2250' defaultChecked={data.h22 === '5' && true} /> <label htmlFor='h2250' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h22 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h23">
                                            Kelengkapan sarana dan teknologi pembelajaran
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h23}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h23" id='h2310' defaultChecked={data.h23 === '1' && true} /> <label htmlFor='h2310' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h23" id='h2320' defaultChecked={data.h23 === '2' && true} /> <label htmlFor='h2320' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h23" id='h2330' defaultChecked={data.h23 === '3' && true} /> <label htmlFor='h2330' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h23" id='h2340' defaultChecked={data.h23 === '4' && true} /> <label htmlFor='h2340' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h23" id='h2350' defaultChecked={data.h23 === '5' && true} /> <label htmlFor='h2350' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h23 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h24">
                                            Kemampuan bekerja sama (budaya kerja)
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h24}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h24" id='h2410' defaultChecked={data.h24 === '1' && true} /> <label htmlFor='h2410' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h24" id='h2420' defaultChecked={data.h24 === '2' && true} /> <label htmlFor='h2420' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h24" id='h2430' defaultChecked={data.h24 === '3' && true} /> <label htmlFor='h2430' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h24" id='h2440' defaultChecked={data.h24 === '4' && true} /> <label htmlFor='h2440' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h24" id='h2450' defaultChecked={data.h24 === '5' && true} /> <label htmlFor='h2450' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h24 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h25">
                                            Menulis tugas akhir
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h25}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h25" id='h2510' defaultChecked={data.h25 === '1' && true} /> <label htmlFor='h2510' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h25" id='h2520' defaultChecked={data.h25 === '2' && true} /> <label htmlFor='h2520' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h25" id='h2530' defaultChecked={data.h25 === '3' && true} /> <label htmlFor='h2530' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h25" id='h2540' defaultChecked={data.h25 === '4' && true} /> <label htmlFor='h2540' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h25" id='h2550' defaultChecked={data.h25 === '5' && true} /> <label htmlFor='h2550' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h25 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Bagaimana kepuasan Anda di instansi/lembaga/ perusahaan/tempat Anda bekerja?
                                    </label>
                                    <div className="ml-4 md:ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h26">
                                            Fleksibilitas waktu dalam bekerja
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h26}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h26" id='h2610' defaultChecked={data.h26 === '1' && true} /> <label htmlFor='h2610' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h26" id='h2620' defaultChecked={data.h26 === '2' && true} /> <label htmlFor='h2620' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h26" id='h2630' defaultChecked={data.h26 === '3' && true} /> <label htmlFor='h2630' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h26" id='h2640' defaultChecked={data.h26 === '4' && true} /> <label htmlFor='h2640' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h26" id='h2650' defaultChecked={data.h26 === '5' && true} /> <label htmlFor='h2650' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h26 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h27">
                                            Rincian tugas dan pekerjaan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h27}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h27" id='h2710' defaultChecked={data.h27 === '1' && true} /> <label htmlFor='h2710' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h27" id='h2720' defaultChecked={data.h27 === '2' && true} /> <label htmlFor='h2720' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h27" id='h2730' defaultChecked={data.h27 === '3' && true} /> <label htmlFor='h2730' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h27" id='h2740' defaultChecked={data.h27 === '4' && true} /> <label htmlFor='h2740' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h27" id='h2750' defaultChecked={data.h27 === '5' && true} /> <label htmlFor='h2750' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h27 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h28">
                                            Prospek karir
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h28}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h28" id='h2810' defaultChecked={data.h28 === '1' && true} /> <label htmlFor='h2810' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h28" id='h2820' defaultChecked={data.h28 === '2' && true} /> <label htmlFor='h2820' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h28" id='h2830' defaultChecked={data.h28 === '3' && true} /> <label htmlFor='h2830' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h28" id='h2840' defaultChecked={data.h28 === '4' && true} /> <label htmlFor='h2840' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h28" id='h2850' defaultChecked={data.h28 === '5' && true} /> <label htmlFor='h2850' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h28 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h29">
                                            Keamanan dan kenyamanan dalam bekerja
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h29}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h29" id='h2910' defaultChecked={data.h29 === '1' && true} /> <label htmlFor='h2910' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h29" id='h2920' defaultChecked={data.h29 === '2' && true} /> <label htmlFor='h2920' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h29" id='h2930' defaultChecked={data.h29 === '3' && true} /> <label htmlFor='h2930' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h29" id='h2940' defaultChecked={data.h29 === '4' && true} /> <label htmlFor='h2940' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h29" id='h2950' defaultChecked={data.h29 === '5' && true} /> <label htmlFor='h2950' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h29 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h30">
                                            Pengakuan status sosial
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h30}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h30" id='h3010' defaultChecked={data.h30 === '1' && true} /> <label htmlFor='h3010' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h30" id='h3020' defaultChecked={data.h30 === '2' && true} /> <label htmlFor='h3020' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h30" id='h3030' defaultChecked={data.h30 === '3' && true} /> <label htmlFor='h3030' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h30" id='h3040' defaultChecked={data.h30 === '4' && true} /> <label htmlFor='h3040' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h30" id='h3050' defaultChecked={data.h30 === '5' && true} /> <label htmlFor='h3050' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h30 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h31">
                                            Kebebasan menyampaikan ide dan inisiatif
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h31}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h31" id='h3110' defaultChecked={data.h31 === '1' && true} /> <label htmlFor='h3110' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h31" id='h3120' defaultChecked={data.h31 === '2' && true} /> <label htmlFor='h3120' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h31" id='h3130' defaultChecked={data.h31 === '3' && true} /> <label htmlFor='h3130' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h31" id='h3140' defaultChecked={data.h31 === '4' && true} /> <label htmlFor='h3140' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h31" id='h3150' defaultChecked={data.h31 === '5' && true} /> <label htmlFor='h3150' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h31 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h32">
                                            Gaji/upah
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h32}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h32" id='h3210' defaultChecked={data.h32 === '1' && true} /> <label htmlFor='h3210' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h32" id='h3220' defaultChecked={data.h32 === '2' && true} /> <label htmlFor='h3220' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h32" id='h3230' defaultChecked={data.h32 === '3' && true} /> <label htmlFor='h3230' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h32" id='h3240' defaultChecked={data.h32 === '4' && true} /> <label htmlFor='h3240' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h32" id='h3250' defaultChecked={data.h32 === '5' && true} /> <label htmlFor='h3250' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h32 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h33">
                                            Suasana kerja
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h33}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h33" id='h3310' defaultChecked={data.h33 === '1' && true} /> <label htmlFor='h3310' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h33" id='h3320' defaultChecked={data.h33 === '2' && true} /> <label htmlFor='h3320' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h33" id='h3330' defaultChecked={data.h33 === '3' && true} /> <label htmlFor='h3330' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h33" id='h3340' defaultChecked={data.h33 === '4' && true} /> <label htmlFor='h3340' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h33" id='h3350' defaultChecked={data.h33 === '5' && true} /> <label htmlFor='h3350' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h33 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h34">
                                            Pekerjaannya menantang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h34}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h34" id='h3410' defaultChecked={data.h34 === '1' && true} /> <label htmlFor='h3410' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h34" id='h3420' defaultChecked={data.h34 === '2' && true} /> <label htmlFor='h3420' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h34" id='h3430' defaultChecked={data.h34 === '3' && true} /> <label htmlFor='h3430' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h34" id='h3440' defaultChecked={data.h34 === '4' && true} /> <label htmlFor='h3440' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h34" id='h3450' defaultChecked={data.h34 === '5' && true} /> <label htmlFor='h3450' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h34 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Bagaimana kepuasan Anda terhadap kondisi pembelajaran di satuan pendidikan?
                                    </label>
                                    <div className="ml-4 md:ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h35">
                                            Kualitas pendidik/guru/dosen/instruktur
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h35}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h35" id='h3510' defaultChecked={data.h35 === '1' && true} /> <label htmlFor='h3510' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h35" id='h3520' defaultChecked={data.h35 === '2' && true} /> <label htmlFor='h3520' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h35" id='h3530' defaultChecked={data.h35 === '3' && true} /> <label htmlFor='h3530' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h35" id='h3540' defaultChecked={data.h35 === '4' && true} /> <label htmlFor='h3540' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h35" id='h3550' defaultChecked={data.h35 === '5' && true} /> <label htmlFor='h3550' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h35 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h36">
                                            Kesempatan berkomunikasi di luar kelas dengan pendidik/guru/dosen/instruktur
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h36}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h36" id='h3610' defaultChecked={data.h36 === '1' && true} /> <label htmlFor='h3610' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h36" id='h3620' defaultChecked={data.h36 === '2' && true} /> <label htmlFor='h3620' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h36" id='h3630' defaultChecked={data.h36 === '3' && true} /> <label htmlFor='h3630' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h36" id='h3640' defaultChecked={data.h36 === '4' && true} /> <label htmlFor='h3640' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h36" id='h3650' defaultChecked={data.h36 === '5' && true} /> <label htmlFor='h3650' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h36 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h37">
                                            Bimbingan akademik secara umum
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h37}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h37" id='h3710' defaultChecked={data.h37 === '1' && true} /> <label htmlFor='h3710' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h37" id='h3720' defaultChecked={data.h37 === '2' && true} /> <label htmlFor='h3720' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h37" id='h3730' defaultChecked={data.h37 === '3' && true} /> <label htmlFor='h3730' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h37" id='h3740' defaultChecked={data.h37 === '4' && true} /> <label htmlFor='h3740' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h37" id='h3750' defaultChecked={data.h37 === '5' && true} /> <label htmlFor='h3750' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h37 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h38">
                                            Bimbingan untuk menghadapi ujian akhir
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h38}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h38" id='h3810' defaultChecked={data.h38 === '1' && true} /> <label htmlFor='h3810' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h38" id='h3820' defaultChecked={data.h38 === '2' && true} /> <label htmlFor='h3820' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h38" id='h3830' defaultChecked={data.h38 === '3' && true} /> <label htmlFor='h3830' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h38" id='h3840' defaultChecked={data.h38 === '4' && true} /> <label htmlFor='h3840' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h38" id='h3850' defaultChecked={data.h38 === '5' && true} /> <label htmlFor='h3850' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h38 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h39">
                                            Materi pelajaran/mata kuliah
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h39}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h39" id='h3910' defaultChecked={data.h39 === '1' && true} /> <label htmlFor='h3910' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h39" id='h3920' defaultChecked={data.h39 === '2' && true} /> <label htmlFor='h3920' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h39" id='h3930' defaultChecked={data.h39 === '3' && true} /> <label htmlFor='h3930' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h39" id='h3940' defaultChecked={data.h39 === '4' && true} /> <label htmlFor='h3940' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h39" id='h3950' defaultChecked={data.h39 === '5' && true} /> <label htmlFor='h3950' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h39 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h40">
                                            Keberagaman program studi/bidang keahlian/keterampilan yang ditawarkan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h40}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h40" id='h4010' defaultChecked={data.h40 === '1' && true} /> <label htmlFor='h4010' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h40" id='h4020' defaultChecked={data.h40 === '2' && true} /> <label htmlFor='h4020' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h40" id='h4030' defaultChecked={data.h40 === '3' && true} /> <label htmlFor='h4030' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h40" id='h4040' defaultChecked={data.h40 === '4' && true} /> <label htmlFor='h4040' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h40" id='h4050' defaultChecked={data.h40 === '5' && true} /> <label htmlFor='h4050' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h40 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h41">
                                            Sistem penilaian
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h41}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h41" id='h4110' defaultChecked={data.h41 === '1' && true} /> <label htmlFor='h4110' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h41" id='h4120' defaultChecked={data.h41 === '2' && true} /> <label htmlFor='h4120' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h41" id='h4130' defaultChecked={data.h41 === '3' && true} /> <label htmlFor='h4130' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h41" id='h4140' defaultChecked={data.h41 === '4' && true} /> <label htmlFor='h4140' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h41" id='h4150' defaultChecked={data.h41 === '5' && true} /> <label htmlFor='h4150' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h41 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h42">
                                            Penekanan pada praktik dan praktikum
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h42}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h42" id='h4210' defaultChecked={data.h42 === '1' && true} /> <label htmlFor='h4210' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h42" id='h4220' defaultChecked={data.h42 === '2' && true} /> <label htmlFor='h4220' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h42" id='h4230' defaultChecked={data.h42 === '3' && true} /> <label htmlFor='h4230' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h42" id='h4240' defaultChecked={data.h42 === '4' && true} /> <label htmlFor='h4240' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h42" id='h4250' defaultChecked={data.h42 === '5' && true} /> <label htmlFor='h4250' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h42 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h43">
                                            Metode pengajaran
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h43}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h43" id='h4310' defaultChecked={data.h43 === '1' && true} /> <label htmlFor='h4310' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h43" id='h4320' defaultChecked={data.h43 === '2' && true} /> <label htmlFor='h4320' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h43" id='h4330' defaultChecked={data.h43 === '3' && true} /> <label htmlFor='h4330' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h43" id='h4340' defaultChecked={data.h43 === '4' && true} /> <label htmlFor='h4340' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h43" id='h4350' defaultChecked={data.h43 === '5' && true} /> <label htmlFor='h4350' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h43 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h44">
                                            Koleksi buku perpustakaan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h44}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h44" id='h4410' defaultChecked={data.h44 === '1' && true} /> <label htmlFor='h4410' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h44" id='h4420' defaultChecked={data.h44 === '2' && true} /> <label htmlFor='h4420' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h44" id='h4430' defaultChecked={data.h44 === '3' && true} /> <label htmlFor='h4430' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h44" id='h4440' defaultChecked={data.h44 === '4' && true} /> <label htmlFor='h4440' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h44" id='h4450' defaultChecked={data.h44 === '5' && true} /> <label htmlFor='h4450' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h44 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h45">
                                            Ketersediaan bahan ajar
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h45}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h45" id='h4510' defaultChecked={data.h45 === '1' && true} /> <label htmlFor='h4510' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h45" id='h4520' defaultChecked={data.h45 === '2' && true} /> <label htmlFor='h4520' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h45" id='h4530' defaultChecked={data.h45 === '3' && true} /> <label htmlFor='h4530' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h45" id='h4540' defaultChecked={data.h45 === '4' && true} /> <label htmlFor='h4540' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h45" id='h4550' defaultChecked={data.h45 === '5' && true} /> <label htmlFor='h4550' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h45 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h46">
                                            Kualitas dari fasilitas yang disediakan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h46}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h46" id='h4610' defaultChecked={data.h46 === '1' && true} /> <label htmlFor='h4610' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h46" id='h4620' defaultChecked={data.h46 === '2' && true} /> <label htmlFor='h4620' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h46" id='h4630' defaultChecked={data.h46 === '3' && true} /> <label htmlFor='h4630' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h46" id='h4640' defaultChecked={data.h46 === '4' && true} /> <label htmlFor='h4640' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h46" id='h4650' defaultChecked={data.h46 === '5' && true} /> <label htmlFor='h4650' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h46 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h47">
                                            Kualitas program magang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h47}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h47" id='h4710' defaultChecked={data.h47 === '1' && true} /> <label htmlFor='h4710' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h47" id='h4720' defaultChecked={data.h47 === '2' && true} /> <label htmlFor='h4720' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h47" id='h4730' defaultChecked={data.h47 === '3' && true} /> <label htmlFor='h4730' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h47" id='h4740' defaultChecked={data.h47 === '4' && true} /> <label htmlFor='h4740' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h47" id='h4750' defaultChecked={data.h47 === '5' && true} /> <label htmlFor='h4750' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h47 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h48">
                                            Kualitas pembelajaran bahasa asing
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h48}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h48" id='h4810' defaultChecked={data.h48 === '1' && true} /> <label htmlFor='h4810' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h48" id='h4820' defaultChecked={data.h48 === '2' && true} /> <label htmlFor='h4820' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h48" id='h4830' defaultChecked={data.h48 === '3' && true} /> <label htmlFor='h4830' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h48" id='h4840' defaultChecked={data.h48 === '4' && true} /> <label htmlFor='h4840' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h48" id='h4850' defaultChecked={data.h48 === '5' && true} /> <label htmlFor='h4850' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h48 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h49">
                                            Program pengembangan budaya kerja/karakter/soft skill
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h49}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h49" id='h4910' defaultChecked={data.h49 === '1' && true} /> <label htmlFor='h4910' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h49" id='h4920' defaultChecked={data.h49 === '2' && true} /> <label htmlFor='h4920' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h49" id='h4930' defaultChecked={data.h49 === '3' && true} /> <label htmlFor='h4930' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h49" id='h4940' defaultChecked={data.h49 === '4' && true} /> <label htmlFor='h4940' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h49" id='h4950' defaultChecked={data.h49 === '5' && true} /> <label htmlFor='h4950' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h49 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h50">
                                        Bagaimana Anda mendapatkan instansi/lembaga/perusahaan untuk magang selama studi?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.h50}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Permintaan industri tempat magang" name="h50" id='h5010' defaultChecked={data.h50 === 'Permintaan industri tempat magang' && true} /> <label htmlFor='h5010' className='text-sm text-gray-700'>Permintaan industri tempat magang</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ditempatkan oleh satuan pendidikan yang telah bermitra dengan satuan pendidikan" name="h50" id='h5020' defaultChecked={data.h50 === 'Ditempatkan oleh satuan pendidikan yang telah bermitra dengan satuan pendidikan' && true} /> <label htmlFor='h5020' className='text-sm text-gray-700'>Ditempatkan oleh satuan pendidikan yang telah bermitra dengan satuan pendidikan</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Mencari sendiri" name="h50" id='h5030' defaultChecked={data.h50 === 'Mencari sendiri' && true} /> <label htmlFor='h5030' className='text-sm text-gray-700'>Mencari sendiri</label></div>
                                    </div>
                                    {errors.h50 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans">
                                        Menurut Anda, bagaimana kualitas magang selama studi?
                                    </label>
                                    <div className="ml-4 md:ml-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h51">
                                            Penempatan magang oleh satuan pendidikan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h51}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h51" id='h5110' defaultChecked={data.h51 === '1' && true} /> <label htmlFor='h5110' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h51" id='h5120' defaultChecked={data.h51 === '2' && true} /> <label htmlFor='h5120' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h51" id='h5130' defaultChecked={data.h51 === '3' && true} /> <label htmlFor='h5130' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h51" id='h5140' defaultChecked={data.h51 === '4' && true} /> <label htmlFor='h5140' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h51" id='h5150' defaultChecked={data.h51 === '5' && true} /> <label htmlFor='h5150' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h51 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h52">
                                            Kejelasan kegiatan selama magang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h52}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h52" id='h5210' defaultChecked={data.h52 === '1' && true} /> <label htmlFor='h5210' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h52" id='h5220' defaultChecked={data.h52 === '2' && true} /> <label htmlFor='h5220' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h52" id='h5230' defaultChecked={data.h52 === '3' && true} /> <label htmlFor='h5230' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h52" id='h5240' defaultChecked={data.h52 === '4' && true} /> <label htmlFor='h5240' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h52" id='h5250' defaultChecked={data.h52 === '5' && true} /> <label htmlFor='h5250' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h52 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h53">
                                            Sarana praktik di tempat magang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h53}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h53" id='h5310' defaultChecked={data.h53 === '1' && true} /> <label htmlFor='h5310' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h53" id='h5320' defaultChecked={data.h53 === '2' && true} /> <label htmlFor='h5320' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h53" id='h5330' defaultChecked={data.h53 === '3' && true} /> <label htmlFor='h5330' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h53" id='h5340' defaultChecked={data.h53 === '4' && true} /> <label htmlFor='h5340' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h53" id='h5350' defaultChecked={data.h53 === '5' && true} /> <label htmlFor='h5350' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h53 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h54">
                                            Bimbingan selama magang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h54}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h54" id='h5410' defaultChecked={data.h54 === '1' && true} /> <label htmlFor='h5410' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h54" id='h5420' defaultChecked={data.h54 === '2' && true} /> <label htmlFor='h5420' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h54" id='h5430' defaultChecked={data.h54 === '3' && true} /> <label htmlFor='h5430' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h54" id='h5440' defaultChecked={data.h54 === '4' && true} /> <label htmlFor='h5440' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h54" id='h5450' defaultChecked={data.h54 === '5' && true} /> <label htmlFor='h5450' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h54 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h55">
                                            Evaluasi setelah selesai magang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h55}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h55" id='h5510' defaultChecked={data.h55 === '1' && true} /> <label htmlFor='h5510' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h55" id='h5520' defaultChecked={data.h55 === '2' && true} /> <label htmlFor='h5520' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h55" id='h5530' defaultChecked={data.h55 === '3' && true} /> <label htmlFor='h5530' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h55" id='h5540' defaultChecked={data.h55 === '4' && true} /> <label htmlFor='h5540' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h55" id='h5550' defaultChecked={data.h55 === '5' && true} /> <label htmlFor='h5550' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h55 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h56">
                                            Penyaluran bekerja setelah selesai magang
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h56}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h56" id='h5610' defaultChecked={data.h56 === '1' && true} /> <label htmlFor='h5610' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h56" id='h5620' defaultChecked={data.h56 === '2' && true} /> <label htmlFor='h5620' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h56" id='h5630' defaultChecked={data.h56 === '3' && true} /> <label htmlFor='h5630' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h56" id='h5640' defaultChecked={data.h56 === '4' && true} /> <label htmlFor='h5640' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h56" id='h5650' defaultChecked={data.h56 === '5' && true} /> <label htmlFor='h5650' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h56 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h57">
                                            Kesesuaian tugas magang dengan prodi/bidang keahlian/jenis keterampilan di satuan pendidikan
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h57}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h57" id='h5710' defaultChecked={data.h57 === '1' && true} /> <label htmlFor='h5710' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h57" id='h5720' defaultChecked={data.h57 === '2' && true} /> <label htmlFor='h5720' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h57" id='h5730' defaultChecked={data.h57 === '3' && true} /> <label htmlFor='h5730' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h57" id='h5740' defaultChecked={data.h57 === '4' && true} /> <label htmlFor='h5740' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h57" id='h5750' defaultChecked={data.h57 === '5' && true} /> <label htmlFor='h5750' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h57 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                        <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="h58">
                                            Kurikulum berstandar industri
                                        </label>
                                        <div className='flex items-center gap-x-4 border w-fit p-1 rounded-md px-3 mb-5' onChange={handleChange} value={data.h58}>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="1" name="h58" id='h5810' defaultChecked={data.h58 === '1' && true} /> <label htmlFor='h5810' className='text-sm text-gray-700'>1</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="2" name="h58" id='h5820' defaultChecked={data.h58 === '2' && true} /> <label htmlFor='h5820' className='text-sm text-gray-700'>2</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="3" name="h58" id='h5830' defaultChecked={data.h58 === '3' && true} /> <label htmlFor='h5830' className='text-sm text-gray-700'>3</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="4" name="h58" id='h5840' defaultChecked={data.h58 === '4' && true} /> <label htmlFor='h5840' className='text-sm text-gray-700'>4</label>
                                            <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="5" name="h58" id='h5850' defaultChecked={data.h58 === '5' && true} /> <label htmlFor='h5850' className='text-sm text-gray-700'>5</label>
                                        </div>
                                        {errors.h58 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span>Required.</span>
                                        </div>}
                                    </div>
                                </div>
                                <hr />
                                <div className='flex items-center gap-x-4 mt-5'>
                                    <div className='w-1/2'>
                                        {dataKuesioner.d1 !== null && <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit4', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>}
                                        {dataKuesioner.e1 !== null && <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit5', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>}
                                        {dataKuesioner.f1 !== null && <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit6', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>}
                                    </div>
                                    <div className='w-1/2'>
                                        <div className="grid justify-end">
                                            <Button>
                                                Store
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
