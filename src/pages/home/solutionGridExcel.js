import SectionSecondHeader from "../../../components/UI-widget/sectionSecondHeader";
import SolutionGridExcelCard from "../../../components/UI-widget/solutionGridExcelCard";
import unified_endpoint_management from "../../../public/images/unified-endpoint-management.jpg";
const SolutionGridExcel = () => {
  const solutionGridExcel = [
    {
      id: 1,
      image: unified_endpoint_management,
      title: `Unified Endpoint Management`,
      href: "#",
    },
    {
      id: 1,
      image: unified_endpoint_management,
      title: `Unified Endpoint Management`,
      href: "#",
    },
    {
      id: 1,
      image: unified_endpoint_management,
      title: `Unified Endpoint Management`,
      href: "#",
    },
    {
      id: 1,
      image: unified_endpoint_management,
      title: `Unified Endpoint Management`,
      href: "#",
    },
    {
      id: 1,
      image: unified_endpoint_management,
      title: `Unified Endpoint Management`,
      href: "#",
    },
    {
      id: 1,
      image: unified_endpoint_management,
      title: `Unified Endpoint Management`,
      href: "#",
    },
  ];

  const onClickHandler = () => {
    console.log("cliked one");
  };
  return (
    <>
      <SectionSecondHeader
        title={`Excel in desktop, mobile and IoT management`}
        removeText
        dark
        center
      />
      <div className="solutionGrid-excel__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {solutionGridExcel.map((data) => (
          <SolutionGridExcelCard
            key={data.id}
            image={data.image}
            title={data.title}
            href={data.href}
          />
        ))}
      </div>
    </>
  );
};

export default SolutionGridExcel;
