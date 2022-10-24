import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex justify-between items-center bg-background-base p-4">
      <a
        href="https://www.guilhermeamorim.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="text-text-base">www.guilhermeamorim.com</h2>
      </a>
      <div className="flex gap-2">
        <a
          href="https://github.com/GuilhermeDeOliveiraAmorim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-text-base" />
        </a>
        <a
          href="https://www.linkedin.com/in/guideoliveiraamorim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="text-text-base" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5579991145680&text=Ol%C3%A1!%20Cheguei%20aqui%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-text-base" />
        </a>
      </div>
    </footer>
  );
}

export { Footer };
