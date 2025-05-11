import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            Hi, I am Aniket Kachhadiya, I am a Full stack Devloper. I work from Surat, Gujrat. I have  experience in building, designing, and customizing websites and mobile apps.
          </p>
          <Button className="mt-5">Download CV</Button>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Backend</h6>
              <p>55%</p>
            </div>
            <ProgressBar color="blue" progress={55} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Frontend</h6>
              <p>95%</p>
            </div>
            <ProgressBar color="amber" progress={95} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Mobile App</h6>
              <p>65%</p>
            </div>
            <ProgressBar color="rose" progress={65} />
          </div>
         
        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">5+</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>
       

        

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">6+</h2>
            <p className="mt-1">Months of experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
