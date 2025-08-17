export function getPresenciaLayout(tipoGrafico, metadata) {
  const baseLayout = {
    title: 'Impacto de la Presencia de Padre/Madre en el Ingreso del Hogar',
    xaxis: { title: 'Ingreso Promedio del Hogar', tickprefix: 'M$ ', tickformat: '.1f' },
    yaxis: { title: 'Situación', tickvals: metadata.y_ticks, ticktext: metadata.y_labels },
    margin: { t: 50, l: 80, r: 40, b: 60 },
    hovermode: 'closest'
  };

  if (tipoGrafico === 'barras') {
    return { ...baseLayout, barmode: 'group' };
  }

  if (tipoGrafico === 'pie') {
    return {
      title: 'Proporción de hogares con presencia de Padre/Madre'
    };
  }

  return baseLayout;
}
