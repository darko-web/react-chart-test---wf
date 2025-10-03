import { component, useProp } from "@webflow/react";
import Chart from "./Chart";

export default component({
  name: "ChartComponent",
  label: "Chart Component",
  props: {
    title: { type: "string", default: "📊 Simple React Chart" },
    bars: { type: "number[]", default: [5, 10, 7, 3, 9, 4, 8] }
  },
})(function ChartComponent({ title, bars }) {
  const [chartTitle] = useProp("title", title);
  const [chartData] = useProp("bars", bars);
  return <Chart title={chartTitle} data={chartData} />;
});
