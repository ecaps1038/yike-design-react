import inquirer from 'inquirer';
import matter from 'gray-matter';
import { basename, resolve } from 'node:path';
import { readFileSync, readJsonSync, readdirSync, writeFileSync } from 'fs-extra';

const DOCS_SOURCE_DIR = resolve(__PROJECT_ROOT__, 'docs/src');

const DOCS_CONTENT_DIR = resolve(DOCS_SOURCE_DIR, 'content/docs');

const COMPONENTS_DOCS_DIR = resolve(DOCS_CONTENT_DIR, 'components');

const DOCS_GROUP_DEFINE_FILE = resolve(DOCS_SOURCE_DIR, 'doc-groups.json');

const COMPONENTS_DIR = resolve(__PROJECT_ROOT__, 'packages/yike-design/src/components');

interface DocGroupDefine {
  key: string;
  text: string;
}

const GROUP_DEFINITION = readJsonSync(DOCS_GROUP_DEFINE_FILE) as Record<string, DocGroupDefine[]>;

export default async () => {
  const components = readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter(item => item.isDirectory() && !item.name.startsWith('_'))
    .map(item => item.name);

  const docs = readdirSync(COMPONENTS_DOCS_DIR, { withFileTypes: true })
    .filter(item => item.isFile())
    .map(item => basename(item.name, '.mdx'));

  const choices = components.filter(item => !docs.includes(item));

  if (choices.length === 0) {
    throw new Error('No component can be documented');
  }

  const { component } = await inquirer.prompt({
    name: 'component',
    type: 'list',
    choices,
    message: 'Please select the document type: ',
  });

  const groups = GROUP_DEFINITION.components;

  const { category } = await inquirer.prompt({
    name: 'category',
    type: 'list',
    choices: groups.map(item => ({ name: item.text, value: item.key })),
    message: 'Please select the document category: ',
  });

  const { title } = await inquirer.prompt({
    name: 'title',
    type: 'input',
    validate: input => !!input?.trim(),
    message: 'Please select the document title (browser tab title): ',
  });

  const { label } = await inquirer.prompt({
    name: 'label',
    type: 'input',
    validate: input => !!input?.trim(),
    message: 'Please select the document label (link text): ',
  });

  // const orderMap = docs.reduce(
  //   (map, item) => {
  //     const { data } = matter(readFileSync(resolve(COMPONENTS_DOCS_DIR, `${item}.mdx`), 'utf-8'));
  //     if (data.category === category) {
  //       map[item] = data.order;
  //     }
  //     return map;
  //   },
  //   {} as Record<string, number>
  // );

  const order = docs.reduce((memo, item) => {
    const { data } = matter(readFileSync(resolve(COMPONENTS_DOCS_DIR, `${item}.mdx`), 'utf-8'));
    if (data.category === category) {
      memo++;
    }
    return memo;
  }, 1);

  writeFileSync(
    resolve(COMPONENTS_DOCS_DIR, `${component}.mdx`),
    matter.stringify(`# ${label}`, { title, label, category, order })
  );
};
