export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-black text-gray-900 dark:text-white text-center py-16 px-4"
    >
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <div className="space-y-4">
        <p>
          <strong>Email:</strong> leoissaghoulian@gmail.com
        </p>
        <p>
          <strong>GitHub:</strong><br />
          <a
            href="https://github.com/Swifter321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            github.com/Swifter321
          </a>
          <br />
          <a
            href="https://github.com/LeoSamuel7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            github.com/LeoSamuel7
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/leo-issaghoulian/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/leo-issaghoulian
          </a>
        </p>
      </div>
    </section>
  );
}
