<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FormularioContactoMail extends Mailable
{
  use Queueable, SerializesModels;

  public $data;

  public function __construct($data)
  {
    $this->data = $data;
  }

  public function build()
  {
    return $this->subject('Nuevo Formulario de Contacto - Alpha Mining')
      ->view('emails.contacto')
      ->with(['data' => $this->data]);
  }
}