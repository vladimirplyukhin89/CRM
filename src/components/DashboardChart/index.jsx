import s from "./DashboardChart.module.scss";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";

const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    data: subDays(Date.now(), num).toISOString().substring(0, 10),
    value: 1 + Math.random(),
  });
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className={s.tooltip}>
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p>${payload[0].value.toFixed(2)} USD</p>
      </div>
    );
  }
  return null;
}

const DashboardChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#2451B7" stopOpacity={0.25} />
            </linearGradient>
          </defs>

          <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

          <XAxis
            dataKey="data"
            axisLine={false}
            tickLine={false}
            tickFormatter={(str) => {
              const date = parseISO(str);
              if (date.getDate() % 7 === 0) {
                return format(date, "MMM, d");
              }
              return "";
            }}
          />

          <YAxis
            dataKey="value"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={(number) => `$${number.toFixed(2)}`}
          />

          <Tooltip content={<CustomTooltip />} />

          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default DashboardChart;
