export default function ContentWrapper({ children }) {
  return (
    <div className="bg-gradient-to-r from-dark_blue via-dark_purple to-lighter_purple w-full text-white_op_70 font-poppins">
      {children}
    </div>
  );
}
