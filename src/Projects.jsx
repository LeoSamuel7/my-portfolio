export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-black text-gray-900 dark:text-white py-12 px-4 text-center"
    >
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* License Plate Reader Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-left">
          <p className="mb-4">
          A computer vision system for identifying and reading license plates in real-time using fuzzy logic. The project features a full preprocessing pipeline that includes image grayscaling, brightness normalization, and blur reduction to enhance low-quality images. After isolating the license plate region, a custom fuzzy logic model segments and recognizes each character individually — improving both speed and accuracy over traditional OCR methods.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Python</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OpenCV</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Fuzzy Logic</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Image Processing</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Character Segmentation</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">AI Training</span>

          </div>
          <a
            href="https://github.com/Swifter321/LPR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            View on GitHub →
          </a>
        </div>

        {/* Ultrasonic Transponder Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-left">
          <p className="mb-4">
          A two-way embedded communication system using ultrasonic pulses to transmit and receive data between transceiver nodes. The project involved designing custom PCBs for both transmitter and receiver using EasyEDA and implementing signal encoding/decoding in C++ on a MEGA2560 board. Each transmitted pulse encoded an ID or command, which the receiving side decoded and responded to in real time — enabling bidirectional communication. Additional work included signal filtering, noise reduction, and synchronization for reliable pulse detection.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">C++</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Signal Processing</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">PCB Design</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Noise Filtering</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">EasyEDA</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Altium Designer</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Soldering</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Circuit/Schematic Testing</span>
          </div>
          <a
            href="https://drive.google.com/drive/folders/18YBVhqGi1UGv94omVCPNjTsxG4QrsOpK?usp=sharing"
            className="text-blue-600 hover:underline font-medium"
          >
            View on Google Drive →
          </a>
        </div>
      </div>
    </section>
  );
}
