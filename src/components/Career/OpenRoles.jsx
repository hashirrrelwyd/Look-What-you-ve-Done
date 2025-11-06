import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { useCursor } from "../../context/CursorContext";
import { openRoles, roleDepartments } from "../../data/roles";
import { useState } from "react";

export default function OpenRoles() {
  const { setHoverType } = useCursor();

  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [selectedDepartment, setSelectedDepartment] = useState("Department");

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);

  const locations = ["Location", "Onsite", "Remote"];

  return (
    <div className="bg-[#111111] px-6 md:px-10 py-12 text-white rounded-b-4xl relative">
      <div className="flex flex-col sm:flex-row justify-between pb-4 space-y-4">
        <div
          onMouseEnter={() => setHoverType("big-white")}
          onMouseLeave={() => setHoverType("default")}
        >
          <p className="text-sm lg:text-lg">
            <span className="text-lwyd-yellow">/</span> Open Roles
          </p>
        </div>

        <div className="flex justify-between gap-4 relative">
          {/* Location Dropdown */}
          <div
            className="relative w-1/2 sm:w-46"
            onMouseEnter={() => setHoverType("button")}
            onMouseLeave={() => setHoverType("default")}
          >
            <div
              onClick={() => {
                setShowLocationDropdown((prev) => !prev);
                setShowDepartmentDropdown(false);
              }}
              className="bg-[#FFFFFF1A] px-2 py-1 flex gap-3 items-center justify-between rounded-sm"
            >
              <p>{selectedLocation}</p>
              <GoChevronDown className={`text-xl transition-transform duration-200 ${showLocationDropdown ? "rotate-180" : ""}`} />
            </div>

            {showLocationDropdown && (
              <div className="absolute z-10 mt-2 bg-[#1e1e1e] border border-gray-700 rounded-sm w-full">
                {locations.map((loc) => (
                  <div
                    key={loc}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setShowLocationDropdown(false);
                    }}
                    className="px-3 py-2 hover:bg-[#2a2a2a]"
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Department Dropdown */}
          <div
            className="relative w-1/2 sm:w-46"
            onMouseEnter={() => setHoverType("button")}
            onMouseLeave={() => setHoverType("default")}
          >
            <div
              onClick={() => {
                setShowDepartmentDropdown((prev) => !prev);
                setShowLocationDropdown(false);
              }}
              className="bg-[#FFFFFF1A] px-2 py-1 flex gap-3 items-center justify-between rounded-sm"
            >
              <p>{selectedDepartment}</p>
              <GoChevronDown className={`text-xl transition-transform duration-200 ${showDepartmentDropdown ? "rotate-180" : ""}`} />
            </div>

            {showDepartmentDropdown && (
              <div className="absolute z-10 mt-2 bg-[#1e1e1e] border border-gray-700 rounded-sm w-full">
                {["Department", ...roleDepartments].map((dept) => (
                  <div
                    key={dept}
                    onClick={() => {
                      setSelectedDepartment(dept);
                      setShowDepartmentDropdown(false);
                    }}
                    className="px-3 py-2 hover:bg-[#2a2a2a]"
                  >
                    {dept}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <hr className="text-[#FFFFFF1A]" />
        {openRoles
          .filter(
            (role) =>
              (selectedLocation === "Location" ||
                role.location === selectedLocation) &&
              (selectedDepartment === "Department" ||
                role.department === selectedDepartment)
          )
          .map((role, index) => (
            <div key={index} className="group">
              <div
                onMouseEnter={() => setHoverType("button")}
                onMouseLeave={() => setHoverType("default")}
                onClick={() => window.open(`${role.googleForm}`, "_blank")}
                className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 justify-between sm:items-center py-3"
              >
                {/* Left content: Role */}
                <div className="text-[#FFFFFF99]">
                  <h3>{role.role}</h3>
                </div>

                {/* Right content: Tags and chevron */}
                <div className="flex items-center max-sm:justify-end gap-2 transition-all duration-500 ease-in-out group-hover:-translate-x-10">
                  <div className="bg-[#FFFFFF1A] px-2 py-1 rounded-sm text-[#7D7D7D]">
                    {role.department}
                  </div>
                  <div className="bg-[#FFFFFF1A] px-2 py-1 rounded-sm text-[#7D7D7D]">
                    {role.location}
                  </div>

                  {/* Chevron icon appears on hover */}
                  <GoChevronRight className=" text-lwyd-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
              </div>

              <hr className="text-[#FFFFFF1A]" />
            </div>
          ))}
      </div>
    </div>
  );
}
