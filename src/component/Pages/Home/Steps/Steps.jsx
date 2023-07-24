import React from "react";
import { FaRegArrowAltCircleLeft, FaSearch } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import SectionHeader from "../../../shared/SectionHeader";

const Steps = () => {

  return (
    <div className="mt-10">
      <SectionHeader header={'Simple steps to start'}></SectionHeader>
      <div className="grid grid-cols-4 w-11/12 mx-auto my-6 gap-4">
        <div className="border p-4 rounded">
          <p className="border-2 border-black rounded-full text-4xl w-14 p-2 my-2">
            <FaSearch></FaSearch>
          </p>
          <h2 className="font-bold uppercase text-xl my-4">query</h2>
          <p>
            Prospective students seek information about colleges, including
            admission requirements, programs, and financial aid, to make
            informed decisions.
          </p>
        </div>
        <div className="border p-4 rounded">
          <p className="border-2 border-black rounded-full text-4xl w-14 p-2 my-2">
            <FaUserGraduate></FaUserGraduate>
          </p>
          <h2 className="font-bold uppercase text-xl my-4">choose</h2>
          <p>
          Students evaluate colleges based on factors like reputation, location, and programs, ultimately selecting the best-fit institution from their acceptance offers.
          </p>
        </div>
        <div className="border p-4 rounded">
          <p className="border-2 border-black rounded-full text-4xl w-14 p-2 my-2">
            <FaRegFileAlt></FaRegFileAlt>
          </p>
          <h2 className="font-bold uppercase text-xl my-4">enroll</h2>
          <p>
          After choosing a college, students complete enrollment procedures, submitting forms and fees to secure their spot and confirm attendance.
          </p>
        </div>
        <div className="border p-4 rounded">
          <p className="border-2 border-black rounded-full text-4xl w-14 p-2 my-2">
            <FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft>
          </p>
          <h2 className="font-bold uppercase text-xl my-4">start</h2>
          <p>
          With enrollment completed, students begin their academic journey, attending classes and engaging in college life at their chosen institution. It marks a significant milestone in their education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
