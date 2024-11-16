import ResearchServiceCard from "../../../components/UI-widget/researchServiceCard";
import idc from "../../../public/images/idc-logo.png";
import gartner from "../../../public/images/gartner-logo.svg";
import forrester from "../../../public/images/forrester.png";

const ResearchService = () => {
  const researchData = [
    {
      id: 1,
      href: "https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/",
      researchBrand: idc,
      researchText: `Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.`,
    },
    {
      id: 2,
      href: "https://www.hexnode.com/blogs/hexnode-uem-gets-recognized-in-the-2023-gartner-market-guide-for-unified-endpoint-management-tools/",
      researchBrand: gartner,
      researchText: `Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.`,
    },
    {
      id: 3,
      href: "https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/",
      researchBrand: forrester,
      researchText: `Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.`,
    },
  ];
  return (
    <>
      <div className="research-service__item_wrapper md:flex">
        {researchData.map((data) => (
          <ResearchServiceCard
            href={data.href}
            researchBrand={data.researchBrand}
            researchText={data.researchText}
          />
        ))}
      </div>
    </>
  );
};

export default ResearchService;
