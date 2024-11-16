const SectionHeader = ({ title, text, dark }) => {
  return (
    <>
      <h1
        className={`sec-title pb-3 ${
          dark ? "text-black" : "text-white"
        } text-[32px] md:text-[42px]`}
      >
        {title}
      </h1>
      <p
        className={`sec-text pb-3 text-[16px] md:text-[18px] ${
          dark ? "text-black" : "text-white"
        }`}
      >
        {text}
      </p>
    </>
  );
};

export default SectionHeader;
