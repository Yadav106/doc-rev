import AboutInfo from "../../_components/about-info";
import ProfessionalDetails from "../../_components/prof-details";


export default function Dashboard() {
  return (
    <div>
      {/* Phone View */}
      <div className="md:hidden flex flex-col">
        <AboutInfo />
        <ProfessionalDetails />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex md:justify-around p-10">
        <div className="w-[60%]">
          <ProfessionalDetails />
        </div>
        <div className="w-[30%] border border-black rounded-xl bg-gray-100">
          <AboutInfo />
        </div>
      </div>
    </div>
  );
}
