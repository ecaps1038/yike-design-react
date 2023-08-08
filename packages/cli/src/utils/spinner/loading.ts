import ora from 'ora';

const _spinner = ora({ color: 'green' });

export type SignalActions = 'start' | 'stop' | 'fail' | 'success';
export type SignalMessage = {
  type: SignalActions;
  text?: string;
  closeChildProcess?: boolean;
};

process.on('message', ({ type, text, closeChildProcess }: SignalMessage) => {
  switch (type) {
    case 'start':
      _spinner.start(text);
      break;
    case 'stop':
      _spinner.stop();
      break;
    case 'fail':
      _spinner.fail(text);
      break;
    case 'success':
      _spinner.succeed(text);
      break;
  }
  if (type !== 'start' && closeChildProcess) {
    process.exit(0);
  }
});
