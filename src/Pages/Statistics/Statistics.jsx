import { Pie, PieChart, ResponsiveContainer } from "recharts";

const Statistics = () => {

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
    
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                 <PieChart width={400} height={400}>
                <Pie
                    data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
                >
                    {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
 
                </Pie>
           </PieChart>
           </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
