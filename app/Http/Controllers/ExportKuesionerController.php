<?php

namespace App\Http\Controllers;

use App\Exports\KuesionerAlumniExport;
use App\Exports\KuesionerPerusahaanExport;
use App\Models\KuesionerAlumni;
use App\Models\KuesionerPerusahaan;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportKuesionerController extends Controller
{
    public function index()
    {
        return inertia('ExportKuesioner');
    }

    public function kuesionerAlumniExport()
    {
        return Excel::download(new KuesionerAlumniExport, 'kuesionerAlumni.xlsx');
    }

    public function kuesionerPerusahaanExport()
    {
        return Excel::download(new KuesionerPerusahaanExport, 'kuesionerPerusahaan.xlsx');
    }
}
