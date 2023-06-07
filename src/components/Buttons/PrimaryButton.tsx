const PrimaryButton = ({ children }: { children: any }): JSX.Element => {
  return (
    <div className="bg-taling-pink-400 text-white px-2 py-1 rounded-md drop-shadow-sm cursor-pointer">
      {children}
    </div>
  );
};

export default PrimaryButton;
