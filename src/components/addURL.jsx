import { useForm } from "react-hook-form";
import Loading from "./Loading";
import { useEffect, useState } from "react";
const AddURL = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (loading) {
      console.log("loading");
    } else {
      console.log("got result");
    }
  }, [loading, show, result]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    send_url(data);
    reset();
  };

  async function send_url(data) {
    const myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Credentials", "true");
    myHeaders.append("Content-Type", "application/json");
    setLoading(true);
    await fetch("/api/url", {
      method: "POST",
      Accept: "*",
      headers: myHeaders,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setResult({ ...result, result: data.result });
      })
      .finally(() => {
        setShow(true);
        setLoading(false);
      });
  }

  return (
    <>
      <form
        className="max-w-sm mx-auto my-4 p-6 bg-gray-100 rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="block mb-2 font-bold text-gray-700">URL</label>
        <input
          {...register("url", {
            required: true,
            pattern:
              /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/i,
          })}
          className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.url && (
          <p className="text-red-500">URL entered must be valid</p>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {loading ? (
        <>
          <Loading />
        </>
      ) : show ? (
        <>{result.result}</>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddURL;
