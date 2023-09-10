import Link from "next/link";

export default function NotFound() {
    return (
        <div className='mt-40 my-4 text-center flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-2xl'>404</h2>
                <p>Could not find requested resource</p>
                <Link href='/' className="bg-gradient-to-br from-purple-500 to-red-500 p-2.5 mt-2 text-white">Return Home</Link>
            </div>
        </div>
    );
}
