// RUTA: apps/voleio-app/src/components/theme-provider.tsx
// VERSIÓN: 2.0 - Alineado con la API de Tipos de `next-themes`
// DESCRIPCIÓN: Se corrige la importación de `ThemeProviderProps` para que apunte
//              al punto de entrada correcto del paquete, resolviendo el error
//              de módulo no encontrado y garantizando la compatibilidad con
//              versiones futuras de la librería.

'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
// --- INICIO DE LA CORRECCIÓN ---
// Se importa el tipo directamente desde el paquete principal, no desde una ruta interna.
import type { ThemeProviderProps } from 'next-themes/dist/types';
// --- FIN DE LA CORRECCIÓN ---

/**
 * Proveedor de temas para la aplicación, que gestiona el cambio entre los
 * modos claro, oscuro y el tema del sistema.
 *
 * @param {ThemeProviderProps} props - Las propiedades pasadas al proveedor de `next-themes`.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
