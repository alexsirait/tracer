<?php

namespace App\Http\Controllers;

use App\Exports\KuesionerAlumniExport;
use App\Models\KuesionerAlumni;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class KuesionerAlumniController extends Controller
{
    public function index()
    {
        $userLoginKuesioner = KuesionerAlumni::where('user_id', auth()->user()->id)->latest()->first();
        return inertia('Kuesioners/StartAlumni', [
            'kuesionerAlumni' => $userLoginKuesioner
        ]);
    }

    public function store(Request $request)
    {
        $user = $request->user()->kuesioneralumnis()->create();
        return redirect(route('kuesioner.alumni.edit', $user->id));
    }

    public function edit(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'a1' => ['required'],
            'a2' => ['required', 'numeric'],
            'a3' => ['required', 'numeric'],
            'a4' => ['required', 'numeric'],
            'a5' => ['required'],
            'a6' => ['required', 'numeric'],
            'a7' => ['required'],
            'a8' => ['required'],
            'a9' => ['required'],
            'a10' => ['required'],
            'a11' => ['required', 'email'],
            'a12' => ['required', 'numeric'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        return redirect(route('kuesioner.alumni.edit2', $kuesionerAlumni->id));
    }

    public function edit2(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni2', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update2(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'b1' => ['required'],
            'b2' => ['nullable'],
            'b3' => ['nullable'],
            'b4' => ['nullable'],
            'b5' => ['nullable'],
            'b6' => ['nullable'],
            'b7' => ['nullable'],
            'b8' => ['nullable'],
            'b9' => ['nullable'],
            'b10' => ['nullable'],
            'b11' => ['nullable'],
            'b12' => ['nullable'],
            'b13' => ['nullable'],
            'b14' => ['required'],
            'b15' => ['nullable'],
            'b16' => ['nullable'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        return redirect(route('kuesioner.alumni.edit3', $kuesionerAlumni->id));
    }

    public function edit3(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni3', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update3(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'c1' => ['required'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        $kuesionerAlumniAll = $kuesionerAlumni->c1;
        switch ($kuesionerAlumniAll) {
            case "Bekerja":
                return redirect(route('kuesioner.alumni.edit4', $kuesionerAlumni->id));
              break;
            case "Berwirausaha":
                return redirect(route('kuesioner.alumni.edit5', $kuesionerAlumni->id));
              break;
            case "Sedang Mencari Pekerjaan":
                return redirect(route('kuesioner.alumni.edit6', $kuesionerAlumni->id));
              break;
            default:
              abort(404);
        }
    }

    public function edit4(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni4', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update4(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'd1' => ['required'],
            'd2' => ['required'],
            'd3' => ['required'],
            'd4' => ['required'],
            'd5' => ['required'],
            'd6' => ['required'],
            'd7' => ['nullable'],
            'd8' => ['required'],
            'd9' => ['required'],
            'd10' => ['required'],
            'd11' => ['nullable'],
            'd12' => ['required'],
            'd13' => ['required'],
            'd14' => ['nullable'],
            'd15' => ['required'],
            'd16' => ['nullable'],
            'd17' => ['required'],
            'd18' => ['required'],
            'd19' => ['required'],
            'd20' => ['required'],
            'd21' => ['required'],
            'd22' => ['required'],
            'd23' => ['nullable'],
            'd24' => ['required'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        return redirect(route('kuesioner.alumni.edit7', $kuesionerAlumni->id));
    }

    public function edit5(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni5', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update5(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'e1' => ['required'],
            'e2' => ['nullable'],
            'e3' => ['required'],
            'e4' => ['required'],
            'e5' => ['required'],
            'e6' => ['required'],
            'e7' => ['required'],
            'e8' => ['required'],
            'e9' => ['required'],
            'e10' => ['required'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        return redirect(route('kuesioner.alumni.edit7', $kuesionerAlumni->id));
    }

    public function edit6(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni6', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update6(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'f1' => ['required'],
            'f2' => ['required'],
            'f3' => ['required'],
            'f4' => ['required'],
            'f5' => ['nullable'],
            'f6' => ['required'],
            'f7' => ['nullable'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        return redirect(route('kuesioner.alumni.edit7', $kuesionerAlumni->id));
    }

    public function edit7(KuesionerAlumni $kuesionerAlumni)
    {
        $dataKuesioner = $kuesionerAlumni->where('user_id', auth()->user()->id)->latest()->first();
        if ($dataKuesioner != $kuesionerAlumni) {
            return redirect(route('kuesioner.alumni.index'));
        }
        return inertia('Kuesioners/Alumni7', [
            'dataKuesioner' => $dataKuesioner
        ]);
    }

    public function update7(Request $request, KuesionerAlumni $kuesionerAlumni)
    {
        $kuesionerAlumniUpdate = $request->validate([
            'h1' => ['nullable'],
            'h2' => ['nullable'],
            'h3' => ['nullable'],
            'h4' => ['nullable'],
            'h5' => ['nullable'],
            'h6' => ['nullable'],
            'h7' => ['nullable'],
            'h8' => ['required'],
            'h9' => ['required'],
            'h10' => ['required'],
            'h11' => ['required'],
            'h12' => ['required'],
            'h13' => ['required'],
            'h14' => ['required'],
            'h15' => ['required'],
            'h16' => ['required'],
            'h17' => ['required'],
            'h18' => ['required'],
            'h19' => ['required'],
            'h20' => ['required'],
            'h21' => ['required'],
            'h22' => ['required'],
            'h23' => ['required'],
            'h24' => ['required'],
            'h25' => ['required'],
            'h26' => ['required'],
            'h27' => ['required'],
            'h28' => ['required'],
            'h29' => ['required'],
            'h30' => ['required'],
            'h31' => ['required'],
            'h32' => ['required'],
            'h33' => ['required'],
            'h34' => ['required'],
            'h35' => ['required'],
            'h36' => ['required'],
            'h37' => ['required'],
            'h38' => ['required'],
            'h39' => ['required'],
            'h40' => ['required'],
            'h41' => ['required'],
            'h42' => ['required'],
            'h43' => ['required'],
            'h44' => ['required'],
            'h45' => ['required'],
            'h46' => ['required'],
            'h47' => ['required'],
            'h48' => ['required'],
            'h49' => ['required'],
            'h50' => ['required'],
            'h51' => ['required'],
            'h52' => ['required'],
            'h53' => ['required'],
            'h54' => ['required'],
            'h55' => ['required'],
            'h56' => ['required'],
            'h57' => ['required'],
            'h58' => ['required'],
        ]);
        $kuesionerAlumni->update($kuesionerAlumniUpdate);
        return redirect(route('dashboard'))->with(['type2' => '1']);
    }
}
