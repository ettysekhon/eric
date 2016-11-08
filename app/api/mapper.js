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
        const directionHeader = headers[i] === 'WoW' || headers[i] === 'YoY' || headers[i] === 'YoY(Adj)';
        return {
          up: v > 0,
          value: directionHeader ? `${formattedNumber}%` : formattedNumber,
          isHeader: false
        };
      });
      const headerData = headers.map((header, i) => {
        const showDirection = header === 'WoW' || header === 'YoY' || header === 'YoY(Adj)';
        return {
          up: tableData[i].up,
          value: header,
          showDirection,
          isHeader: true
        };
      });
      return {
        title: table.title,
        data: [headerData, tableData]
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
