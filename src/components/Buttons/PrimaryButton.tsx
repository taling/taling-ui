const PrimaryButton = (props: any): JSX.Element => {
  return (
    <div className="bg-taling-pink-400 text-white text-center px-2 py-1.5 rounded-md drop-shadow-sm cursor-pointer">
      {props.children}
    </div>
  );
};

export default PrimaryButton;
