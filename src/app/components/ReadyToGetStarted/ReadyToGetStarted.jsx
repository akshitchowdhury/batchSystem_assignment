import Image from 'next/image';

const ReadyToGetStarted = () => {
  return (
    <div
      className="flex flex-col lg:flex-row text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/getstartedbg.svg')" }}
    >
      <div className="text-center items-center justify-between my-auto pt-8 lg:pt-0 lg:text-left lg:w-1/2 md:pl-12 lg:pl-20">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ready To Get Started?</h1>
        <p className="lg:text-xl mb-6">Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.</p>
        <button className="bg-white text-black py-2 px-4 rounded-lg flex items-center justify-center">
          Download App
          <img src="/assets/apple.svg" alt="apple" className="ml-2"/>
        </button>
      </div>
      <div className="lg:w-1/2 block justify-end items-end">
        <Image src="/assets/getstartedimg.svg" alt="App Preview" width={600} height={600} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ReadyToGetStarted;
