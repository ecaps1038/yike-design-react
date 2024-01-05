const judgeOutTag = (ref: any) => {
  const handleClickOutside = (event: any) => {
    if (ref && !ref.contains(event.target)) {
      console.log('Clicked outside the element');
    }
  };

  document.addEventListener('click', handleClickOutside);

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
};

export default judgeOutTag;
