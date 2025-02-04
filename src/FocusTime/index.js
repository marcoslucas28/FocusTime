import state from './state.js';
import * as events from './events.js';
import * as time from './time.js';

export function star(minutes, seconds) {
    state.minutes = minutes;
    state.seconds = seconds;

    time.updateDisplay();

    events.registerControls();
    events.setMinutes();
}