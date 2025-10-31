const AddCoffee = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-[#F4F3F0] p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2
          className="text-3xl font-bold text-center mb-2 text-gray-800"
          style={{ fontFamily: "cursive" }}
        >
          Add New Coffee
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee name"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Chef
              </label>
              <input
                type="text"
                className=" input w-full"
                placeholder="Enter coffee chef"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Supplier
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee supplier"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Taste
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee taste"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Category
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee category"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Details
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee details"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-semibold text-gray-700">
                Photo
              </label>
              <input
                type="url"
                className="input w-full"
                placeholder="Enter photo URL"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 w-full py-2 bg-yellow-200 border border-gray-400 rounded text-gray-800 font-semibold text-lg hover:bg-yellow-300 hover:scale-105 transition"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
