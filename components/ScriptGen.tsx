import React, { useState } from 'react';
import { SCRIPT_TEMPLATES, PRODUCTS } from '../constants';
import { generateScript } from '../services/geminiService';
import { Video, FileText, Copy, Sparkles, Check } from 'lucide-react';

const ScriptGen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vault' | 'generator'>('vault');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const [genParams, setGenParams] = useState({
    product: PRODUCTS[0].name,
    type: 'Story' as 'Reel' | 'Story' | 'Feed',
    tone: 'Motivacional e Energético'
  });

  const handleGenerate = async () => {
    setIsGenerating(true);
    const result = await generateScript(genParams.product, genParams.type, genParams.tone);
    setGeneratedContent(result);
    setIsGenerating(false);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Roteiros & Criação</h2>
          <p className="text-slate-500 mt-2">Use modelos prontos ou crie novos com IA.</p>
        </div>
        <div className="flex bg-slate-200 p-1 rounded-lg">
          <button 
            onClick={() => setActiveTab('vault')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'vault' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}
          >
            Modelos Prontos
          </button>
          <button 
            onClick={() => setActiveTab('generator')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'generator' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}
          >
            Gerador IA
          </button>
        </div>
      </header>

      {activeTab === 'vault' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCRIPT_TEMPLATES.map((script, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-2">
                  {script.type === 'Reel' ? <Video size={16} className="text-purple-600" /> : <FileText size={16} className="text-pink-600" />}
                  <span className="font-semibold text-slate-800">{script.title}</span>
                </div>
                <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded">{script.product}</span>
              </div>
              <div className="p-6 flex-1 bg-slate-50/50">
                <pre className="whitespace-pre-wrap font-sans text-sm text-slate-600 leading-relaxed">
                  {script.content}
                </pre>
              </div>
              <div className="p-4 border-t border-slate-100">
                <button 
                  onClick={() => copyToClipboard(script.content, idx)}
                  className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-slate-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                >
                  {copiedIndex === idx ? <Check size={16} /> : <Copy size={16} />}
                  {copiedIndex === idx ? 'Copiado!' : 'Copiar Roteiro'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'generator' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-fit">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Configurar IA</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Produto Foco</label>
                <select 
                  className="w-full p-2.5 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  value={genParams.product}
                  onChange={(e) => setGenParams({...genParams, product: e.target.value})}
                >
                  {PRODUCTS.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Formato</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Reel', 'Story', 'Feed'].map(type => (
                    <button
                      key={type}
                      onClick={() => setGenParams({...genParams, type: type as any})}
                      className={`py-2 text-sm border rounded-lg transition-colors ${genParams.type === type ? 'bg-amber-50 border-amber-500 text-amber-700 font-medium' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tom de Voz</label>
                <select 
                  className="w-full p-2.5 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  value={genParams.tone}
                  onChange={(e) => setGenParams({...genParams, tone: e.target.value})}
                >
                  <option>Motivacional e Energético</option>
                  <option>Misterioso e Curioso</option>
                  <option>Empático e Acolhedor</option>
                  <option>Autoridade Científica</option>
                  <option>Humorado e Leve</option>
                </select>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isGenerating ? (
                  <span className="animate-pulse">Gerando...</span>
                ) : (
                  <>
                    <Sparkles size={20} /> Gerar Conteúdo
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output */}
          <div className="lg:col-span-2 bg-slate-50 rounded-xl border border-slate-200 p-6 min-h-[400px] relative">
             {generatedContent ? (
               <div className="h-full flex flex-col">
                 <div className="flex justify-between items-center mb-4">
                   <h4 className="font-bold text-slate-700">Resultado:</h4>
                   <button 
                      onClick={() => copyToClipboard(generatedContent, 999)}
                      className="text-sm text-amber-600 font-medium hover:underline flex items-center gap-1"
                   >
                     {copiedIndex === 999 ? 'Copiado!' : 'Copiar Texto'}
                   </button>
                 </div>
                 <div className="bg-white p-6 rounded-lg border border-slate-200 flex-1 shadow-sm whitespace-pre-wrap text-slate-700 leading-relaxed font-sans">
                   {generatedContent}
                 </div>
               </div>
             ) : (
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                 <Sparkles size={48} className="mb-4 opacity-20" />
                 <p>Selecione as opções e clique em Gerar</p>
               </div>
             )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScriptGen;