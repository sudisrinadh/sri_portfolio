
export default function MotionParticles() {
  return (
    <div className="motion-particles">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          style={{ left: `${i * 8 + 5}%` }}   // spread horizontally
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -900, opacity: [0, 0.6, 0] }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
