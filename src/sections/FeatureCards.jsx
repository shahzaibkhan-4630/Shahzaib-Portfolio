import {abilities} from '../constants'
import TitleHeader from "../components/TitleHeader.jsx";

const FeatureCards = () => {
    return (
        <>
            <div className='md:mt-40 mt-20'>
                <TitleHeader title='What Sets Me Apart' sub='Quality results. Clear updates. On time.'/>
            </div>
            <div className='w-full padding-x-lg mt-18'>
                <div className='mx-auto grid-3-cols'>
                    {abilities.map(({imgPath, title, desc}) => (
                        <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                            <div className='size-14 flex items-center justify-center rounded-full'>
                                <img src={imgPath} alt={title}/>
                            </div>
                            <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
                            <p className='text-white-50 text-lg text-justify'>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FeatureCards