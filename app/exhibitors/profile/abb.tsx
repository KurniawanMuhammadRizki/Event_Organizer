import LocationCard from "@/app/components/Card/locationCard";
import React from "react";

const Abb = () => {
  return (
    <div>
      <div className="w-full h-28 bg-black"></div>

      <div className="pt-32 px-16">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-bold">Exhibitor 2024</h1>{" "}
            {/* Status Company*/}
            <h1 className="text-5xl font-bold">ABB</h1>
            <div>
              <LocationCard
                description="Hall A B2"
                icon="A"
                link=""
                title="Hall A"
              />
            </div>
          </div>
          <div className="w-[100px] h-[100px] border border-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Abb;