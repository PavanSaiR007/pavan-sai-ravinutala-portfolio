import React, { useState } from 'react';
import { Satellite, Layers, Eye, Sparkles, RefreshCw, SlidersHorizontal, Info } from 'lucide-react';

export const OrbitIqDemo: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [sarMode, setSarMode] = useState<boolean>(false);
  const [activePreset, setActivePreset] = useState<'urban' | 'water' | 'forest'>('urban');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [showAiReport, setShowAiReport] = useState<boolean>(true);

  const presets = {
    urban: {
      name: "Urban Development & Infrastructure",
      location: "Guntur–Vijayawada Corridor",
      t1Date: "March 2024 (T1 Baseline)",
      t2Date: "February 2026 (T2 Recent)",
      changeLabel: "Detected Change: Built-up Expansion",
      summary: "Comparison highlights expansion in commercial grid infrastructure, road networks, and converted vacant plots across northern parcels.",
      sarSignal: "High backscatter detected in newly erected concrete grid structures."
    },
    water: {
      name: "Reservoir & Wetland Dynamics",
      location: "Krishna River Basin Riparian Zone",
      t1Date: "October 2024 (Post-Monsoon)",
      t2Date: "May 2026 (Pre-Monsoon)",
      changeLabel: "Detected Change: Water Surface Fluctuation",
      summary: "Seasonal variation identified with water body boundary contraction and shoreline siltation exposure along perimeter banks.",
      sarSignal: "Specular reflection attenuation consistent with lowering surface reservoir depth."
    },
    forest: {
      name: "Canopy & Agricultural Shift",
      location: "Eastern Ghats Foothills Reserve",
      t1Date: "January 2025 (T1)",
      t2Date: "January 2026 (T2)",
      changeLabel: "Detected Change: Vegetation Index Shift",
      summary: "Green-band index shifts observed along perimeter contour boundaries following regional afforestation drives.",
      sarSignal: "Volumetric scattering in C-band indicates heightened canopy height."
    }
  };

  const current = presets[activePreset];

  const handleSimulateAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowAiReport(true);
    }, 700);
  };

  return (
    <div className="bg-surface border border-subtle rounded-2xl p-4 sm:p-6 overflow-hidden theme-card-shadow">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-subtle">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-accent-subtle text-accent border border-accent-subtle">
            <Satellite className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-primary text-base">Orbit IQ Interactive Visualizer</h4>
              <span className="px-2 py-0.5 text-xs font-mono bg-accent-subtle text-accent border border-accent-subtle rounded-full">
                SIH 2026 Prototype
              </span>
            </div>
            <p className="text-xs text-secondary">
              Bi-temporal Optical & SAR Image Alignment with Difference-Mask Synthesis
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSarMode(!sarMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border ${
              sarMode 
                ? 'bg-amber-500/15 border-amber-500/30 text-amber-600 dark:text-amber-300' 
                : 'bg-surface-muted border-subtle text-secondary hover:text-primary'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>SAR Radar Layer: {sarMode ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={handleSimulateAnalysis}
            disabled={isAnalyzing}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-accent hover:opacity-90 text-white transition-all flex items-center gap-1.5 shadow-sm disabled:opacity-60"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isAnalyzing ? 'animate-spin' : ''}`} />
            <span>{isAnalyzing ? 'Processing...' : 'Run Pipeline'}</span>
          </button>
        </div>
      </div>

      {/* Preset Selector */}
      <div className="flex items-center gap-2 pt-3 pb-2 text-xs overflow-x-auto">
        <span className="text-muted font-medium whitespace-nowrap">Test Scene:</span>
        {(['urban', 'water', 'forest'] as const).map((key) => (
          <button
            key={key}
            onClick={() => setActivePreset(key)}
            className={`px-3 py-1 rounded-lg transition-all font-mono whitespace-nowrap ${
              activePreset === key
                ? 'bg-accent text-white font-semibold shadow-xs'
                : 'bg-surface-muted text-secondary hover:text-primary border border-subtle'
            }`}
          >
            {presets[key].name}
          </button>
        ))}
      </div>

      {/* Interactive Bi-Temporal Split View */}
      <div className="relative mt-2 rounded-xl overflow-hidden border border-subtle bg-surface-inset select-none">
        
        {/* Stage Container */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          
          {/* T1 Baseline Image (Left under layer) */}
          <div className="absolute inset-0 w-full h-full">
            <div className="w-full h-full relative p-6 flex flex-col justify-between">
              {/* Simulated Map / Satellite Visual Layer */}
              <div className="absolute inset-0 opacity-80 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {activePreset === 'urban' && (
                <div className="w-full h-full relative bg-gradient-to-br from-emerald-900/40 via-amber-900/20 to-slate-900/40 p-4">
                  <div className="w-1/3 h-1/2 rounded-lg border border-emerald-500/30 bg-emerald-600/10 flex items-center justify-center text-[11px] font-mono text-emerald-300">
                    Agricultural Parcel
                  </div>
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur px-2.5 py-1 rounded text-[11px] font-mono text-secondary border border-subtle">
                    🛰️ T1 Optical: {current.t1Date}
                  </div>
                </div>
              )}

              {activePreset === 'water' && (
                <div className="w-full h-full relative bg-gradient-to-br from-blue-900/50 via-cyan-900/30 to-slate-900/40 p-4">
                  <div className="w-3/4 h-3/4 rounded-full border border-blue-500/30 bg-blue-600/20 flex items-center justify-center text-[11px] font-mono text-blue-300">
                    Full Reservoir Perimeter
                  </div>
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur px-2.5 py-1 rounded text-[11px] font-mono text-secondary border border-subtle">
                    🛰️ T1 Optical: {current.t1Date}
                  </div>
                </div>
              )}

              {activePreset === 'forest' && (
                <div className="w-full h-full relative bg-gradient-to-br from-emerald-950/60 via-teal-900/30 to-slate-900/40 p-4">
                  <div className="w-1/2 h-1/2 rounded-xl border border-emerald-500/30 bg-emerald-600/10 flex items-center justify-center text-[11px] font-mono text-emerald-300">
                    Sparse Forest Canopy
                  </div>
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur px-2.5 py-1 rounded text-[11px] font-mono text-secondary border border-subtle">
                    🛰️ T1 Optical: {current.t1Date}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* T2 Recent / Changed Image (Clipped by slider position) */}
          <div
            className="absolute inset-y-0 right-0 overflow-hidden border-l border-accent z-10 transition-all duration-75"
            style={{ width: `${100 - sliderPos}%` }}
          >
            <div
              className="absolute inset-y-0 right-0 h-full overflow-hidden"
              style={{ width: '1000px' }} // fixed large canvas width to maintain spatial alignment
            >
              {activePreset === 'urban' && (
                <div className="w-full h-full relative bg-gradient-to-bl from-slate-900 via-amber-900/30 to-rose-900/30 p-6">
                  {/* Grid of new structures */}
                  <div className="grid grid-cols-4 gap-2 w-72 h-44 border border-rose-500/40 bg-rose-500/10 rounded-lg p-2">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="bg-rose-500/30 border border-rose-400/50 rounded flex items-center justify-center text-[9px] font-mono text-rose-300">
                        Bldg {i+1}
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur px-2.5 py-1 rounded text-[11px] font-mono text-accent border border-subtle">
                    {sarMode ? '📡 SAR Radar' : '🛰️ T2 Optical'}: {current.t2Date}
                  </div>
                </div>
              )}

              {activePreset === 'water' && (
                <div className="w-full h-full relative bg-gradient-to-bl from-slate-900 via-cyan-950/40 to-blue-950/50 p-6">
                  <div className="absolute inset-x-16 top-16 bottom-16 rounded-full bg-rose-500/20 border border-rose-500/40"></div>
                  <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur px-2.5 py-1 rounded text-[11px] font-mono text-accent border border-subtle">
                    {sarMode ? '📡 SAR Backscatter' : '🛰️ T2 Optical'}: {current.t2Date}
                  </div>
                </div>
              )}

              {activePreset === 'forest' && (
                <div className="w-full h-full relative bg-gradient-to-bl from-teal-950 via-emerald-800/60 to-slate-950 p-6">
                  <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur px-2.5 py-1 rounded text-[11px] font-mono text-accent border border-subtle">
                    🛰️ T2 Optical: {current.t2Date}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Divider Line with Draggable Handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-accent cursor-ew-resize z-20 shadow-md"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface border-2 border-accent flex items-center justify-center text-accent shadow-md">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
          </div>

          {/* HUD Overlay Details */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-secondary bg-surface/90 backdrop-blur px-3 py-1.5 rounded-lg border border-subtle pointer-events-none">
            <span className="flex items-center gap-1.5 text-accent">
              <Eye className="w-3.5 h-3.5" />
              <span>Location: {current.location}</span>
            </span>
            <span className="font-semibold text-accent-warm bg-accent-warm-subtle px-2 py-0.5 rounded border border-amber-500/20">
              {current.changeLabel}
            </span>
          </div>
        </div>

        {/* Range Slider Controller */}
        <div className="p-3 bg-surface-muted/60 border-t border-subtle flex items-center gap-3">
          <span className="text-xs text-muted whitespace-nowrap font-mono">T1 (Before)</span>
          <input
            type="range"
            min="5"
            max="95"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="w-full accent-accent h-1.5 bg-surface rounded-lg cursor-pointer"
          />
          <span className="text-xs text-muted whitespace-nowrap font-mono">T2 (After)</span>
        </div>
      </div>

      {/* AI Change Detection Insights Box — No invented accuracy metrics */}
      {showAiReport && (
        <div className="mt-3 p-3.5 rounded-xl bg-accent-subtle border border-accent-subtle text-xs">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5 text-accent font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>AI Change Interpretation & Trend Diagnostic</span>
            </div>
            <span className="text-[10px] text-muted font-mono">Prototype Status: Local SIH 2026 Build</span>
          </div>
          <p className="text-secondary leading-relaxed">
            {current.summary}
          </p>
          {sarMode && (
            <div className="mt-2 pt-2 border-t border-subtle flex items-start gap-1.5 text-accent-warm font-mono text-[11px]">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>SAR Synthetic Aperture Echo: {current.sarSignal}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
