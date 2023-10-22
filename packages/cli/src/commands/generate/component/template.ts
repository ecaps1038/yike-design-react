export const ComponentTSX = `
const xxxx = () => {
  return <div>xxxx</div>;
};

export default xxxx;

`;

export const ComponentIndex = `import xxxx from './xxxx';

export { xxxx };
`;

export const IndexScss = `/* stylelint-disable-next-line no-empty-source */`;

export const StyleIndex = `import './index.scss';
import '../../../styles/index.scss';
// add dependencies styles
`;

export const GlobalIndex = `export * from './components/xxxx';`;

export const GlobalStyle = `import '../components/xxxx/style';`;
