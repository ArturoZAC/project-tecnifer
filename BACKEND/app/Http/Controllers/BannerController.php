<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    // Listar todos los banners
    public function index()
    {
        return response()->json(Banner::all());
    }

    // Mostrar un banner específico
    public function show($id)
    {
        return response()->json(Banner::findOrFail($id));
    }

    // Crear un banner
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'slogan' => 'required|string',
            'image' => 'nullable|image',
            'type' => 'nullable|in:button,wtsp-button',
            'name' => 'nullable|string',
            'number' => 'nullable|string',
            'message' => 'nullable|string',
        ]);

        $bannerData = $request->only(['title', 'slogan', 'type', 'name', 'number', 'message']);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('banners'), $fileName);
            $bannerData['image'] = 'banners/' . $fileName;
        }

        $banner = Banner::create($bannerData);

        return response()->json($banner);
    }

    // Actualizar un banner
    public function update(Request $request, $id)
    {
        $banner = Banner::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string',
            'slogan' => 'sometimes|string',
            'image' => 'nullable|image',
            'type' => 'nullable|in:button,wtsp-button',
            'name' => 'nullable|string',
            'number' => 'nullable|string',
            'message' => 'nullable|string',
        ]);

        $bannerData = $request->only(['title', 'slogan', 'type', 'name', 'number', 'message']);

        // Actualizar imagen si viene nueva
        if ($request->hasFile('image')) {
            // Borrar imagen anterior
            if ($banner->image && file_exists(public_path($banner->image))) {
                unlink(public_path($banner->image));
            }

            $file = $request->file('image');
            $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('banners'), $fileName);
            $bannerData['image'] = 'banners/' . $fileName;
        }

        $banner->update($bannerData);

        return response()->json($banner);
    }

    // Eliminar un banner
    public function destroy($id)
    {
        $banner = Banner::findOrFail($id);

        if ($banner->image && file_exists(public_path($banner->image))) {
            unlink(public_path($banner->image));
        }

        $banner->delete();

        return response()->json(['message' => 'Banner eliminado correctamente']);
    }
}
