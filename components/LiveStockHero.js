"use client";

import { liveStockHero } from "@/public/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AnimatePresence, motion } from "framer-motion";

const LiveStockHero = () => {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 mb-7"
      >
        <Splide
          options={{
            perPage: 2,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "16px",
            autoWidth: true,
          }}
        >
          {liveStockHero.map((item) => (
            <SplideSlide key={item.id}>
              <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-lg text-white font-montserrat text-sm leading-6 font-semibold rounded-xl px-4 py-1.5 overflow-hidden relative">
                <div className="flex items-center justify-between gap-2">
                  <p>{item.text}</p> {item?.icon}
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </motion.div>
    </AnimatePresence>
  );
};

export default LiveStockHero;
