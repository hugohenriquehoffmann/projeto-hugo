import React from 'react';
import { ViewState } from '../types';
import { LayoutDashboard, UserCircle, Calendar, Target, FileText, TrendingUp, Sparkles } from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const menuItems = [
    { id: ViewState.DASHBOARD, label: 'Visão Geral', icon: LayoutDashboard },
    { id: ViewState.STRATEGY, label: 'Estratégia Produtos', icon: Target },
    { id: ViewState.CALENDAR, label: 'Calendário Semanal', icon: Calendar },
    { id: ViewState.SCRIPTS, label: 'Roteiros & AI', icon: Sparkles },
    { id: ViewState.PROFILE, label: 'Otimizar Perfil', icon: UserCircle },
    { id: ViewState.GROWTH, label: 'Táticas Growth', icon: TrendingUp },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col shadow-xl z-10">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
          Aurora Manager
        </h1>
        <p className="text-xs text-slate-400 mt-1">Sua Melhor Versão</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors duration-200
                    ${isActive 
                      ? 'bg-amber-500/10 text-amber-400 border-r-4 border-amber-500' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-6 border-t border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold">
            A
          </div>
          <div>
            <p className="text-sm font-medium text-white">Admin</p>
            <p className="text-xs text-slate-400">Aurora Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;