import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni6(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        f1: dataKuesioner.f1 || '',
        f2: dataKuesioner.f2 || '',
        f3: dataKuesioner.f3 || '',
        f4: dataKuesioner.f4 || '',
        f5: dataKuesioner.f5 || '',
        f6: dataKuesioner.f6 || '',
        f7: dataKuesioner.f7 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update6', dataKuesioner.id))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    const [show, setShow] = useState(false)
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
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Lulusan yang sedang mencari pekerjaan</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f1">
                                        Apa anda sedang mencari pekerjaan?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.f1}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="f1" id='f110' defaultChecked={data.f1 === 'Ya' && true} /> <label htmlFor='f110' className='text-sm text-gray-700'>Ya</label>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="f1" id='f120' defaultChecked={data.f1 === 'Tidak' && true} /> <label htmlFor='f120' className='text-sm text-gray-700'>Tidak</label>
                                    </div>
                                    {errors.f1 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f2">
                                        Apakah anda sedang mempersiapkan suatu usaha/wirausaha?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.f2}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="f2" id='f210' defaultChecked={data.f2 === 'Ya' && true} /> <label htmlFor='f210' className='text-sm text-gray-700'>Ya</label>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="f2" id='f220' defaultChecked={data.f2 === 'Tidak' && true} /> <label htmlFor='f220' className='text-sm text-gray-700'>Tidak</label>
                                    </div>
                                    {errors.f2 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f3">
                                        Sudah berapa lama (hitungan bulan) Anda mencari pekerjaan atau mempersiapkan suatu usaha/wirausaha?
                                    </label>
                                    <Input placeholder={`e.g. 3 bulan setelah lulus`} className='w-full lg:w-96' type='text' name='f3' value={data.f3} handleChange={handleChange}/>
                                    {errors.f3 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f4">
                                        Apa alasan utama mencari pekerjaan atau mempersiapkan suatu usaha/wirausaha?
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.f4}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tamat sekolah/tidak bersekolah lagi" name="f4" id='f410' defaultChecked={data.f4 === 'Tamat sekolah/tidak bersekolah lagi' && true} /> <label htmlFor='f410' className='text-sm text-gray-700'>Tamat sekolah/tidak bersekolah lagi</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tanggung jawab mencari nafkah" name="f4" id='f420' defaultChecked={data.f4 === 'Tanggung jawab mencari nafkah' && true} /> <label htmlFor='f420' className='text-sm text-gray-700'>Tanggung jawab mencari nafkah</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Menambah penghasilan" name="f4" id='f430' defaultChecked={data.f4 === 'Menambah penghasilan' && true} /> <label htmlFor='f430' className='text-sm text-gray-700'>Menambah penghasilan</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Pekerjaan yang ada kurang sesuai dengan pendidikan (bidang keahlian)" name="f4" id='f440' defaultChecked={data.f4 === 'Pekerjaan yang ada kurang sesuai dengan pendidikan (bidang keahlian)' && true} /> <label htmlFor='f440' className='text-sm text-gray-700'>Pekerjaan yang ada kurang sesuai dengan pendidikan (bidang keahlian)</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Pekerjaan yang ada kurang sesuai dengan upah gaji dan lingkungan kerja" name="f4" id='f450' defaultChecked={data.f4 === 'Pekerjaan yang ada kurang sesuai dengan upah gaji dan lingkungan kerja' && true} /> <label htmlFor='f450' className='text-sm text-gray-700'>Pekerjaan yang ada kurang sesuai dengan upah gaji dan lingkungan kerja</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Putus Hubungan Kerja (PHK)" name="f4" id='f460' defaultChecked={data.f4 === 'Putus Hubungan Kerja (PHK)' && true} /> <label htmlFor='f460' className='text-sm text-gray-700'>Putus Hubungan Kerja (PHK)</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Usaha bangkrut (gulung tikar)" name="f4" id='f470' defaultChecked={data.f4 === 'Usaha bangkrut (gulung tikar)' && true} /> <label htmlFor='f470' className='text-sm text-gray-700'>Usaha bangkrut (gulung tikar)</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Masa kontrak habis" name="f4" id='f480' defaultChecked={data.f4 === 'Masa kontrak habis' && true} /> <label htmlFor='f480' className='text-sm text-gray-700'>Masa kontrak habis</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="f4" id='f490' defaultChecked={data.f4 === 'Lainnya' && true} onClick={(e)=>setShow(true)} /> <label htmlFor='f490' className='text-sm text-gray-700'>Lainnya</label></div>
                                    </div>
                                    {errors.f4 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                    {show && data.f4 == "Lainnya" || data.f4 == 'Lainnya' ? (
                                        <div>
                                            <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='f5' value={data.f5} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.f5}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="f6">
                                        Alasan utama tidak mencari pekerjaan atau mempersiapkan suatu usaha/wirausaha setelah lulus kuliah
                                    </label>
                                    <div className='block items-center gap-x-4' onChange={handleChange} value={data.f6}>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sudah diterima bekerja/sudah mempunyai usaha, tetapi belum mulai bekerja/belum memulai usaha" name="f6" id='f610' defaultChecked={data.f6 === 'Sudah diterima bekerja/sudah mempunyai usaha, tetapi belum mulai bekerja/belum memulai usaha' && true} /> <label htmlFor='f610' className='text-sm text-gray-700'>Sudah diterima bekerja/sudah mempunyai usaha, tetapi belum mulai bekerja/belum memulai usaha</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Putus asa (sudah mencoba berulang kali tapi tidak kunjung mendapatkan pekerjaan)" name="f6" id='f620' defaultChecked={data.f6 === 'Putus asa (sudah mencoba berulang kali tapi tidak kunjung mendapatkan pekerjaan)' && true} /> <label htmlFor='f620' className='text-sm text-gray-700'>Putus asa (sudah mencoba berulang kali tapi tidak kunjung mendapatkan pekerjaan)</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sudah mempunyai pekerjaan/usaha" name="f6" id='f630' defaultChecked={data.f6 === 'Sudah mempunyai pekerjaan/usaha' && true} /> <label htmlFor='f630' className='text-sm text-gray-700'>Sudah mempunyai pekerjaan/usaha</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Mengurus rumah tangga" name="f6" id='f640' defaultChecked={data.f6 === 'Mengurus rumah tangga' && true} /> <label htmlFor='f640' className='text-sm text-gray-700'>Mengurus rumah tangga</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Sedang melanjutkan pendidikan" name="f6" id='f650' defaultChecked={data.f6 === 'Sedang melanjutkan pendidikan' && true} /> <label htmlFor='f650' className='text-sm text-gray-700'>Sedang melanjutkan pendidikan</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak mempunyai modal" name="f6" id='f660' defaultChecked={data.f6 === 'Tidak mempunyai modal' && true} /> <label htmlFor='f660' className='text-sm text-gray-700'>Tidak mempunyai modal</label></div>
                                        <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Lainnya" name="f6" id='f670' defaultChecked={data.f6 === 'Lainnya' && true} onClick={(e)=>setShow(true)} /> <label htmlFor='f670' className='text-sm text-gray-700'>Lainnya</label></div>
                                    </div>
                                    {errors.f6 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                    {show && data.f6 == "Lainnya" || data.f6 == 'Lainnya' ? (
                                        <div>
                                            <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='f7' value={data.f7} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.f7}</div>}
                                        </div>)
                                    : ''}
                                </div>
                                <hr />
                                <div className='flex items-center gap-x-4 mt-5'>
                                    <div className='w-1/2'>
                                        <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit3', dataKuesioner.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className='w-1/2'>
                                        <div className="grid justify-end">
                                            <Button>
                                                <span>Save</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
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
