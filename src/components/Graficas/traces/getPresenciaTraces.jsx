export function getPresenciaTraces(tipoGrafico, data) {
  const { padres = [], madres = [] } = data;

  const ingresosPadre = padres.map(item => item.household_monthly_income);
  const ingresosMadre = madres.map(item => item.household_monthly_income);
  const presPadre = padres.map(item => item.father_lives_household);
  const presMadre = madres.map(item => item.mother_lives_household);

  switch (tipoGrafico) {
    case 'linea':
      return [
        {
          x: ingresosPadre, y: presPadre, mode: 'lines+markers', name: 'Padre',
          line: { color: 'blue' }, marker: { symbol: 'circle' }
        },
        {
          x: ingresosMadre, y: presMadre, mode: 'lines+markers', name: 'Madre',
          line: { color: 'red' }, marker: { symbol: 'square' }
        }
      ];

    case 'barras':
      return [
        { x: ingresosPadre, y: presPadre, type: 'bar', name: 'Padre', marker: { color: 'blue' } },
        { x: ingresosMadre, y: presMadre, type: 'bar', name: 'Madre', marker: { color: 'red' } }
      ];

    case 'dispersión':
      return [
        { x: ingresosPadre, y: presPadre, type: 'scatter', mode: 'markers', name: 'Padre', marker: { color: 'blue', size: 10 } },
        { x: ingresosMadre, y: presMadre, type: 'scatter', mode: 'markers', name: 'Madre', marker: { color: 'red', size: 10 } }
      ];

    case 'area':
      return [
        { x: ingresosPadre, y: presPadre, type: 'scatter', mode: 'lines', fill: 'tozeroy', name: 'Padre', line: { color: 'blue' } },
        { x: ingresosMadre, y: presMadre, type: 'scatter', mode: 'lines', fill: 'tozeroy', name: 'Madre', line: { color: 'red' } }
      ];

    case 'boxplot':
      return [
        { y: presPadre, name: 'Padre', type: 'box', marker: { color: 'blue' } },
        { y: presMadre, name: 'Madre', type: 'box', marker: { color: 'red' } }
      ];

    case 'pie':
      const totalPadre = presPadre.filter(Boolean).length;
      const totalMadre = presMadre.filter(Boolean).length;
      return [{
        type: 'pie',
        labels: ['Padre presente', 'Madre presente'],
        values: [totalPadre, totalMadre],
        marker: { colors: ['blue', 'red'] },
        textinfo: 'label+percent',
        hole: 0.4
      }];

    default:
      return [];
  }
}
