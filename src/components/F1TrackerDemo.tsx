import React, { useState, useEffect } from 'react';
import { Flame, Trophy, Play, Pause } from 'lucide-react';

export const F1TrackerDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(312);
  const [gear, setGear] = useState<number>(7);
  const [rpm, setRpm] = useState<number>(11800);
  const [drsActive, setDrsActive] = useState<boolean>(true);
  const [lapTime, setLapTime] = useState<number>(84.32);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSpeed((prev) => {
        const delta = Math.floor(Math.random() * 9) - 4;
        const next = Math.max(180, Math.min(345, prev + delta));
        if (next > 300) {
          setGear(8);
          setDrsActive(true);
        } else if (next > 260) {
          setGear(7);
          setDrsActive(false);
        } else if (next > 220) {
          setGear(6);
          setDrsActive(false);
        } else {
          setGear(5);
          setDrsActive(false);
        }
        setRpm(10500 + Math.floor(Math.random() * 2200));
        return next;
      });
      setLapTime((prev) => +(prev + 0.05).toFixed(2));
    }, 400);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="bg-surface border border-subtle rounded-2xl p-4 sm:p-6 overflow-hidden theme-card-shadow">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-subtle">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-accent-subtle text-accent border border-accent-subtle">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-primary text-base">Real-Time F1 Telemetry Simulator</h4>
              <span className="px-2 py-0.5 text-xs font-mono bg-accent-subtle text-accent border border-accent-subtle rounded-full">
                AI-Assisted (Claude)
              </span>
            </div>
            <p className="text-xs text-secondary">
              Live Sector Splits, Car Telemetry & Driver Performance Metrics
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-muted hover:bg-surface-elevated text-primary transition-all flex items-center gap-1.5 border border-subtle"
        >
          {isRunning ? <Pause className="w-3.5 h-3.5 text-amber-500" /> : <Play className="w-3.5 h-3.5 text-emerald-500" />}
          <span>{isRunning ? 'Pause Telemetry' : 'Resume Telemetry'}</span>
        </button>
      </div>

      {/* Telemetry HUD */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        {/* Speed */}
        <div className="p-3 bg-surface-muted/60 border border-subtle rounded-xl flex flex-col items-center justify-center">
          <span className="text-[11px] font-mono text-muted uppercase tracking-wider">Speed</span>
          <div className="flex items-baseline gap-1 my-1">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-accent">{speed}</span>
            <span className="text-[10px] text-muted font-mono">KM/H</span>
          </div>
          <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden mt-1 border border-subtle">
            <div
              className="bg-accent h-full transition-all duration-300"
              style={{ width: `${(speed / 350) * 100}%` }}
            />
          </div>
        </div>

        {/* Gear */}
        <div className="p-3 bg-surface-muted/60 border border-subtle rounded-xl flex flex-col items-center justify-center">
          <span className="text-[11px] font-mono text-muted uppercase tracking-wider">Gear</span>
          <span className="text-2xl sm:text-3xl font-mono font-bold text-accent-warm my-1">{gear}</span>
          <span className="text-[10px] text-muted font-mono">Sequential</span>
        </div>

        {/* RPM */}
        <div className="p-3 bg-surface-muted/60 border border-subtle rounded-xl flex flex-col items-center justify-center">
          <span className="text-[11px] font-mono text-muted uppercase tracking-wider">Engine RPM</span>
          <div className="flex items-baseline gap-1 my-1">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-primary">{rpm}</span>
          </div>
          <span className="text-[10px] text-muted font-mono">V6 Turbo Hybrid</span>
        </div>

        {/* DRS & Lap */}
        <div className="p-3 bg-surface-muted/60 border border-subtle rounded-xl flex flex-col items-center justify-center">
          <span className="text-[11px] font-mono text-muted uppercase tracking-wider">DRS Wing</span>
          <span className={`px-2 py-0.5 my-1 text-xs font-mono font-semibold rounded ${
            drsActive ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30' : 'bg-surface text-muted border border-subtle'
          }`}>
            {drsActive ? 'DRS OPEN' : 'CLOSED'}
          </span>
          <span className="text-[10px] text-muted font-mono">Sector 2 Delta: -0.142s</span>
        </div>
      </div>

      {/* Leaderboard Snippet */}
      <div className="mt-4 p-3 bg-surface-muted/40 border border-subtle rounded-xl text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span className="text-secondary font-medium">Grand Prix Live Telemetry Snippet:</span>
          <span className="font-mono text-primary">P1 • 1:21.890 • Soft C3</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Live WebSocket Feed Simulation</span>
        </div>
      </div>
    </div>
  );
};
