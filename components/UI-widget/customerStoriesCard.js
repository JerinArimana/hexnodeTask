import Image from "next/image";
import videoPlayBtn from "../../public/images/play-button-vector.svg";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
const CustomerStoriesCard = ({
  videoThumb,
  testimonialTitle,
  condent_list,

  testimonialText,
  authorName,
  authorRole,
  authorCompany,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="multiTab__testimonial_item grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div
          onClick={handleShow}
          className="multiTab__testimonialVideo max-h-[440px] min-h-[440px] relative flex justify-center items-center text-center rounded-2xl overflow-hidden border-1 border-black"
        >
          <Image
            src={videoThumb}
            width={630}
            height={444}
            alt="Picture of the author"
            className="w-full h-full object-cover"
          />

          <div className="video_brand absolute bottom-4 left-4  px-6 py-0 text-left rounded-lg overflow-hidden">
            <div className="multiTab__testimonialContent-author">
              <h5 className="text-white font-bold text-[18px] mb-0">
                {authorName}
              </h5>
              <h6 className="text-white text-[14px] font-normal mb-0">
                {authorRole}
              </h6>
              <p className="text-white text-[14px] font-normal">
                {authorCompany}
              </p>
            </div>
          </div>
        </div>
        <div className="multiTab__testimonialContent col-span-2 max-h-[440px] min-h-[440px] rounded-2xl overflow-hidden border-1 border-black pb-8 pr-10 pt-10 pl-16 flex justify-between flex-col">
          <div className="multiTab__testimonialContent-info">
            <h4 className="text-[24px] font-bold pb-4 mb-0 border-b">
              {testimonialTitle}
            </h4>
            <p className="pt-4 mb-0 text-[16px] text-[#556575]">
              {testimonialText}
            </p>
            <ul className="list-disc">
              {condent_list?.map((data, id) => (
                <li key={id} className="pt-1 mb-0 text-[16px] text-[#556575]">
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div className="multiTab__testimonialContent-author">
            <Link href={"#"}>
              <button className="underline">View Customer Story</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerStoriesCard;
