import react from 'react';
import AccountCard from './AccountCard';
import ResponsiveCard from './ResponsiveCard';

function Section(){
    return(
        <section class=" lg:h-4/5 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:w-full  lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2">
                <div className="flex justify-center h-64  bg-cover lg:rounded-lg lg:h-full items-center"><AccountCard /></div>
            </div>

            <div className=" bg-white lg:w-2/4 px-6 py-12 bg-cover h-64 lg:h-full lg:rounded-lg">
            <ResponsiveCard />
                {/* <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Build Your New <span className="text-indigo-600 dark:text-indigo-400">Idea</span></h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>
                 */}
                
            </div>
        </div>
   </section>
   )
}

export default Section;