const SectionSecondHeader = ({ title, removeText, text, dark, center }) => {
  return (
    <>
      <h2
        className={` pb-10  mb-0 font-bold ${
          center ? "text-center" : undefined
        } ${dark ? "text-black" : "text-white"} text-[30px] md:text-[36px]`}
      >
        {title}
      </h2>
      {removeText ? null : (
        <p
          className={`sec-text pb-3 text-[16px] md:text-[18px] ${
            dark ? "text-black" : "text-white"
          }`}
        >
          {text}
        </p>
      )}
    </>
  );
};

export default SectionSecondHeader;
