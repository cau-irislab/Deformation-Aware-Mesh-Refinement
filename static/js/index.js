'use strict';

const track = document.getElementById('example-track');
const cards = Array.from(document.querySelectorAll('.example-card'));
const previous = document.getElementById('examples-previous');
const next = document.getElementById('examples-next');
const status = document.getElementById('examples-status');
const dots = document.getElementById('examples-dots');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const visible = new Set();
const programmaticPause = new WeakSet();
const states = cards.map(card => {
  const first = card.querySelector('video');
  first.width = 1920; first.height = 1440;
  const alternate = first.cloneNode(false);
  alternate.removeAttribute('id');
  alternate.removeAttribute('autoplay');
  alternate.hidden = true;
  alternate.preload = 'none';
  const base = `static/videos/compare/${card.dataset.example}/`;
  alternate.poster = `${base}red.png`;
  ['webm', 'mp4'].forEach(extension => {
    const source = document.createElement('source');
    source.src = `${base}red.${extension}`;
    source.type = `video/${extension}`;
    alternate.append(source);
  });
  first.after(alternate);
  const controls = document.createElement('div');
  controls.className = 'backface-controls';
  controls.setAttribute('role', 'group');
  controls.setAttribute('aria-label', `${card.querySelector('h3').textContent}: backface display`);
  const message = document.createElement('p');
  message.className = 'mode-status';
  message.setAttribute('role', 'status');
  const state = { card, active: first, mode: 'culling', videos: { culling: first, red: alternate },
    buttons: {}, pausedByUser: false, switching: false, message, base };
  [['culling', 'Backface culling'], ['red', 'Red backfaces']].forEach(([mode, label]) => {
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = label; button.dataset.mode = mode;
    button.setAttribute('aria-pressed', String(mode === state.mode));
    button.addEventListener('click', () => switchMode(state, mode));
    controls.append(button); state.buttons[mode] = button;
  });
  first.before(controls);
  const labels = document.createElement('div');
  labels.className = 'comparison-labels';
  ['Original mesh', 'Refined mesh'].forEach(text => {
    const label = document.createElement('span'); label.textContent = text; labels.append(label);
  });
  first.before(labels);
  const detail = { fish: 'Tail', mammoth: 'Body', woman: 'Waist', gingerbread: 'Torso', dinosaur: 'Legs', badger: 'Chest' }[card.dataset.example];
  const captions = document.createElement('div');
  captions.className = 'comparison-labels zoom-labels';
  for (let i = 0; i < 2; i++) {
    const label = document.createElement('span'); label.textContent = detail; captions.append(label);
  }
  alternate.after(captions, message);
  Object.values(state.videos).forEach(video => {
    video.muted = true;
    video.addEventListener('pause', () => {
      if (programmaticPause.has(video)) programmaticPause.delete(video);
      else if (state.active === video && !state.switching) state.pausedByUser = true;
    });
    video.addEventListener('play', () => {
      if (state.active === video && !state.switching) state.pausedByUser = false;
    });
  });
  return state;
});

function pauseVideo(video) {
  if (!video.paused) {
    programmaticPause.add(video);
    video.pause();
  }
}
function updatePlayback() {
  states.forEach(state => {
    if (state.switching) return;
    const video = state.active;
    video.muted = true;
    video.autoplay = !reducedMotion.matches;
    if (document.hidden || !visible.has(state.card)) pauseVideo(video);
    else if (!reducedMotion.matches && !state.pausedByUser) video.play().catch(() => {});
  });
}

function waitForMedia(video, event, ready) {
  if (ready()) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const cleanup = () => { clearTimeout(timer); video.removeEventListener(event, success); video.removeEventListener('error', failure); };
    const success = () => { cleanup(); resolve(); };
    const failure = () => { cleanup(); reject(new Error('Unable to load video')); };
    const timer = setTimeout(failure, 15000);
    video.addEventListener(event, success, { once: true });
    video.addEventListener('error', failure, { once: true });
  });
}

async function switchMode(state, mode) {
  if (state.switching || mode === state.mode) return;
  const old = state.active, incoming = state.videos[mode];
  const time = old.currentTime, playing = !old.paused;
  const pausedByUser = state.pausedByUser;
  state.switching = true;
  state.card.setAttribute('aria-busy', 'true');
  Object.values(state.buttons).forEach(button => { button.disabled = true; });
  state.message.textContent = 'Switching view…';
  pauseVideo(old); // Keep the old frame visible until its counterpart is ready.
  try {
    if (incoming.readyState < 1) { incoming.preload = 'auto'; incoming.load(); }
    await waitForMedia(incoming, 'loadedmetadata', () => incoming.readyState >= 1);
    incoming.playbackRate = old.playbackRate;
    const target = Math.min(time, Math.max(0, incoming.duration - .001));
    if (Math.abs(incoming.currentTime - target) > .0001) {
      incoming.currentTime = target;
      await waitForMedia(incoming, 'seeked', () => !incoming.seeking);
    }
    await waitForMedia(incoming, 'loadeddata', () => incoming.readyState >= 2);
    old.autoplay = false;
    incoming.hidden = false; old.hidden = true;
    state.active = incoming; state.mode = mode;
    state.card.querySelector('.example-link').href = `${state.base}${mode}.mp4`;
    Object.entries(state.buttons).forEach(([key, button]) => button.setAttribute('aria-pressed', String(key === mode)));
    state.message.textContent = '';
    if (playing && visible.has(state.card) && !document.hidden) await incoming.play().catch(() => {});
  } catch (error) {
    state.message.textContent = 'Could not load this view. Please try again.';
    if (playing && visible.has(state.card) && !document.hidden) old.play().catch(() => {});
  } finally {
    state.pausedByUser = pausedByUser;
    state.switching = false;
    state.card.removeAttribute('aria-busy');
    Object.values(state.buttons).forEach(button => { button.disabled = false; });
  }
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= .5) visible.add(entry.target);
    else visible.delete(entry.target);
  });
  updatePlayback();
}, { threshold: [0, .5] });
cards.forEach(card => observer.observe(card));

function layout() {
  const count = Number(getComputedStyle(track).getPropertyValue('--visible'));
  const step = cards[0].getBoundingClientRect().width + 20;
  const start = Math.max(0, Math.min(cards.length - count, Math.round(track.scrollLeft / step)));
  return { count, step, start };
}
function updateNavigation() {
  const { count, start } = layout();
  const frame = cards[0].querySelector('video:not([hidden])').getBoundingClientRect();
  const carousel = track.parentElement.getBoundingClientRect();
  const arrowTop = `${frame.top - carousel.top + frame.height / 2 - 22}px`;
  previous.style.top = arrowTop; next.style.top = arrowTop;
  previous.disabled = start === 0;
  next.disabled = start >= cards.length - count;
  status.textContent = `${start + 1}–${Math.min(start + count, cards.length)} / ${cards.length}`;
  const positions = cards.length - count + 1;
  if (dots.children.length !== positions) {
    dots.replaceChildren();
    for (let i = 0; i < positions; i++) {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', `Show examples ${i + 1} to ${i + count}`);
      button.setAttribute('aria-controls', 'example-track');
      button.addEventListener('click', () => {
        const { step } = layout();
        track.scrollTo({ left: i * step, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
      });
      dots.append(button);
    }
  }
  Array.from(dots.children).forEach((button, i) => button.setAttribute('aria-current', String(i === start)));
}
function move(direction) {
  const { count, step, start } = layout();
  const target = Math.max(0, Math.min(cards.length - count, start + direction));
  track.scrollTo({ left: target * step, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
}
previous.addEventListener('click', () => move(-1));
next.addEventListener('click', () => move(1));
track.addEventListener('keydown', event => {
  if (event.target !== track) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1);
  }
});
track.addEventListener('scroll', updateNavigation, { passive: true });
new ResizeObserver(updateNavigation).observe(track);
document.addEventListener('visibilitychange', updatePlayback);
function updateMotionPreference() {
  if (reducedMotion.matches) states.forEach(state => pauseVideo(state.active));
  updatePlayback();
}
reducedMotion.addEventListener('change', updateMotionPreference);
updateNavigation();
updateMotionPreference();
