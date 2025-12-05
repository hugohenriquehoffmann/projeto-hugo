import React, { useState } from 'react';
import { MessageCircle, Users, HelpCircle, ArrowRight, Check } from 'lucide-react';

const GrowthTactics: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter(i => i !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const tactics = [
    {
      id: 1,
      title: "Grupo VIP no WhatsApp",
      desc: "Brasileiro adora comprar no privado. Crie um grupo de 'Ofertas Relâmpago' e coloque o link na Bio.",
      icon: MessageCircle,
      action: "Criar Grupo"
    },
    {
      id: 2,
      title: "Micro-Influenciadoras",
      desc: "Troque produtos por divulgação com manicures e cabeleireiras locais (2k-5k seguidores). A confiança delas vale ouro.",
      icon: Users,
      action: "Listar 5 nomes"
    },
    {
      id: 3,
      title: "Funil da Caixinha de Perguntas",
      desc: "Poste: 'Qual sua dificuldade? ( ) Emagrecer ( ) Dormir'. Chame quem respondeu no Direct com a solução exata.",
      icon: HelpCircle,
      action: "Postar Stories"
    }
  ];

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-3xl font-bold text-slate-800">Táticas de Crescimento</h2>
        <p className="text-slate-500 mt-2">Ações práticas para aumentar vendas e seguidores.</p>
      </header>

      <div className="grid gap-6">
        {tactics.map((tactic) => {
          const Icon = tactic.icon;
          const isDone = checkedItems.includes(tactic.id);

          return (
            <div 
              key={tactic.id} 
              className={`p-6 rounded-xl border transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center
                ${isDone ? 'bg-green-50 border-green-200' : 'bg-white border-slate-100 shadow-sm'}`}
            >
              <div className={`p-4 rounded-full ${isDone ? 'bg-green-200 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                <Icon size={24} />
              </div>
              
              <div className="flex-1">
                <h3 className={`text-lg font-bold ${isDone ? 'text-green-800' : 'text-slate-800'}`}>
                  {tactic.title}
                </h3>
                <p className={`mt-1 ${isDone ? 'text-green-700' : 'text-slate-600'}`}>
                  {tactic.desc}
                </p>
              </div>

              <button
                onClick={() => toggleCheck(tactic.id)}
                className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors whitespace-nowrap
                  ${isDone 
                    ? 'bg-white text-green-700 border border-green-200 hover:bg-green-50' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'}`}
              >
                {isDone ? (
                  <> <Check size={18} /> Concluído </>
                ) : (
                  <> {tactic.action} <ArrowRight size={18} /> </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GrowthTactics;