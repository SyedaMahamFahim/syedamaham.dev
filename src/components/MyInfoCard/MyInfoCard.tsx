import Text from "../Text/Text";
const MyInfoCard = () => {
    return (
        <>
            <div className='flex flex-wrap items-center justify-center p-10'>
                <div className='ml-1'>
                    <Text
                        title
                        className='py-3 text-appPurple-100 dark:text-appRed-100'
                    >
                        Syeda Maham
                    </Text>
                    <p className='text-xl'>
                        {/* Fullstack & Backend Engineer building scalable systems, APIs, and data-driven applications. */}
                        I build scalable and data-driven software systems, focusing on
                        reliability and system-level thinking.⚙️🧠
                    </p>
                </div>
            </div>
        </>
    );
};

export default MyInfoCard;
