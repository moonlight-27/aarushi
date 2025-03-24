import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa"; // Importing social media icons

const Contact = () => {
  const [favoriteVlog, setFavoriteVlog] = useState("");

  const handlePollSubmit = () => {
    if (favoriteVlog) {
      toast.success(`Thanks for sharing! You chose: ${favoriteVlog}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.error("Please select a vlog first!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="mt-11 lg:mt-16 px-4 md:px-7 lg:px-12 text-white">
      <div className="font-unbounded space-y-2">
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          Let’s Chat!
        </h1>
        <p className="lg:max-w-3xl mx-auto text-xl text-center">
          Ready to talk about your favorite vlogs, new adventures, or anything
          fun? Drop us a quick note!
        </p>
      </div>

      {/* Fun Poll Section */}
      <div className="mt-16 lg:mt-24 text-center">
        <h2 className="text-2xl font-bold">
          What's Your Favorite Vlog So Far?
        </h2>
        <div className="mt-6">
          <button
            onClick={() => setFavoriteVlog("Travel Adventures")}
            className={`p-4 rounded-lg mr-4 bg-[#111111] hover:bg-gray-700 ${
              favoriteVlog === "Travel Adventures" ? "bg-blue-500" : ""
            }`}
          >
            Travel Adventures
          </button>
          <button
            onClick={() => setFavoriteVlog("Behind the Scenes")}
            className={`p-4 rounded-lg mr-4 bg-[#111111] hover:bg-gray-700 ${
              favoriteVlog === "Behind the Scenes" ? "bg-blue-500" : ""
            }`}
          >
            Behind the Scenes
          </button>
          <button
            onClick={() => setFavoriteVlog("Q&A Sessions")}
            className={`p-4 rounded-lg mr-4 bg-[#111111] hover:bg-gray-700 ${
              favoriteVlog === "Q&A Sessions" ? "bg-blue-500" : ""
            }`}
          >
            Q&A Sessions
          </button>
          <button
            onClick={() => setFavoriteVlog("Vlog Challenges")}
            className={`p-4 rounded-lg mr-4 bg-[#111111] hover:bg-gray-700 ${
              favoriteVlog === "Vlog Challenges" ? "bg-blue-500" : ""
            }`}
          >
            Vlog Challenges
          </button>
        </div>

        <div className="mt-6">
          <button
            onClick={handlePollSubmit}
            className="p-4 rounded-lg bg-white text-black font-bold hover:bg-gray-300"
          >
            Submit Your Favorite Vlog
          </button>
        </div>
      </div>

      {/* Social Media Interaction Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold">
          Or Connect with Us on Social Media!
        </h2>
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://www.instagram.com/arushehh_?igsh=cWhraW52ZGVyN2Jy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={32}
              className="text-white hover:text-gray-400 transition"
            />
          </a>
          <a
            href="https://www.youtube.com/@AARUSHI_SINHA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube
              size={32}
              className="text-white hover:text-gray-400 transition"
            />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              size={32}
              className="text-white hover:text-gray-400 transition"
            />
          </a>
          <a
            href="https://www.facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={32}
              className="text-white hover:text-gray-400 transition"
            />
          </a>
        </div>
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
