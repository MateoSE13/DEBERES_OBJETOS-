// Crea un archivo llamado hola-mundo.controller.ts

import { Controller, Get } from '@nestjs/common';

@Controller()
export class HolaMundoController {
  @Get()
  holaMundo(): string {
    return "¡Hola Mundo!";
  }
}
