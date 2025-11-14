// RUTA: apps/voleio-app/src/lib/utils.ts
// VERSIÓN: 1.0 - Estándar de la Industria
// DESCRIPCIÓN: Este archivo exporta la función de utilidad `cn`, una pieza
//              fundamental para la composición de clases en Tailwind CSS.
//              Combina la flexibilidad de `clsx` con la resolución de conflictos
//              de `tailwind-merge` para crear un sistema de estilizado robusto,
//              predecible y libre de errores.

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Compone y fusiona clases de Tailwind CSS de forma segura.
 *
 * @param {...ClassValue[]} inputs - Una secuencia de clases. Pueden ser strings,
 *   objetos para clases condicionales, o arrays.
 * @returns {string} Una única cadena de clases optimizada y sin conflictos.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
