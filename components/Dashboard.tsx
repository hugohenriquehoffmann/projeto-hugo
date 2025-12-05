import React from 'react';
import { SLOGAN, WEEKLY_SCHEDULE } from '../constants';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TrendingUp, Users, ShoppingBag, Clock } from 'lucide-react';

const mockData = [
  { name: 'Seg', leads: 40 },
  { name: 'Ter', leads: 30 },
  { name: 'Qua', leads: 65 },
  { name: 'Qui', leads: 45 },
  { name: 'Sex', leads: 80 },
  { name: 'Sab', leads: 55 },
  { name: 'Dom', leads: 90 },
];

const Dashboard: React.FC = () => {
  const today = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
  const todaySchedule = WEEKLY_SCHEDULE.find(d => d.day.toLowerCase().includes(today.split('-')[0].toLowerCase())) || WEEKLY_SCHEDULE[0];

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Painel de Controle</h2>
        <p className="text-slate-500 mt-2 italic">"{SLOGAN}"</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Seguidores', value: '12.5k', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Engajamento', value: '+24%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Vendas Semana', value: 'R$ 4.2k', icon: ShoppingBag, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Próx. Post', value: '18:00', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <Icon className={stat.color} size={24} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Performance de Vendas (Leads)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{fill: '#f1f5f9'}}
                />
                <Bar dataKey="leads" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Today's Focus */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Foco de Hoje: {todaySchedule.day}</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
              Tema
            </span>
            <p className="text-lg font-medium text-slate-800 mt-2">{todaySchedule.focus}</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-500 uppercase">Atividades</h4>
            {todaySchedule.activities.map((act, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className={`mt-1 px-2 py-0.5 rounded text-xs font-bold text-white
                  ${act.type === 'Story' ? 'bg-pink-500' : act.type === 'Reel' ? 'bg-purple-600' : 'bg-blue-500'}`}>
                  {act.type}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{act.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;