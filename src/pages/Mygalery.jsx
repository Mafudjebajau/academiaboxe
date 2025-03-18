import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const galery_items = [
  { id: 1, title: "Spotify", image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Warty_final_ubuntu.jpg" },
  { id: 2, title: "Instagram", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Ubuntu_alternative_background.svg" },
  { id: 3, title: "Twitter", image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Ubuntuhumano00.jpg" },
  { id: 4, title: "Discord", image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/image_inexistente.jpg" }, // Exemplo de imagem quebrada
];

const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

export default function MyGallery() {
  const [selectedId, setSelectedId] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  // Função para definir erro de imagem
  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="container p-5 pt-5">
      <h2 className="mb-4 pt-5">Galeria</h2>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-4 g-3 justify-content-center">
        {galery_items.map((galery_item) => (
          <motion.div
            key={galery_item.id}
            layoutId={`card-${galery_item.id}`}
            className="col"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedId(galery_item.id)}
          >
            <div
              className="card border-0 shadow-sm p-2"
              style={{ cursor: "pointer", borderRadius: "15px", overflow: "hidden" }}
            >
              <motion.img
                loading="lazy"
                src={imageErrors[galery_item.id] ? placeholderImage : galery_item.image}
                alt={`Logo do ${galery_item.title}`}
                className="img-fluid rounded"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "400px",
                }}
                onError={() => handleImageError(galery_item.id)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 1050, cursor: "pointer" }}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="card border-0 shadow-lg"
              style={{
                width: "600px",
                height: "600px",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <motion.img
                src={imageErrors[selectedId] ? placeholderImage : galery_items.find((item) => item.id === selectedId)?.image}
                alt={`Logo do ${galery_items.find((item) => item.id === selectedId)?.title}`}
                className="img-fluid p-3"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                onError={() => handleImageError(selectedId)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <p className="display-3 text-dark text-center">
                {galery_items.find((item) => item.id === selectedId)?.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
