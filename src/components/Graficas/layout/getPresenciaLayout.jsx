export function getPresenciaLayout(meta) {
  const baseLayout = {
    title: meta.title,
    xaxis: { title: meta.xaxis, categoryorder: "array", categoryarray: meta.categories_order},
    yaxis: { title: meta.yaxis, tickformat: "~s"}
  };

  return baseLayout;
}
