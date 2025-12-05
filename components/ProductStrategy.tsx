import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Scale, Heart, Moon, AlertCircle } from 'lucide-react';

const ProductStrategy: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'scale': return Scale;
      case 'heart': return Heart;
      case 'moon': return Moon;
      default: return Scale;
    }
  };

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-3xl font-bold text-slate-800">Estratégia por Produto</h2>
        <p className="text-slate-500 mt-2">Segmentação é a chave. Não misture as comunicações.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Selector */}
        <div className="lg:w-1/3 space-y-3">
          {PRODUCTS.map((prod) => {
            const Icon = getIcon(prod.icon);
            const isSelected = selectedProduct.name === prod.name;
            return (
              <button
                key={prod.name}
                onClick={() => setSelectedProduct(prod)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-4
                  ${isSelected 
                    ? `border-amber-500 bg-white shadow-md ring-1 ring-amber-500` 
                    : 'border-slate-200 bg-white hover:border-amber-300 hover:bg-slate-50'}`}
              >
                <div className={`p-3 rounded-lg ${prod.color}`}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{prod.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{prod.focus}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Details Panel */}
        <div className="lg:w-2/3 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${selectedProduct.color}`}>
              Foco Principal: {selectedProduct.focus}
            </span>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase mb-2">Quem é o Público?</h4>
              <p className="text-xl font-medium text-slate-800">{selectedProduct.targetAudience}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase mb-2">A Abordagem Vencedora</h4>
              <div className="bg-slate-50 p-5 rounded-lg border-l-4 border-amber-500 text-slate-700 leading-relaxed italic">
                "{selectedProduct.approach}"
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex gap-3 items-start">
              <AlertCircle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
              <div>
                <h5 className="font-bold text-yellow-800 text-sm">Cuidado Importante</h5>
                <p className="text-sm text-yellow-700 mt-1">
                  {selectedProduct.icon === 'scale' && "Evite promessas de 'perca 10kg em 1 dia'. Foque em roupas largas e bem-estar."}
                  {selectedProduct.icon === 'heart' && "Cuidado com palavras explícitas. Use metáforas como 'chama', 'energia', 'disposição'."}
                  {selectedProduct.icon === 'moon' && "Não prometa cura da depressão. Foque em 'descanso', 'renovação' e 'paz'."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStrategy;