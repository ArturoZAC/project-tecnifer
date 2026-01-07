<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        return response()->json(Service::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'image' => 'nullable|image',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('services'), $fileName);
            $imagePath = 'services/' . $fileName;
        }

        $service = Service::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imagePath,
        ]);

        return response()->json($service, 201);
    }

    public function show($id)
    {
        return response()->json(Service::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string',
            'description' => 'sometimes|string',
            'image' => 'nullable|image',
        ]);

        if ($request->has('title')) {
            $service->title = $request->title;
        }

        if ($request->has('description')) {
            $service->description = $request->description;
        }

        if ($request->hasFile('image')) {
            // Borrar imagen anterior
            if ($service->image && file_exists(public_path($service->image))) {
                unlink(public_path($service->image));
            }

            $file = $request->file('image');
            $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('services'), $fileName);
            $service->image = 'services/' . $fileName;
        }

        $service->save();

        return response()->json($service);
    }

    public function destroy($id)
    {
        $service = Service::findOrFail($id);

        if ($service->image && file_exists(public_path($service->image))) {
            unlink(public_path($service->image));
        }

        $service->delete();

        return response()->json(['message' => 'Servicio eliminado correctamente']);
    }
}
