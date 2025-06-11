import { motion } from 'framer-motion';
import { FileDownIcon } from 'lucide-react';
export function CVButton() {
  return <motion.div initial={{
    opacity: 0,
    y: 50
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} className="fixed bottom-8 right-8 z-50">
      <motion.a href="../assets/pdf/Chioma-Veronica-Ezezim.pdf" 
    download="Chioma-Veronica-Ezezim.pdf" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all" whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }}>
        <FileDownIcon size={20} />
        <span className="font-medium">Download CV</span>
      </motion.a>
    </motion.div>;
}