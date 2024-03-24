import { useForm } from "react-hook-form";

const addURL = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    send_url(data);
    get_status;
    reset();
  };

  function get_status() {
    fetch("http://127.0.0.1:5000/api", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        mode: "no-cors",
      },
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
      });
  }

  async function send_url(data) {
    const res = await fetch("http://127.0.0.1:5000/url", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5000",
        // "Access-Control-Allow-Headers": "*",
        mode: "no-cors",
      },

      body: JSON.stringify(data),
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
    </>
  );
};

export default addURL;
