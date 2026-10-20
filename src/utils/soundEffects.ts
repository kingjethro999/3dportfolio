import { Howl, Howler } from 'howler';
import { createSynthesizedWavDataUri } from './portfolioMath';

class SoundEffectsManager {
  private hoverSound: Howl | null = null;
  private clickSound: Howl | null = null;
  private toggleSound: Howl | null = null;
  private enabled: boolean = true;
  private volume: number = 0.5;
  private lastHoverTimestamp: number = 0;

  private ensureInitialized() {
    if (this.hoverSound && this.clickSound && this.toggleSound) return;

    const hoverUri = createSynthesizedWavDataUri(580, 32, 0.2, 760);
    const clickUri = createSynthesizedWavDataUri(310, 58, 0.35, 145);
    const toggleUri = createSynthesizedWavDataUri(480, 85, 0.3, 720);

    this.hoverSound = new Howl({
      src: [hoverUri],
      format: ['wav'],
      volume: 0.25 * this.volume,
      preload: true,
    });

    this.clickSound = new Howl({
      src: [clickUri],
      format: ['wav'],
      volume: 0.45 * this.volume,
      preload: true,
    });

    this.toggleSound = new Howl({
      src: [toggleUri],
      format: ['wav'],
      volume: 0.4 * this.volume,
      preload: true,
    });
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
    Howler.mute(!enabled);
  }

  public setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    Howler.volume(this.volume);
  }

  public playHover() {
    if (!this.enabled) return;
    const now = performance.now();
    // Throttle rapid hover events
    if (now - this.lastHoverTimestamp < 65) return;
    this.lastHoverTimestamp = now;

    try {
      this.ensureInitialized();
      this.hoverSound?.play();
    } catch {
      // Ignore autoplay restrictions prior to user gesture
    }
  }

  public playClick() {
    if (!this.enabled) return;
    try {
      this.ensureInitialized();
      this.clickSound?.play();
    } catch {
      // Ignore autoplay restrictions
    }
  }

  public playToggle() {
    try {
      this.ensureInitialized();
      Howler.mute(false);
      this.toggleSound?.play();
      Howler.mute(!this.enabled);
    } catch {
      // Ignore autoplay restrictions
    }
  }
}

export const soundManager = new SoundEffectsManager();
