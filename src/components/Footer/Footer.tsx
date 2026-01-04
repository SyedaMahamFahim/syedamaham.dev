import { CURRENT_YEAR } from "@/utils/utils";

const Footer = () => {
  return (
    <footer>
      <section className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 py-4 text-xs dark:text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="text-center md:text-left">
              <p>&copy; {CURRENT_YEAR} syedamaham.dev</p>
            </div>
            <div className="text-center">
              <p>Stay Connected 🐬</p>
            </div>
            <div className="text-center md:text-right">
              <p>v2.0.0</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
