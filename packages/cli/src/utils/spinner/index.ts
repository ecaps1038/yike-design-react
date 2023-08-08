import path from 'node:path';
import { fork } from 'node:child_process';
import type { SignalActions, SignalMessage } from './loading';

const spinner = fork(path.join(__dirname, './loading.js'));

const sendMessage = (type: SignalActions) => (message: Omit<SignalMessage, 'type'>) => {
  spinner.send({ ...message, type });
};

export default {
  start: sendMessage('start'),
  stop: sendMessage('stop'),
  fail: sendMessage('fail'),
  success: sendMessage('success'),
};
