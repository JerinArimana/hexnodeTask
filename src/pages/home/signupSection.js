import Image from "next/image";
import CustomButton from "../../../components/UI-widget/customButton";
import SectionSecondHeader from "../../../components/UI-widget/sectionSecondHeader";
import arrow_right_red from "../../../public/images/arrow-right-red.svg";
import Form from "react-bootstrap/Form";

const SignupSection = () => {
  return (
    <>
      <div>
        <SectionSecondHeader
          title={`Sign up and start the journey`}
          removeText
          center
        />
        <Form className="flex-col flex md:flex-row gap-2 m-auto justify-center items-center ">
          <Form.Group
            className="max-w-[280px] min-h-12 input_item"
            controlId="formBasicEmail"
          >
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="h-full rounded min-h-12"
            />
          </Form.Group>

          <CustomButton href={""} label={`Get Started`} />
        </Form>
        <div className=" flex-col flex md:flex-row justify-center items-center mt-4 text-[#556575] gap-2">
          No credit cards required.
          <div className="flex gap-3">
            <span className="text-[#dd0735]">Request a demo </span>
            <Image
              src={arrow_right_red}
              width={6}
              height={10}
              alt="Picture of the author"
              className="z-[2] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupSection;
