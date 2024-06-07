import Image from 'next/image';

const Advantages2 = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 order-2 lg:order-1">
        <Image src="/assets/advantages2.svg" alt="App Screenshot" layout="responsive" width={600} height={600} />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center py-8 px-7 lg:pl-32 lg:pr-24 order-1 lg:order-2">
        <div className="flex flex-col mt-4">
          <div className="flex items-center">
            <Image src="/assets/advantageslogo2.svg" alt="Notification Icon" width={40} height={40} />
            <h2 className="ml-2 text-xl font-semibold">Fully Customizable</h2>
          </div>
          <p className="mt-2 text-gray-600">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acomusan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Leotus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages2;
