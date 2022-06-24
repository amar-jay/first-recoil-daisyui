const Heading: React.FC<{ children: string }> = ({ children }) => {
  return (
    <h2 className="text-center text-2xl underline underline-offset-4 font-bold">
      {children}
    </h2>
  );
};

export default Heading;
