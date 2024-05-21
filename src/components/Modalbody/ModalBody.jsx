const ModalBody = ({ modalcard }) => {
  return (
    <main className=" fixed h-[100dvh] w-full inset-0 z-50 bg-opacity-70 bg-txtD1 overflow-hidden flex justify-center  py-[100px] ">
      {modalcard}
    </main>
  );
};

export default ModalBody;
