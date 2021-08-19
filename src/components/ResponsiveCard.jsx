
import React from 'react';

function ResponsiveCard(){
   return (<section className="container px-6 py-4 mx-auto">
  <div className="grid gap-6 mb-8 md:grid-cols-2 md:grid-rows-2">
  {/* card1 */}
    <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div className="p-3 mr-4 bg-blue-900 text-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-900">Expreses</p>
        <p className="text-sm font-normal text-gray-800">Track your daily expenses</p>
      </div>
    </div>
{/* card2 */}
    <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div className="p-3 mr-4 bg-blue-900 text-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
</svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-900">Transfer Money</p>
    </div>
    </div>
   {/* card3 */}
    <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div className="p-3 mr-4 bg-blue-900 text-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-900">Deposit</p>
        
      </div>
    </div>
    {/* <!-- Card 4 --> */}
    <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div className="p-3 mr-4 bg-blue-900 text-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-900">Witdraw</p>
      </div>
    </div>
  </div>

</section>)
}

export default ResponsiveCard;