import { useEffect, useMemo } from "react";
import useFetchEducaPresenPadre from "./useFetchEducaPresenPadre";
import useFetchEducaPresenMadre from "./useFetchEducaPresenMadre";
import getEducacionPresenciaLayout from "../../components/Graficas/layout/getEducacionPresenciaLayout";
import getEducacionPresenciaTraces from "../../components/Graficas/traces/getEducacionPresenciaTraces";

const useGrafInteraccionPadres = (seleccion, tipoGrafico) => {
  const { data: dataPadre, loading: loadingPadre, error: errorPadre, fetchEducaPresenPadre } = useFetchEducaPresenPadre();
  const { data: dataMadre, loading: loadingMadre, error: errorMadre, fetchEducaPresenMadre } = useFetchEducaPresenMadre();

  useEffect(() => {
    if (seleccion === "padre" && !dataPadre?.series) fetchEducaPresenPadre();
    if (seleccion === "madre" && !dataMadre?.series) fetchEducaPresenMadre();
  }, [seleccion]);

  const datosSeleccionados = seleccion === "padre" ? dataPadre : seleccion === "madre" ? dataMadre : null;
  const genero = seleccion === "padre" ? "Padre" : "Madre";

  const trazas = useMemo(() => {
    if (!datosSeleccionados?.series) return [];
    return getEducacionPresenciaTraces(datosSeleccionados, genero, tipoGrafico);
  }, [datosSeleccionados, genero, tipoGrafico]);

  const layout = useMemo(() => {
    return getEducacionPresenciaLayout(genero, tipoGrafico);
  }, [genero, tipoGrafico]);

  return {
    loading: (seleccion === "padre" && loadingPadre) || (seleccion === "madre" && loadingMadre),
    error: errorPadre || errorMadre,
    trazas,
    layout
  };
};

export default useGrafInteraccionPadres;
