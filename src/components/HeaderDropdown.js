import React from "react";

function HeaderDropdown() {
  return (
    <div
      className="collapse md:absolute top-20 left-20 flex justify-between text-black bg-white text-base p-5 list-none text-left rounded-md shadow-2xl border-none"
      id="collapseExample"
    >
      <div className="md:flex justify-between text-black bg-transparent">
        <div className="dropdown-item w-full md:w-[200px] px-5 flex flex-col">
          <h1 className="text-base text-gray-300 w-full py-3 border-b-2 border-gray-300">
            EDGE TO CLOUD
          </h1>
          <h1 className="font-bold drop-item text-xl py-5">HPE GreenLake</h1>
          <p className="font-normal">
            Accelerate your data-first modernization with the HPE GreenLake
            edge-to-cloud platform, which brings the cloud to wherever your apps
            and data live.
          </p>
          <a
            href="https://www.hpe.com/us/en/greenlake.html"
            className="arrow-animation flex text-lg font-semibold hover:font-bold justify-center items-center text-green-500 rounded py-3 my-3"
          >
            Learn more about HPE GreenLake platform
          </a>
        </div>
        <div className="dropdown-item w-full md:w-[200px] px-5 flex flex-col">
          <h1 className="text-base text-gray-300 w-full py-3 border-b-2 border-gray-300">
            CLOUD ADOPTION
          </h1>
          <h1 className="font-bold drop-item text-xl py-5">
            HPE GreenLake Edge-to-Cloud Adoption Framework
          </h1>
          <p className="font-normal">
            Our proven methodology gives you the expertise you need to evolve to
            a cloud operating model across all your locations.
          </p>
          <a
            href="https://www.hpe.com/us/en/greenlake.html"
            className="arrow-animation flex text-lg font-semibold hover:font-bold justify-center items-center text-green-500 rounded py-3 my-3"
          >
            Learn about the framework
          </a>
        </div>
        <div className="dropdown-item w-full md:w-[200px] px-5 flex flex-col">
          <h1 className="text-base text-gray-300 w-full py-3 border-b-2 border-gray-300">
            CLOUD SERVICES
          </h1>
          <a
            href="https://www.hpe.com/us/en/greenlake/ai-ml-analytics.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            AI, ML and Analytics
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/business-applications.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Business Applications
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/compute.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Compute
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/containers.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Containers
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/data-protection.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Data Protection
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/database-platform.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Database
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/edge.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Edge
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/high-performance-compute.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            HPC
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/hybrid-multi-cloud-services.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Hybrid and Muticloud
          </a>
        </div>
        <div className="dropdown-item w-full md:w-[200px] px-5 flex flex-col">
          <h1 className="text-base text-gray-300 w-full py-3 border-b-2 border-gray-300">
            CLOUD SERVICES
          </h1>
          <a
            href="https://www.hpe.com/us/en/greenlake/hyperconverged-infrastructure.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Hyperconverged
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/cloud-migration-services.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Migration
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/networking.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Networking
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/sap-hana.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            SAP
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/security-risk-compliance.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Security, Risk, and Compliance
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/storage.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Storage
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/vdi.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            VDI
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/virtualization.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Virtualization
          </a>
        </div>
        <div className="dropdown-item w-full md:w-[200px] px-5 flex flex-col">
          <h1 className="text-base text-gray-300 w-full py-3 border-b-2 border-gray-300">
            INDUSTRY
          </h1>
          <a
            href="https://www.hpe.com/us/en/greenlake/financial-services-industry.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Financial Services
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/healthcare.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Healthcare
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/manufacturing.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Manufacturing
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/public-sector.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Public Sector
          </a>
          <a
            href="https://www.hpe.com/us/en/greenlake/telco.html"
            className="font-semibold text-black hover:text-green-500 py-3"
          >
            Telco
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderDropdown;
