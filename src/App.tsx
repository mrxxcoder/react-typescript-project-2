import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const renderFormInputList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col">
      <label
        className="mb-[2px] text-gray-700 text-sm font-medium"
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input type="text" id={input.id} name={input.name} />
    </div>
  ));

  const renderProductsList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-700" onClick={openModal}>
        Add
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductsList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700">Submit</Button>
            <Button className="bg-gray-500">Cancel</Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
