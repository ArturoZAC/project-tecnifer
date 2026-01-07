<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Listar todos los productos
    public function index()
    {
        return response()->json(Product::all());
    }

    // Crear un nuevo producto
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
            $file->move(public_path('products'), $fileName);
            $imagePath = 'products/' . $fileName;
        }

        $product = Product::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imagePath,
        ]);

        return response()->json($product);
    }

    // Mostrar un producto
    public function show($id)
    {
        return response()->json(Product::findOrFail($id));
    }

    // Actualizar producto
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string',
            'description' => 'sometimes|string',
            'image' => 'nullable|image',
        ]);

        if ($request->has('title')) {
            $product->title = $request->title;
        }

        if ($request->has('description')) {
            $product->description = $request->description;
        }

        if ($request->hasFile('image')) {
            // borrar imagen anterior
            if ($product->image && file_exists(public_path($product->image))) {
                unlink(public_path($product->image));
            }

            $file = $request->file('image');
            $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('products'), $fileName);
            $product->image = 'products/' . $fileName;
        }

        $product->save();

        return response()->json($product);
    }

    // Eliminar producto
    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        if ($product->image && file_exists(public_path($product->image))) {
            unlink(public_path($product->image));
        }

        $product->delete();

        return response()->json(['message' => 'Producto eliminado']);
    }
}
