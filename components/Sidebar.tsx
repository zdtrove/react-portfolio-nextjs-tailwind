import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {
    const { theme, setTheme } = useTheme()
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div>
            <Image 
                src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" 
                alt="avatar" 
                className='w-32 h-32 mx-auto rounded-full'
                height="128px"
                width="128px"
                layout="intrinsic"
                quality="100"
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span className="text-green">Hoang </span>An
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Web Developer</p>
            <a 
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200"
                href="/images/blink.jpg"
                download="blink.jpg"
            ><GiTie className='w-6 h-6' />Download Resume</a>
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                <a href=''>
                    <AiFillYoutube className='w-8 h-8 cursor-pointer' aria-label="Youtube"/>
                </a>
                <a href=''>
                    <AiFillGithub className='w-8 h-8 cursor-pointer' aria-label="Linkedin"/>
                </a>
                <a href=''>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' aria-label="Github"/>
                </a>
            </div>
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Hcm, Viet Nam</span>
                </div>
                <p className="my-2">antnh@gmail.com</p>
                <p className="my-2">0349682006</p>
            </div>
            <button 
                className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full focus:outline-none bg-gradient-to-r from-green to-blue-400"
                onClick={() => window.open('mailto:antnh@gmail.com')}
            >Email Me</button>
            <button onClick={changeTheme} className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full focus:outline-none bg-gradient-to-r from-green to-blue-400">Toggle Theme</button>
        </div>
    )
}

export default Sidebar
