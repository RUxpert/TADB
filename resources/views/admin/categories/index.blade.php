@extends('layouts.admin')

@section('content')
<div class="flex justify-between items-center mb-6">
    <h1 class="text-3xl font-bold">Manajemen Kategori</h1>

    <button class="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700">
        + Tambah Kategori
    </button>
</div>

<div class="bg-white rounded-2xl shadow border overflow-hidden">

    <table class="w-full text-left">
        <thead class="bg-slate-100 text-slate-600 text-sm uppercase">
            <tr>
                <th class="p-4">No</th>
                <th class="p-4">Nama Kategori</th>
                <th class="p-4">Aksi</th>
            </tr>
        </thead>

        <tbody class="divide-y">

            <tr class="hover:bg-slate-50">
                <td class="p-4">1</td>
                <td class="p-4 font-medium">Seminar</td>
                <td class="p-4 space-x-2">
                    <button class="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
                    <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Hapus</button>
                </td>
            </tr>

            <tr class="hover:bg-slate-50">
                <td class="p-4">2</td>
                <td class="p-4 font-medium">Konser</td>
                <td class="p-4 space-x-2">
                    <button class="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
                    <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Hapus</button>
                </td>
            </tr>

            <tr class="hover:bg-slate-50">
                <td class="p-4">3</td>
                <td class="p-4 font-medium">Workshop</td>
                <td class="p-4 space-x-2">
                    <button class="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">Edit</button>
                    <button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Hapus</button>
                </td>
            </tr>

        </tbody>
    </table>

</div>
@endsection