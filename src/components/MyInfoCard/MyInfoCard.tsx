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
                        I build software systems, focusing on backend
                        reliability and system-level thinking.⚙️🧠
                    </p>
                </div>
            </div>
        </>
    );
};

export default MyInfoCard;
