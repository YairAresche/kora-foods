import React, { useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import { motion } from "framer-motion";
import Image from "next/image";

const YOUTUBE_VIDEOS = [
  {
    id: 1,
    title: "Entrevista exclusiva",
    url: "mRFreiYOg7g",
  },
  {
    id: 2,
    title: "Cobertura de evento",
    url: "XbMMHe2XpTQ",
  },
  {
    id: 3,
    title: "Opinión de expertos",
    url: "99y2wWD1x80",
  },
];

const PRESS_NOTES = [
  {
    id: 1,
    title: "Artículo en La Nación",
    description:
      "Kimchi: el plato coreano que conquistó el mundo y se transformó en un gran negocio.",
    image: "/images/press/lanacion.avif",
    url: "https://www.lanacion.com.ar/lifestyle/en-las-redes/kimchi-el-plato-coreano-que-conquisto-el-mundo-y-se-transformo-en-un-gran-negocio-nid23122023/",
  },
  {
    id: 2,
    title: "Reportaje en Korea.net",
    description:
      "Kimchuski: el emprendimiento gastronómico que apunta a generar trabajo y refuerza su apuesta a la juventud en Argentina.",
    image: "/images/press/korea.jpg",
    url: "https://spanish.korea.net/NewsFocus/HonoraryReporters/view?articleId=201934",
  },
  {
    id: 3,
    title: "Nota en Pagina 12",
    description:
      "Un lugar amigable donde conocer y comprar los sabores llegados del otro lado del mundo.",
    image: "/images/press/pagina12.jpg",
    url: "https://www.pagina12.com.ar/376328-sali",
  },
];

const PressPage = () => {
  const [loadedVideos, setLoadedVideos] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleVideoReady = (id: number) => {
    setLoadedVideos((prev) => ({ ...prev, [id]: true }));
  };

  const opts = {
    height: "290",
    width: "540",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <Navbar />
      <div className="pt-36 pb-12 px-4 md:px-8">
        <h1 className="text-5xl font-bold mb-8">PRENSA</h1>

        {/* Video Section */}
        <h2 className="text-3xl font-semibold mb-6">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {YOUTUBE_VIDEOS.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg group-hover:scale-[1.02] transition-transform duration-300">
                {!loadedVideos[video.id] && (
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
                  </div>
                )}
                <YouTube
                  videoId={video.url}
                  iframeClassName="w-full aspect-video"
                  opts={opts}
                  onReady={() => handleVideoReady(video.id)}
                  onStateChange={(event: YouTubeEvent) =>
                    console.log("Estado del video", event)
                  }
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-center group-hover:text-kimchuski-orange-400 transition">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Notes Section */}
        <h2 className="text-3xl font-semibold mt-12 mb-6">
          Notas Periodísticas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRESS_NOTES.map((note) => (
            <motion.div
              key={note.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={note.image}
                alt={note.title}
                width={500}
                height={500}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{note.title}</h3>
                <p className="text-gray-600 mt-2">{note.description}</p>
                <a
                  href={note.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-kimchuski-orange-400 font-semibold"
                >
                  Leer más
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PressPage;
