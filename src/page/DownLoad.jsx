import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DownLoad = () => {
  const [link, setlink] = useState(null);
  const { id } = useParams();

  const [count, setCount] = useState(10);
  const [showLinks, setshowLinks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count >= 1) {
        setCount((prev) => prev - 1);
        if (count === 1) {
          setshowLinks(true);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  useEffect(() => {
    axios
      .get(`https://mcpedls.com/a/${id}`)
      .then((res) => setlink(res.data[0].location))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className=" min-h-screen pt-[100px] flex flex-col items-center justify-center">
      <>
        <div className="text-center mb-3 text-8xl font-bold bg-brand/20 text-brand mx-auto w-[240px] h-[240px] rounded-full border-[12px] ring-[10px] ring-brand/50 border-brand grid place-items-center">
          {count}
        </div>
        <h2 className="text-center text-2xl text-brand font-bold my-5">
          {count === 0
            ? "Download link generated!"
            : "Generating download link..."}
        </h2>
      </>

      {showLinks && (
        <a
          className="block mt-10 w-fit text-2xl rounded-full text-white font-bold mx-auto px-20 py-5 bg-brand hover:shadow-xl"
          href={`https://mcpedls.com/${link}`}
        >
          Download
        </a>
      )}
    </div>
  );
};

export default DownLoad;
