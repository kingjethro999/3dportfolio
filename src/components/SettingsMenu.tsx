import React, { useState } from 'react';
import { SlidersHorizontal, Volume2, VolumeX, MousePointer, X } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export interface SettingsMenuProps {
  soundEnabled: boolean;
  onToggleSound: (next: boolean) => void;
  soundVolume: number;
  onChangeVolume: (next: number) => void;
  cursorEnabled: boolean;
  onToggleCursor: (next: boolean) => void;
}

export const SettingsMenu: React.FC<SettingsMenuProps> = ({
  soundEnabled,
  onToggleSound,
  soundVolume,
  onChangeVolume,
  cursorEnabled,
  onToggleCursor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    onToggleSound(next);
    soundManager.setEnabled(next);
    if (next) {
      soundManager.playToggle();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    onChangeVolume(val);
    soundManager.setVolume(val);
  };

  const handleTestSound = () => {
    if (!soundEnabled) {
      onToggleSound(true);
      soundManager.setEnabled(true);
    }
    soundManager.playToggle();
  };

  return (
    <div className="fixed bottom-24 sm:bottom-28 right-6 md:right-10 z-40 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          role="dialog"
          aria-label="Experience Settings"
          className="w-72 sm:w-80 rounded-[28px] border-2 border-[#D7E2EA]/80 bg-[#0C0C0C]/95 backdrop-blur-md p-5 text-[#D7E2EA] shadow-2xl"
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D7E2EA]/15">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#D7E2EA]">
                Experience Settings
              </h3>
              <p className="text-[11px] font-light text-[#D7E2EA]/60">
                Audio &amp; Interactive Cursor Controls
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close settings menu"
              className="w-8 h-8 rounded-full border border-[#D7E2EA]/25 flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {/* Sound FX Toggle */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-[#D7E2EA]" />
                ) : (
                  <VolumeX className="w-4 h-4 text-[#D7E2EA]/50" />
                )}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider">
                    Interaction Sounds
                  </p>
                  <p className="text-[11px] font-light text-[#D7E2EA]/55">
                    Howler.js hover &amp; click audio
                  </p>
                </div>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={soundEnabled}
                aria-label="Toggle interaction sound effects"
                onClick={handleToggleSound}
                className={`w-12 h-6 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${
                  soundEnabled
                    ? 'bg-[#B600A8] justify-end'
                    : 'bg-[#262930] justify-start'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-white block shadow-sm" />
              </button>
            </div>

            {/* Volume Slider */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#D7E2EA]/70">
                <label htmlFor="settings-sound-volume">Audio Volume</label>
                <span className="tabular-nums">{Math.round(soundVolume * 100)}%</span>
              </div>
              <input
                id="settings-sound-volume"
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={soundVolume}
                onChange={handleVolumeChange}
                className="w-full accent-[#B600A8] cursor-pointer"
              />
            </div>

            {/* Custom Cursor Toggle */}
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-[#D7E2EA]/10">
              <div className="flex items-center gap-2.5">
                <MousePointer className="w-4 h-4 text-[#D7E2EA]" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider">
                    Custom Cursor
                  </p>
                  <p className="text-[11px] font-light text-[#D7E2EA]/55">
                    Animated magnetic follower
                  </p>
                </div>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={cursorEnabled}
                aria-label="Toggle custom animated cursor"
                onClick={() => onToggleCursor(!cursorEnabled)}
                className={`w-12 h-6 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${
                  cursorEnabled
                    ? 'bg-[#B600A8] justify-end'
                    : 'bg-[#262930] justify-start'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-white block shadow-sm" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleTestSound}
              className="mt-1 w-full rounded-full border border-[#D7E2EA]/35 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
            >
              Test Audio Chime
            </button>
          </div>
        </div>
      )}

      {/* Floating Settings Pill Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open experience settings"
        aria-expanded={isOpen}
        className="rounded-full border-2 border-[#D7E2EA]/80 bg-[#0C0C0C]/90 backdrop-blur-md px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#181A1F] transition-colors flex items-center gap-2 shadow-xl cursor-pointer whitespace-nowrap shrink-0"
      >
        {soundEnabled ? (
          <Volume2 className="w-4 h-4 text-[#D7E2EA]" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#D7E2EA]/50" />
        )}
        <SlidersHorizontal className="w-3.5 h-3.5 text-[#D7E2EA]/80" />
        <span>Settings</span>
      </button>
    </div>
  );
};
