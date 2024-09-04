import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col gap-4 px-6 mt-12 justify-center" id="profile">
      <span
        data-aos="fade-left"
        className="font-bold text-white text-[3rem] flex justify-center items-center max-[792px]:text-[1.5rem]"
      >
        About
      </span>
      <span className="px-20 text-white max-[769px]:px-3">
        My name is Sigit warsono, Passionate software engineer with 5 year of
        experience in web application development. Proficient in debugging,
        helping elevate user experience, and streamline internal processes.
        Achieved 30% efficiency increase on project delivery times. experience
        in developing web applications and backend systems. Skilled at writing
        clear, concise code that is easy to maintain and troubleshoot.
        Experienced in working with both small and large teams across multiple
        projects and companies. Able to work independently of remote locations
        or in office environments as needed by the company.
      </span>
      <div className="w-full flex justify-around max-[660px]:flex-col max-[660px]:gap-6 max-[660px]:px-3">
        <div className="flex flex-col gap-5 text-white">
          <div className="flex">
            <span className="text-blue-300">Birthday :</span>&nbsp; 09 March
            1997
          </div>
          <div className="flex">
            <span className="text-blue-300">Status :</span>&nbsp; Single
          </div>
          <div className="flex">
            <span className="text-blue-300">Phone :</span>&nbsp;
            +62&nbsp;811&nbsp;945&nbsp;165
          </div>
          <div className="flex">
            <span className="text-blue-300">City :</span>&nbsp; South jakarta,
            Indonesia
          </div>
        </div>
        <div className="flex flex-col gap-5 text-white">
          <div className="flex">
            <span className="text-blue-300">Age :</span>&nbsp; 27
          </div>
          <div className="flex">
            <span className="text-blue-300">Degree :</span>&nbsp; Master
          </div>
          <div className="flex">
            <span className="text-blue-300">Email :</span>&nbsp;
            Sigitwarsono.soft@gmail.com
          </div>
          <div className="flex">
            <span className="text-blue-300">Freelance :</span>&nbsp; Avalaible
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
