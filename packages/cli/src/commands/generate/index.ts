import consola from 'consola';
import inquirer from 'inquirer';

import generateDocument from './document';
import generateComponent from './component';

const GENERATE_ACTIONS_MAP = {
  document: generateDocument,
  component: generateComponent,
};

type GenerateType = keyof typeof GENERATE_ACTIONS_MAP;

function AssertGenerateType(type: string): asserts type is GenerateType {
  if (!Object.keys(GENERATE_ACTIONS_MAP).includes(type)) {
    throw new Error(`The type ${type} is not supported`);
  }
}

export default async (type?: string) => {
  try {
    if (process.cwd() !== __PROJECT_ROOT__) {
      throw new Error('Please run this command in the project root directory');
    }
    let generateType: string;
    if (!type) {
      const prompt = await inquirer.prompt({
        name: 'type',
        type: 'list',
        choices: ['component', 'document'],
        message: 'Please select the type to generate: ',
      });
      generateType = prompt.type;
    } else {
      generateType = type;
    }
    AssertGenerateType(generateType);
    await GENERATE_ACTIONS_MAP[generateType]();
  } catch (error) {
    consola.error((error as Error).message);
  }
};
