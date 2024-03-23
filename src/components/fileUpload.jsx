import { useForm } from "react-hook-form";

const FileUpload = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.executable);
    reset();
  };
  return (
    <>
      <form
        className="max-w-sm mx-auto my-4 p-6 bg-gray-100 rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="block mb-2 font-bold text-gray-700">
          Upload Executable File
        </label>
        <div className="flex items-center justify-between border border-gray-300 rounded-md py-2 px-3">
          <input
            {...register("executable")}
            type="file"
            name="executable"
            className="w-full py-2 leading-tight focus:outline-none"
          />
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Submit
          </button>
        </div>
        {errors.file && (
          <p className="text-red-500">File uploaded should be valid</p>
        )}
      </form>
    </>
  );
};

export default FileUpload;
