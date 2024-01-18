import { motion } from "framer-motion"

const Loader = ({ show=true } : { show?: boolean }) => {

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        color: {
          delay: 0.5,
        }
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const spanItem = {
    visible: {
      opacity: 1,
      scale: 1,
      '-webkit-text-stroke':'0.5px #0033ff',
      color: '#0033ff',
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.3
      }
    },
    hidden: {
      opacity: 0,
      scale: 0,
      '-webkit-text-stroke':'0.5px black',
      color: '#ffffff0c',
    },
  }

  const words  = ['e', 'l', 't', 'h', 'e', 'd'];
  

  if(show)
  return (
    <div className="fixed top-0 left-0 h-screen w-screen splash z-[100]">
      <section className=" h-screen w-screen flex flex-col items-center justify-center  relative z-10">

        <motion.div initial={{height: 0, width: 0, scale: 0}} animate={{height: '165px', width: '165px',  scale: 1}} transition={{ delay: 3, ease: 'linear'}} className="rounded-full overflow-hidden border-4 bg-[#fff1d4] border-[#ffe7b8]">
          <img src="/images/logo_small.png" className="h-full w-full object-cover"/>
        </motion.div>

        <div className="max-[600px]:hidden">
          <motion.div initial={{ scale: 1 }} animate={{ scale: 0.5, height: '100px' }} transition={{ delay: 3 , ease: 'linear'}} >
            <motion.h1 variants={list} initial={'hidden'} animate={'visible'} className="text-9xl max-[600px]:text-5xl uppercase transition-all">
              {words.map( (item, index) => 
                <motion.span variants={spanItem} key={index} className="transition-all">{item}</motion.span>
              )}
            </motion.h1>
          </motion.div>
        </div>

        <motion.div className="hidden max-[600px]:block">
          <motion.h1 variants={list} initial={'hidden'} animate={'visible'} className="text-6xl uppercase transition-all">
            {words.map( (item, index) => 
              <motion.span variants={spanItem} key={index} className="transition-all">{item}</motion.span>
            )}
          </motion.h1>
        </motion.div>

        <motion.div initial={{ height: 0, opacity: 0 }} animate={{height: '5px', opacity: 1}} transition={{ delay: 3 }} className="w-[500px] max-[600px]:w-[300px] rounded-full bg-[#c9c6c6] overflow-hidden">
          <motion.div initial={{ width: '0%' }} animate={{ width: '110%' }} transition={{ease: "linear", duration: 3, delay: 3 }} className="w-[10%] -left-1 rounded-full h-full bg-[#0033ff]"></motion.div>
        </motion.div>

      </section>

      {/* <motion.div initial={{opacity: 0, clipPath: 'polygon(46% 0, 100% 0, 100% 100%, 45% 100%)'}} animate={{opacity: 1, 'clipPath': 'polygon(61% 0, 100% 0, 100% 100%, 33% 100%)'}} transition={{ delay: 3 }} className="z-0 absolute top-0 right-0 w-full h-full bg-blue-50"></motion.div> */}
    </div>
  )
}

export default Loader