import Image from "next/image";
import videoPlayBtn from "../../public/images/play-button-vector.svg";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const TestimonialsCard = ({
  videoThumb,
  testimonialTitle,
  videoURL,
  videoBrandLogo,
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
      <div className="multiTab__testimonial_item grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div
          onClick={handleShow}
          className="multiTab__testimonialVideo max-h-[320px] sm:max-h-[440px] min-h-[320px] sm:min-h-[440px] relative flex justify-center items-center text-center rounded-2xl overflow-hidden border-1 border-black"
        >
          <Image
            src={videoThumb}
            width={630}
            height={444}
            alt="Picture of the author"
            className="w-full h-full object-cover"
          />
          <div className="playbtn absolute w-[80px] h-[80px] flex justify-center items-center text-center before:block before:absolute before:-inset-1 before:rounded-full before:opacity-50 before:bg-[#000] z-[1]">
            <Image
              src={videoPlayBtn}
              width={30}
              height={33}
              alt="Picture of the author"
              className="z-[2]"
            />
          </div>
          <div className="video_brand absolute bottom-4 left-4 bg-white px-6 py-4 rounded-lg overflow-hidden">
            <Image
              src={videoBrandLogo}
              width={153}
              height={20}
              alt="Picture of the author"
              className="z-[2]"
            />
          </div>
        </div>
        <div className="multiTab__testimonialContent rounded-2xl overflow-hidden border-1 border-black pb-32 md:pb-8 pr-6 md:pr-10 pt-10 pl-8 md:pl-16 flex justify-between flex-col">
          <div className="multiTab__testimonialContent-info">
            <h4 className="text-[22px]  md:text-[24px] font-bold pb-4 mb-0 border-b">
              {testimonialTitle}
            </h4>
            <p className="pt-4 mb-0 text-[16px] text-[#556575]">
              {testimonialText}
            </p>
          </div>
          <div className="multiTab__testimonialContent-author">
            <h5 className="text-[#191919] font-bold text-[18px] mb-0">
              {authorName}
            </h5>
            <h6 className="text-[#020A19] text-[14px] font-normal mb-0">
              {authorRole}
            </h6>
            <p className="text-[#020A19] text-[14px] font-normal">
              {authorCompany}
            </p>
          </div>
        </div>
      </div>

      <>
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          size="lg"
          centered
          className="testimonial_modal"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="p-0">
            {" "}
            <iframe
              src={videoURL}
              frameborder="0"
              allowfullscreen
              className="w-full h-[500px]"
            />
          </Modal.Body>
        </Modal>
      </>
    </>
  );
};

export default TestimonialsCard;
