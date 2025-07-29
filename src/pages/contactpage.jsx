export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-red-500 mt-15">
      <h1 className="signpainter text-2xl  text-center">contact</h1>

      <p className="font-light mb-4 text-center text-sm leading-7">
        If you'd like to get in touch with Escarleth Romo Pozo for
        collaborations, performances, workshops, or inquiries, feel free to
        reach out
      </p>

      <div className="space-y-4 text-sm text-center">
        <div>
          <p className="signpainter text-lg font-medium"> Email</p>
          <a
            href="mailto:escarlethpozo@gmail.com"
            className="hover:text-pink-300 transition font-light mb-8 text-center text-sm leading-7"
          >
            escarlethpozo@gmail.com
          </a>
        </div>
        <div className="flex flex-row justify-center items-center space-x-4">
          <a
            href="https://www.instagram.com/daniescarleth/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition font-light mb-8 text-center text-sm leading-7"
          >
            <span className="signpainter text-lg font-medium"> Instagram</span>
          </a>

          <a
            href="https://www.youtube.com/@escarlethpozo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition font-light mb-8 text-center text-sm leading-7"
          >
            <span className="signpainter text-lg font-medium">Youtube</span>
          </a>
        </div>
      </div>
    </div>
  );
}
