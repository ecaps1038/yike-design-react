import { BackTop } from '@yike-design/react';

export default () => {
  return (
    <div>
      <BackTop />
      <ul className="px-10 list-decimal">
        {new Array(50).fill(0).map((_, index) => (
          <li key={index} className="py-3">
            this is content
          </li>
        ))}
      </ul>
    </div>
  );
};
