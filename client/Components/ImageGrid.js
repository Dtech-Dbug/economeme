import { motion } from "framer-motion";

const ImageGrid = ({ selectedImage, setSelectedImage }) => {
  console.log("Docs --->", docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((item) => {
          return (
            <motion.div
              className="img-wrap"
              layout
              whileHover={{ opacity: 1 }}
              key={item.id}
              onClick={() => setSelectedImage(item.url)}
            >
              <motion.img
                src={item.url}
                alt="Oops"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                delay={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
