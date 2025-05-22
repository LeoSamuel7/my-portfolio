export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center bg-white dark:bg-black text-gray-900 dark:text-white px-4"
    >
      <img
        src="/leo.jpg"
        alt="Leo Issaghoulian"
        className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover"
      />
      <h2 className="text-4xl font-bold mb-4">Hey, I'm Leo</h2>
      <p className="text-lg max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
        I'm a <span className="font-bold">Computer Engineer</span> with a passion for building intelligent systems that merge hardware and software.
        From designing ultrasonic transponders to developing fuzzy logic based license plate readers, I like working where signals, sensors, and software meet
        (turning abstract ideas into real-world systems). Whether I'm adjusting a transponder circuit or refining a fuzzy logic model, I’m motivated by projects
        that require both creative thinking and technical precision, especially when they lead to real-world impact.
      </p>
    </section>
  );
}
