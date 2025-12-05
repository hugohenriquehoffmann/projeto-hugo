import React, { useState } from 'react';
import { BIO_PRESET } from '../constants';
import { analyzeBio } from '../services/geminiService';
import { Sparkles, Save, RotateCcw, Smartphone, MapPin, Link as LinkIcon } from 'lucide-react';

const BioOptimizer: React.FC = () => {
  const [bio, setBio] = useState(BIO_PRESET);
  const [analysis, setAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    setIsLoading(true);
    const fullBio = `${bio.line1}\n${bio.line2}\n${bio.line3}\n${bio.cta}`;
    const result = await analyzeBio(fullBio);
    setAnalysis(result);
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
       <header>
        <h2 className="text-3xl font-bold text-slate-800">Otimização de Perfil (Bio)</h2>
        <p className="text-slate-500 mt-2">Ajuste a "fachada da sua loja" para converter visitantes em seguidores.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Editor */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-fit">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Sparkles className="text-amber-500" size={20} /> Editor de Bio
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Linha 1 (Autoridade/Nicho)</label>
              <input 
                type="text" 
                value={bio.line1} 
                onChange={(e) => setBio({...bio, line1: e.target.value})}
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Linha 2 (Benefício/Promessa)</label>
              <input 
                type="text" 
                value={bio.line2} 
                onChange={(e) => setBio({...bio, line2: e.target.value})}
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Linha 3 (Autoridade Extra/Frete)</label>
              <input 
                type="text" 
                value={bio.line3} 
                onChange={(e) => setBio({...bio, line3: e.target.value})}
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Call to Action (Chamada)</label>
              <input 
                type="text" 
                value={bio.cta} 
                onChange={(e) => setBio({...bio, cta: e.target.value})}
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button 
                onClick={handleAnalyze}
                disabled={isLoading}
                className="flex-1 bg-amber-500 text-white font-medium py-2 rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? 'Analisando...' : (
                  <>
                    <Sparkles size={18} /> Analisar com IA
                  </>
                )}
              </button>
              <button 
                onClick={() => setBio(BIO_PRESET)}
                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50"
                title="Resetar para padrão"
              >
                <RotateCcw size={18} />
              </button>
            </div>
          </div>

          {analysis && (
            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-100 rounded-lg">
              <h4 className="font-bold text-indigo-900 mb-2">Sugestão da IA:</h4>
              <p className="text-sm text-indigo-800 whitespace-pre-line">{analysis}</p>
            </div>
          )}
        </div>

        {/* Preview Mobile */}
        <div className="flex justify-center">
          <div className="w-[320px] bg-white rounded-[2.5rem] border-8 border-slate-900 overflow-hidden shadow-2xl relative">
            {/* Status Bar Mock */}
            <div className="h-6 bg-white flex justify-between items-center px-6 text-[10px] font-bold text-slate-900">
              <span>9:41</span>
              <div className="flex gap-1">
                <span>Signal</span>
                <span>Wifi</span>
                <span>Bat</span>
              </div>
            </div>

            {/* Header */}
            <div className="px-4 py-2 flex justify-between items-center border-b border-slate-50">
               <span className="font-bold text-sm">aurora_suamelhorversao</span>
               <div className="flex gap-4">
                 <div className="w-5 h-5 border-2 border-slate-800 rounded-md"></div>
                 <div className="w-5 h-5 border-2 border-slate-800 rounded-full hamburger"></div>
               </div>
            </div>

            {/* Profile Info */}
            <div className="px-4 py-4">
              <div className="flex items-center justify-between mb-4">
                <div className="w-20 h-20 bg-gradient-to-tr from-amber-400 to-amber-600 rounded-full p-1">
                  <div className="w-full h-full bg-slate-200 rounded-full border-2 border-white overflow-hidden">
                    <img src="https://picsum.photos/200/200" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex gap-4 text-center">
                  <div>
                    <div className="font-bold text-slate-900">12.5K</div>
                    <div className="text-xs text-slate-500">Posts</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">45.2K</div>
                    <div className="text-xs text-slate-500">Seguidores</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">1.2K</div>
                    <div className="text-xs text-slate-500">Seguindo</div>
                  </div>
                </div>
              </div>

              <div className="text-sm">
                <h1 className="font-bold text-slate-900">Aurora | Suplementos & Saúde</h1>
                <p className="text-slate-500 text-xs mb-1">Saúde/Beleza</p>
                <div className="text-slate-800 space-y-0.5 text-sm">
                  <p>{bio.line1}</p>
                  <p>{bio.line2}</p>
                  <p>{bio.line3}</p>
                  <p className="font-medium text-blue-900">{bio.cta}</p>
                </div>
                <div className="mt-1 text-blue-900 font-medium text-sm flex items-center gap-1">
                   <LinkIcon size={12} />
                   <span className="truncate">loja.aurora.com.br/ofertas</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-slate-100 py-1.5 rounded font-semibold text-sm text-slate-900">Seguir</button>
                <button className="flex-1 bg-slate-100 py-1.5 rounded font-semibold text-sm text-slate-900">Mensagem</button>
              </div>

              {/* Highlights */}
              <div className="flex gap-4 mt-6 overflow-x-hidden">
                 {['Resultados', 'Dúvidas', 'Envios', 'Bastidores'].map((h, i) => (
                   <div key={i} className="flex flex-col items-center gap-1 min-w-[60px]">
                     <div className="w-14 h-14 rounded-full border border-slate-200 bg-amber-50 p-0.5">
                        <div className="w-full h-full bg-amber-100 rounded-full flex items-center justify-center text-[10px] font-bold text-amber-700">
                           {h[0]}
                        </div>
                     </div>
                     <span className="text-[10px] text-slate-800 truncate w-full text-center">{h}</span>
                   </div>
                 ))}
              </div>
            </div>
            
            {/* Grid Mock */}
            <div className="mt-2 border-t border-slate-100 grid grid-cols-3 gap-0.5">
               {[1,2,3,4,5,6,7,8,9].map(i => (
                 <div key={i} className="aspect-square bg-slate-100 relative">
                   <img src={`https://picsum.photos/200/200?random=${i}`} className="w-full h-full object-cover" alt="" />
                 </div>
               ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BioOptimizer;