'use strict';

const video = document.getElementById('comparison-video');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function updateMotionPreference() {
  if (!video) return;
  video.muted = true;
  video.autoplay = !reducedMotion.matches;
  if (reducedMotion.matches) video.pause();
  else video.play().catch(() => {}); // Native controls remain usable if autoplay is blocked.
}
updateMotionPreference();
if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', updateMotionPreference);
