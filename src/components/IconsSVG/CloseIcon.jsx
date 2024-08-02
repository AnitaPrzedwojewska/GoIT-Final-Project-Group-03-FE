const CloseIcon = (props) => {
  return (
    <svg width='1em' height='1em' fill='none' viewBox='0 0 20 21' {...props}>
      <path
        d='M15.625 4.875L4.375 16.125'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.625 16.125L4.375 4.875'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default CloseIcon;
