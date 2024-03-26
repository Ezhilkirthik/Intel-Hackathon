import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import File_not_supp from "./File_not_supp";

const FileUpload = () => {
  const [error, setError] = useState(" ");
  const [result, setResult] = useState(" ");
  useEffect(() => {}, [error, result]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.executable[0]);
    let send_data = data.executable[0];
    send_file(send_data);
    reset();
  };
  function send_file(data) {
    const formData = new FormData();
    formData.append("file", data);
    formData.append("fileName", data.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("/api/pe", formData, config)
      .then((response) => {
        console.log(response.data.result);
        setResult(respone.data.result);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  }
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
      </form>
      {error == "Request failed with status code 500" ? (
        <File_not_supp />
      ) : (
        <></>
      )}
    </>
  );
};

export default FileUpload;
