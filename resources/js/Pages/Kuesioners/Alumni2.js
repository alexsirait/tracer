import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import { useForm } from '@inertiajs/inertia-react'

export default function Alumni2(props) {
    const { dataKuesioner } = props
    const { data, setData, put, errors } = useForm({
        b1: dataKuesioner.b1 || '',
        b2: dataKuesioner.b2 || '',
        b3: dataKuesioner.b3 || '',
        b4: dataKuesioner.b4 || '',
        b5: dataKuesioner.b5 || '',
        b6: dataKuesioner.b6 || '',
        b7: dataKuesioner.b7 || '',
        b8: dataKuesioner.b8 || '',
        b9: dataKuesioner.b9 || '',
        b10: dataKuesioner.b10 || '',
        b11: dataKuesioner.b11 || '',
        b12: dataKuesioner.b12 || '',
        b13: dataKuesioner.b13 || '',
        b14: dataKuesioner.b14 || '',
        b15: dataKuesioner.b15 || '',
        b16: dataKuesioner.b16 || '',
    })
    const updateHandler = (e) => {
        e.preventDefault()
        put(route('kuesioner.alumni.update2', dataKuesioner.id))
    }
    const handleChange = (e) => setData(e.target.name, e.target.value)
    const [show, setShow] = useState(false)
    const [showLainnya, setShowLainnya] = useState(false)
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
                                    <h1 className='block text-2xl mb-3 text-gray-700 tracking-tight font-bold'>Status aktifitas saat ini</h1>
                                    <hr />
                                </div>
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b1">
                                        Apakah saat ini Anda sedang bersekolah/kuliah?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.b1}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="b1" id="b110" defaultChecked={data.b1 === 'Ya' && true} onClick={(e)=>setShow(true)} /> <label htmlFor="b110" className='text-sm text-gray-700'>Ya</label>
                                        <input  className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="b1" id="b120" defaultChecked={data.b1 === 'Tidak' && true} onClick={(e)=>setShow(false)}/> <label htmlFor="b120" className='text-sm text-gray-700'>Tidak</label>
                                    </div>
                                    {errors.b1 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                {show && data.b1 == "Ya" || data.b1 == 'Ya' ? (
                                    <div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b2">
                                                Jenjang pendidikan apa yang sedang ditempuh?
                                            </label>
                                            <div className='block items-center gap-x-4' onChange={handleChange} value={data.b2}>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="D1" name="b2" id='b210' defaultChecked={data.b2 === 'D1' && true} /> <label htmlFor='b210' className='text-sm text-gray-700'>D1</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="D2" name="b2" id='b220' defaultChecked={data.b2 === 'D2' && true} /> <label htmlFor='b220' className='text-sm text-gray-700'>D2</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="D3" name="b2" id='b230' defaultChecked={data.b2 === 'D3' && true} /> <label htmlFor='b230' className='text-sm text-gray-700'>D3</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="D4/Sarjana Terapan" name="b2" id='b240' defaultChecked={data.b2 === 'D4/Sarjana Terapan' && true} /> <label htmlFor='b240' className='text-sm text-gray-700'>D4/Sarjana Terapan</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="S1" name="b2" id='b250' defaultChecked={data.b2 === 'S1' && true} /> <label htmlFor='b250' className='text-sm text-gray-700'>S1</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="S2" name="b2" id='b260' defaultChecked={data.b2 === 'S2' && true} /> <label htmlFor='b260' className='text-sm text-gray-700'>S2</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="S2 Terapan" name="b2" id='b270' defaultChecked={data.b2 === 'S2 Terapan' && true} /> <label htmlFor='b270' className='text-sm text-gray-700'>S2 Terapan</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="S3" name="b2" id='b280' defaultChecked={data.b2 === 'S3' && true} /> <label htmlFor='b280' className='text-sm text-gray-700'>S3</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="S3 Terapan" name="b2" id='b290' defaultChecked={data.b2 === 'S3 Terapan' && true} /> <label htmlFor='b290' className='text-sm text-gray-700'>S3 Terapan</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak Selaras" name="b2" id='b2100' defaultChecked={data.b2 === 'Tidak Selaras' && true} /> <label htmlFor='b2100' className='text-sm text-gray-700'>Tidak Selaras</label></div>
                                            </div>
                                            {errors && <div className='text-red-600 mt-1'>{errors.b2}</div>}
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b3">
                                                Kapan anda mulai studi?
                                            </label>
                                            <Input placeholder={`e.g. 1 bulan setelah lulus / 1 tahun setelah lulus`} className='w-full lg:w-96' type='text' name='b3' value={data.b3} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.b3}</div>}
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b16">
                                                Apa prodi anda dalam studi tersebut?
                                            </label>
                                            <Input placeholder={`e.g. Teknik Informatika`} className='w-full lg:w-96' type='text' name='b16' value={data.b16} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.b16}</div>}
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="b4">
                                                Apa alasan Anda melanjutkan pendidikan? (boleh lebih dari satu jawaban)
                                            </label>
                                            <div className='block items-center gap-x-4'>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b4" id='b410' onChange={e => setData('b4', e.target.checked)} defaultChecked={data.b4 == '1' && true}/> <label htmlFor='b410' className='text-sm text-gray-700'>Meningkatkan kompetensi</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b5" id='b510' onChange={e => setData('b5', e.target.checked)} defaultChecked={data.b5 == '1' && true}/> <label htmlFor='b510' className='text-sm text-gray-700'>Mengembangkan karir</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b6" id='b610' onChange={e => setData('b6', e.target.checked)} defaultChecked={data.b6 == '1' && true}/> <label htmlFor='b610' className='text-sm text-gray-700'>Meningkatkan status sosial</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b7" id='b710' onChange={e => setData('b7', e.target.checked)} defaultChecked={data.b7 == '1' && true}/> <label htmlFor='b710' className='text-sm text-gray-700'>Memperoleh beasiswa</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b8" id='b810' onChange={e => setData('b8', e.target.checked)} defaultChecked={data.b8 == '1' && true}/> <label htmlFor='b810' className='text-sm text-gray-700'>Diminta orang tua</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b9" id='b910' onChange={e => setData('b9', e.target.checked)} defaultChecked={data.b9 == '1' && true}/> <label htmlFor='b910' className='text-sm text-gray-700'>Diminta oleh instansi tempat bekerja</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b10" id='b1010' onChange={e => setData('b10', e.target.checked)} defaultChecked={data.b10 == '1' && true}/> <label htmlFor='b1010' className='text-sm text-gray-700'>Belum menemukan pekerjaan yang tepat</label></div>
                                                <div><input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="checkbox" name="b11" id='b1110' onChange={e => setData('b11', e.target.checked)} defaultChecked={data.b11 == '1' && true} onClick={() => setShowLainnya(true)} /> <label htmlFor='b1110' className='text-sm text-gray-700'>Lainnya</label></div>
                                            </div>
                                            {showLainnya && data.b11 == "1" || data.b11 == '1' ? (
                                                <Input placeholder={`lainnya . . .`} className='w-full lg:w-96' type='text' name='b12' value={data.b12} handleChange={handleChange}/>)
                                            : ''}
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b13">
                                                Nama instansi pendidikan lanjut
                                            </label>
                                            <Input placeholder={`e.g. Universitas Jaya Selalu`} className='w-full lg:w-96' type='text' name='b13' value={data.b13} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.b13}</div>}
                                        </div>
                                    </div> )
                                : ''}
                                <div className="mb-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b14">
                                        Apakah anda sedang atau pernah mengikuti pelatihan atau sertifikasi?
                                    </label>
                                    <div className='flex items-center gap-x-4' onChange={handleChange} value={data.b14}>
                                        <input className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Ya" name="b14" id='b1410' defaultChecked={data.b14 === 'Ya' && true} onClick={(e)=>setShow(true)} /> <label htmlFor='b1410' className='text-sm text-gray-700'>Ya</label>
                                        <input  className='border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm text-gray-800' type="radio" value="Tidak" name="b14" id='b1420' defaultChecked={data.b14 === 'Tidak' && true} onClick={(e)=>setShow(false)} /> <label htmlFor='b1420' className='text-sm text-gray-700'>Tidak</label>
                                    </div>
                                    {errors.b14 && <div className='text-red-600 mt-1 flex items-center gap-x-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Required.</span>
                                    </div>}
                                </div>
                                {show && data.b14 == "Ya" || data.b14 == 'Ya' ? (
                                    <div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2 text-md tracking-tight font-sans" htmlFor="b15">
                                                Apa jenis pelatihan atau sertifikasi yang sedang atau pernah diikuti?
                                            </label>
                                            <Input placeholder={`e.g. Laravel Certification`} className='w-full lg:w-96' type='text' name='b15' value={data.b15} handleChange={handleChange}/>
                                            {errors && <div className='text-red-600 mt-1'>{errors.b15}</div>}
                                        </div>
                                    </div> )
                                : ''}
                                <hr />
                                <div className='flex items-center gap-x-4 mt-5'>
                                    <div className='w-1/2'>
                                        <Link className='inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black shadow-md transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none' href={route('kuesioner.alumni.edit', dataKuesioner.id)}>
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
