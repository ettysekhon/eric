const formatNumber = (x) => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export default (summary) => {
  const data = summary.data || [];
  const headers = summary.headers || [];
  const dHeaders = summary.deltaHeaders || [];

  const metrics = data.map((metric) => {
    const tables = metric.tables.map((table) => {
      const tableData = table.data.map((v, i) => {
        const formattedNumber = formatNumber(v);
        if (headers[i] === 'WoW' || headers[i] === 'YoY' || headers[i] === 'YoY(Adjusted)') {
          return `${formattedNumber}%`;
        }
        return formattedNumber;
      });
      return {
        title: table.title,
        data: [headers, tableData]
      };
    });
    const delta = metric.delta.map((d, index) => {
      return {
        title: dHeaders[index],
        value: `${d}%`,
        up: d > 0
      };
    });
    return {
      tables,
      delta
    };
  });

  return {
    title: summary.title,
    subTitle: summary.subTitle,
    data: metrics
  };
};
