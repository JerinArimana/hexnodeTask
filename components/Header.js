import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <header className="header">
        <Image
          src="https://static.hexnode.com/img/events/hexcon24/hexcon24-logo.svg"
          width={120}
          height={25}
          alt="Picture of the author"
        />
      </header>
    </>
  );
};

export default Header;
