import Iframe from 'react-iframe';
import { motion } from 'framer-motion';

interface Props {
  url: string;
}

function NewsIframe({ url } : Props) {
  return (
    <motion.div
      initial={{ opacity: 0, height: '100%' }}
      animate={{ opacity: 1, height: '100%' }}
      transition={{ duration: 1.2 }}
      exit={{ opacity: 0 }}
    >
      <Iframe
        url={url}
        width="100%"
        height="100%"
        display="block"
        position="relative"
      />
    </motion.div>

  );
}

export default NewsIframe;
