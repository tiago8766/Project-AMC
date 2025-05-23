import { useMemo } from 'react';
import { obtenerTareas } from '../services/tareaService';

export const useTareas = () => {
  return useMemo(() => obtenerTareas(), []);
};