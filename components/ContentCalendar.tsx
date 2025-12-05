import React from 'react';
import { WEEKLY_SCHEDULE } from '../constants';
import { Calendar, CheckCircle2 } from 'lucide-react';

const ContentCalendar: React.FC = () => {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-3xl font-bold text-slate-800">Calendário Semanal</h2>
        <p className="text-slate-500 mt-2">Rotina de postagens estratégica para maximizar resultados.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WEEKLY_SCHEDULE.map((day, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="p-4 border-b border-slate-100 bg-slate-50 rounded-t-xl">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-slate-800">{day.day}</h3>
                <Calendar size={18} className="text-slate-400" />
              </div>
              <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                {day.focus}
              </div>
            </div>
            
            <div className="p-4 flex-1 space-y-4">
              {day.activities.map((act, actIdx) => (
                <div key={actIdx} className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded text-white
                      ${act.type === 'Story' ? 'bg-gradient-to-r from-orange-400 to-pink-500' : 
                        act.type === 'Reel' ? 'bg-slate-800' : 'bg-blue-500'}`}>
                      {act.type}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-snug group-hover:text-slate-900 transition-colors">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t border-slate-50 bg-slate-50/50 rounded-b-xl">
              <button className="w-full py-1.5 text-xs font-semibold text-slate-500 hover:text-green-600 hover:bg-green-50 rounded flex items-center justify-center gap-1 transition-colors">
                <CheckCircle2 size={14} /> Marcar como concluído
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-8 flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
           <Calendar size={24} />
        </div>
        <div>
          <h4 className="font-bold text-blue-900">Dica de Consistência</h4>
          <p className="text-sm text-blue-800 mt-1">
            Não tente postar tudo de uma vez. Siga o calendário para não cansar sua audiência. 
            Lembre-se: <strong>Frequência vem antes da Excelência.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentCalendar;