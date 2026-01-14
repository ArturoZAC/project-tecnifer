<?php

namespace App\Http\Controllers;

use App\Mail\FormularioContactoMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{

  private function validarCaptcha(string $captcha, Request $request): bool
  {
    //*Esto es para produccion:
    // $response = Http::asForm()->post(
    //   'https://www.google.com/recaptcha/api/siteverify',
    //   [
    //     'secret' => config('services.recaptcha.secret'),
    //     'response' => $captcha,
    //     'remoteip' => $request->ip(),
    //   ]
    // );

    //*Esto es para desarrollo:
    $response = Http::asForm()
      ->withoutVerifying()
      ->post(
        'https://www.google.com/recaptcha/api/siteverify',
        [
          'secret' => config('services.recaptcha.secret'),
          'response' => $captcha,
          'remoteip' => $request->ip(),
        ]
      );

    $result = $response->json();

    return $result['success'] ?? false;
  }

  /**
   * Enviar reclamo
   */
  // public function enviarReclamo(Request $request)
  // {
  //   $data = $request->validate([
  //     'complaintType' => 'required|string',
  //     'details' => 'required|string',
  //     'documentNumber' => 'required|string',
  //     'documentType' => 'required|string',
  //     'email' => 'required|email',
  //     'names' => 'required|string',
  //     'phone' => 'required|string',
  //     'service' => 'required|string',
  //     'surnames' => 'required|string',
  //     'captcha' => 'required|string',
  //   ]);

  //   if (!$this->validarCaptcha($data['captcha'], $request)) {
  //     return response()->json([
  //       'message' => 'Verificación de seguridad fallida',
  //     ], 422);
  //   }

  //   unset($data['captcha']);

  //   Mail::to(env('MAIL_MAIN_DIRECTIONS'))
  //     ->send(new LibroReclamacionesMail($data));

  //   return response()->json([
  //     'message' => 'Reclamo enviado correctamente',
  //   ]);
  // }

  /**
   * Enviar contacto
   */
  public function enviarContacto(Request $request)
  {
    $data = $request->validate([
      'fullName' => 'required|string',
      'email' => 'required|email',
      'phone' => 'required|string',
      // 'product' => 'required|string',
      'message' => 'required|string',
      'captcha' => 'required|string',
    ]);

    if (!$this->validarCaptcha($data['captcha'], $request)) {
      return response()->json([
        'message' => 'Verificación de seguridad fallida',
      ], 422);
    }

    unset($data['captcha']);


    $emails = array_map('trim', explode(',', env('MAIL_MAIN_DIRECTIONS')));

    Mail::to($emails)
      ->send(new FormularioContactoMail($data));

    // Mail::to(env('MAIL_MAIN_DIRECTIONS'))
    //   ->send(new FormularioContactoMail($data));

    return response()->json([
      'message' => 'Formulario enviado correctamente',
    ]);
  }
}
