import { CURRENT_YEAR } from "@/utils/utils";
import "./Footer.module.scss";

const Footer = () => {
    return (
        // <footer className="fixed bottom-0 min-w-full">
        <footer>
            <section className='bg-slate-800 py-4 text-xs text-white'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                        <div className='text-center md:text-left'>
                            <p className='text-xs'>
                                &copy; {CURRENT_YEAR} syedamaham.dev
                            </p>
                        </div>
                        <div className='text-center'>
                            <p className='text-xs'>
                                <span className='block'>Stay Connected 🐬</span>
                            </p>
                        </div>
                        <div className='text-center md:text-right'>
                            <p className='text-xs'>v2.0.0</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
