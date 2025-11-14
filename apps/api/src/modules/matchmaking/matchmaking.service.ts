// Conceptual: apps/api/src/modules/matchmaking/matchmaking.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { latLngToCell, gridDisk } from 'h3-js';

@Injectable()
export class MatchmakingService {
  constructor(private prisma: PrismaService) {}

  async findNearbyPlayers(latitude: number, longitude: number) {
    // 1. Definimos la resolución de H3. Un valor entre 8 y 10 es bueno para
    //    una precisión a nivel de barrio/ciudad.
    const resolution = 9;

    // 2. Convertimos las coordenadas del jugador en un índice H3.
    const playerH3Index = latLngToCell(latitude, longitude, resolution);

    // 3. Obtenemos los hexágonos vecinos en un radio de K hexágonos.
    //    K=3 podría ser un buen punto de partida (aprox. 1-2 km).
    const neighborH3Indexes = gridDisk(playerH3Index, 3);

    // Prisma necesita que los BigInt se pasen como BigInt, no como números.
    const searchIndexes = neighborH3Indexes.map(h3.h3IndexToBigInt);

    // 4. Buscamos en la base de datos. ¡Esta consulta es súper rápida gracias al índice!
    const nearbyPlayers = await this.prisma.profile.findMany({
      where: {
        h3Index: {
          in: searchIndexes,
        },
        // Aquí añadiríamos otras condiciones, como 'isAvailable: true'
      },
      include: {
        user: {
          select: { email: true }, // Incluimos datos del usuario relacionado
        },
      },
    });

    return nearbyPlayers;
  }
}
