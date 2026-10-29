import { useCallback, useEffect, useRef } from "react";
import { useFinePointer, useReducedMotion } from "./useReducedMotion";

const MAX_ROTATION = 9; // grados
const LIFT = 6; // px que la tarjeta se acerca al usuario

/**
 * Inclinación 3D de una tarjeta siguiendo el puntero, 1:1 y sin latencia.
 *
 * El transform se escribe directo sobre el nodo (no vía variable CSS en el
 * padre, que recalcularía estilos de todos los hijos) y se agenda en un
 * requestAnimationFrame para no hacer más de un cambio por cuadro.
 *
 * Se desactiva en touch y cuando el sistema pide menos movimiento.
 */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const frame = useRef(0);
  const finePointer = useFinePointer();
  const reducedMotion = useReducedMotion();
  const enabled = finePointer && !reducedMotion;

  useEffect(() => {
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<T>) => {
      const element = ref.current;
      if (!enabled || !element) return;

      const { left, top, width, height } = element.getBoundingClientRect();
      const x = (event.clientX - left) / width - 0.5;
      const y = (event.clientY - top) / height - 0.5;

      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        element.style.transition = "none";
        element.style.transform = `rotateX(${-y * MAX_ROTATION}deg) rotateY(${
          x * MAX_ROTATION
        }deg) translateZ(${LIFT}px)`;
      });
    },
    [enabled],
  );

  const handlePointerLeave = useCallback(() => {
    const element = ref.current;
    if (!enabled || !element) return;

    cancelAnimationFrame(frame.current);
    element.style.transition = "transform 400ms var(--ease-arrival)";
    element.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
  }, [enabled]);

  return {
    ref,
    enabled,
    tiltProps: enabled
      ? { onPointerMove: handlePointerMove, onPointerLeave: handlePointerLeave }
      : {},
  };
}
