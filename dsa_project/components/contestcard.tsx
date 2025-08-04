// "use client"
// import Link from 'next/link'
// export function CodechefContestCard({contestInfo}:any){
//     return(
//         < div className=' mb-2' >
//                     <div className="bg-cardBlue-custom  md:w-72 text-white flex flex-col items-center p-4 rounded-xl ">
//                         <div className="flex justify-center text-xl mt-2">
//                         {contestInfo.contest_code}
//                         </div>
                       
                    
//                     <div className="pt-6">
//                         <div className="py-1">
//                             Contest Name: {contestInfo.contest_name}
//                         </div>
//                         <div className="py-1">
//                             Start Date:{contestInfo.contest_start_date} 
//                         </div>
//                         <div className="py-1">
//                             Duration:{contestInfo.contest_duration} minutes 
//                         </div>
//                     </div>
//                     <div>
//                         <Link href="https://www.codechef.com/contests">
//                     <button type="button" className="text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-2 px-5 py-2 me-2 mb-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">More Info</button>
//                     </Link>
//                     </div>
//                     </div>
//         </div>
//     )
// }


// export function CodeforcesContestCard({contestInfo}:any){
//     const date = new Date(contestInfo.startTimeSeconds * 1000).toLocaleString('en-US', {
//                                     year: 'numeric',
//                                     month: 'numeric',
//                                     day: 'numeric',
//                                     hour: 'numeric',
//                                     minute: 'numeric',
//                                     second: 'numeric',
//                                     hour12: true
//                                 });
//     return(
//         <div>
//             < div className=' mb-2' >
//                     <div className="bg-cardBlue-custom  md:w-72 text-white flex flex-col items-center p-4 rounded-xl ">
//                         <div className="flex justify-center text-xl mt-2">
//                         {contestInfo.name}
//                         </div>
                       
                    
//                     <div className="pt-6">
//                         <div className="py-1">
//                             Contest ID: {contestInfo.id}
//                         </div>
//                         <div className="py-1">
//                             Start Time:{date}
//                         </div>
//                         <div className="py-1">
//                             Duration:{contestInfo.durationSeconds/60} minutes 
//                         </div>
//                     </div>
//                     <div>
//                         <Link href="https://codeforces.com/contests">
//                     <button type="button" className="text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-2 px-5 py-2 me-2 mb-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">More Info</button>
//                     </Link>
//                     </div>
//                     </div>
//         </div>
//         </div>
//     )
// }

// export function LeetcodeContestCard({contestInfo}:any){
//     const date = new Date(contestInfo.startTime * 1000).toLocaleString('en-US', {
//                                     year: 'numeric',
//                                     month: 'numeric',
//                                     day: 'numeric',
//                                     hour: 'numeric',
//                                     minute: 'numeric',
//                                     second: 'numeric',                                    hour12: true
//                                 });
//     return(
//         <div>
//             < div className=' mb-2 ' >
//                     <div className="bg-cardBlue-custom md:w-72 text-white flex flex-col items-center p-4 rounded-xl ">
//                         <div className="flex justify-center text-xl mt-2">
//                         {contestInfo.title}
//                         </div>
                       
                    
//                     <div className="pt-6">
                        
//                         <div className="py-1">
//                             Start Time:{date}
//                         </div>
//                         <div className="py-1">
//                             Duration:{contestInfo.duration/60} minutes 
//                         </div>
//                     </div>
//                     <div>
//                         <Link href="https://leetcode.com/contest/">
//                     <button type="button" className="text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-2 px-5 py-2 me-2 mb-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">More Info</button>
//                     </Link>
//                     </div>
//                     </div>
//         </div>
//         </div>
//     )
// // }
// "use client"
// import Link from 'next/link'

// export function CodechefContestCard({contestInfo}:any){
//     // Function to create Google Calendar URL
//     const createGoogleCalendarUrl = () => {
//         // Parse the start date (assuming it's in a standard format)
//         const startDate = new Date(contestInfo.contest_start_date);
        
//         // Calculate end date based on duration (in minutes)
//         const endDate = new Date(startDate);
//         endDate.setMinutes(endDate.getMinutes() + parseInt(contestInfo.contest_duration));
        
//         // Format dates for Google Calendar URL
//         const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
//         const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
        
//         // Create the URL
//         const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.contest_name)}&details=${encodeURIComponent(`Codechef Contest: ${contestInfo.contest_code}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
        
//         return url;
//     };

//     return(
//         <div className="mb-4">
//             <div className="bg-cardBlue-custom md:w-72 text-white flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
//                 <div className="flex justify-center text-xl font-bold mt-1 mb-2">
//                     {contestInfo.contest_code}
//                 </div>
                
//                 <div className="w-full border-t border-blue-400 my-2 opacity-30"></div>
                
//                 <div className="pt-3 w-full">
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Contest Name</span>
//                         <span className="font-medium">{contestInfo.contest_name}</span>
//                     </div>
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Start Date</span>
//                         <span className="font-medium">{contestInfo.contest_start_date}</span>
//                     </div>
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Duration</span>
//                         <span className="font-medium">{contestInfo.contest_duration} minutes</span>
//                     </div>
//                 </div>
                
//                 <div className="w-full border-t border-blue-400 my-3 opacity-30"></div>
                
//                 <div className="flex space-x-3 w-full justify-center mt-2">
//                     <Link href="https://www.codechef.com/contests">
//                         <button type="button" className="text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 focus:outline-none">More Info</button>
//                     </Link>
//                     <Link href={createGoogleCalendarUrl()} target="_blank">
//                         <button type="button" className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 focus:outline-none flex items-center">
//                             <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//                             </svg>
//                             Calendar
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export function CodeforcesContestCard({contestInfo}:any){
//     const date = new Date(contestInfo.startTimeSeconds * 1000).toLocaleString('en-US', {
//         year: 'numeric',
//         month: 'numeric',
//         day: 'numeric',
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//         hour12: true
//     });

//     // Get the raw Date objects for calendar
//     const startDate = new Date(contestInfo.startTimeSeconds * 1000);
//     const endDate = new Date(startDate.getTime() + contestInfo.durationSeconds * 1000);

//     // Function to create Google Calendar URL
//     const createGoogleCalendarUrl = () => {
//         // Format dates for Google Calendar URL
//         const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
//         const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
        
//         // Create the URL
//         const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.name)}&details=${encodeURIComponent(`Codeforces Contest ID: ${contestInfo.id}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
        
//         return url;
//     };

//     return(
//         <div className="mb-4">
//             <div className="bg-cardBlue-custom md:w-72 text-white flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
//                 <div className="flex justify-center text-xl font-bold mt-1 mb-2">
//                     {contestInfo.name}
//                 </div>
                
//                 <div className="w-full border-t border-blue-400 my-2 opacity-30"></div>
                
//                 <div className="pt-3 w-full">
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Contest ID</span>
//                         <span className="font-medium">{contestInfo.id}</span>
//                     </div>
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Start Time</span>
//                         <span className="font-medium">{date}</span>
//                     </div>
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Duration</span>
//                         <span className="font-medium">{contestInfo.durationSeconds/60} minutes</span>
//                     </div>
//                 </div>
                
//                 <div className="w-full border-t border-blue-400 my-3 opacity-30"></div>
                
//                 <div className="flex space-x-3 w-full justify-center mt-2">
//                     <Link href="https://codeforces.com/contests">
//                         <button type="button" className="text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 focus:outline-none">More Info</button>
//                     </Link>
//                     <Link href={createGoogleCalendarUrl()} target="_blank">
//                         <button type="button" className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 focus:outline-none flex items-center">
//                             <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//                             </svg>
//                             Calendar
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export function LeetcodeContestCard({contestInfo}:any){
//     const date = new Date(contestInfo.startTime * 1000).toLocaleString('en-US', {
//         year: 'numeric',
//         month: 'numeric',
//         day: 'numeric',
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//         hour12: true
//     });

//     // Get the raw Date objects for calendar
//     const startDate = new Date(contestInfo.startTime * 1000);
//     const endDate = new Date(startDate.getTime() + contestInfo.duration * 1000);

//     // Function to create Google Calendar URL
//     const createGoogleCalendarUrl = () => {
//         // Format dates for Google Calendar URL
//         const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
//         const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
        
//         // Create the URL
//         const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.title)}&details=${encodeURIComponent(`LeetCode Contest`)}&dates=${startDateFormatted}/${endDateFormatted}`;
        
//         return url;
//     };

//     return(
//         <div className="mb-4">
//             <div className="bg-cardBlue-custom md:w-72 text-white flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
//                 <div className="flex justify-center text-xl font-bold mt-1 mb-2">
//                     {contestInfo.title}
//                 </div>
                
//                 <div className="w-full border-t border-blue-400 my-2 opacity-30"></div>
                
//                 <div className="pt-3 w-full">
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Start Time</span>
//                         <span className="font-medium">{date}</span>
//                     </div>
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Duration</span>
//                         <span className="font-medium">{contestInfo.duration/60} minutes</span>
//                     </div>
//                 </div>
                
//                 <div className="w-full border-t border-blue-400 my-3 opacity-30"></div>
                
//                 <div className="flex space-x-3 w-full justify-center mt-2">
//                     <Link href="https://leetcode.com/contest/">
//                         <button type="button" className="text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 focus:outline-none">More Info</button>
//                     </Link>
//                     <Link href={createGoogleCalendarUrl()} target="_blank">
//                         <button type="button" className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 focus:outline-none flex items-center">
//                             <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//                             </svg>
//                             Calendar
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }


"use client"
import Link from 'next/link'

// export function CodechefContestCard({contestInfo}:any){
//     // Function to create Google Calendar URL
//     const createGoogleCalendarUrl = () => {
//         // Parse the start date (assuming it's in a standard format)
//         const startDate = new Date(contestInfo.contest_start_date);
        
//         // Calculate end date based on duration (in minutes)
//         const endDate = new Date(startDate);
//         endDate.setMinutes(endDate.getMinutes() + parseInt(contestInfo.contest_duration));
        
//         // Format dates for Google Calendar URL
//         const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
//         const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
        
//         // Create the URL
//         const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.contest_name)}&details=${encodeURIComponent(`Codechef Contest: ${contestInfo.contest_code}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
        
//         return url;
//     };

//     return(
//         <div className="mb-4">
//             <div className="bg-cardBlue-custom md:w-72 text-white flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
//                 <div className="flex justify-center text-xl font-bold mt-1 mb-2">
//                     {contestInfo.contest_code}
//                 </div>
                
//                 <div className="w-full border-t border-blue-400 my-2 opacity-30"></div>
                
//                 <div className="pt-3 w-full">
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Contest Name</span>
//                         <span className="font-medium">{contestInfo.contest_name}</span>
//                     </div>
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Start Date</span>
//                         <span className="font-medium">{contestInfo.contest_start_date}</span>
//                     </div>
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Duration</span>
//                         <span className="font-medium">{contestInfo.contest_duration} minutes</span>
//                     </div>
//                 </div>
                
//                 <div className="w-full border-t border-blue-400 my-3 opacity-30"></div>
                
//                 <div className="grid grid-cols-2 gap-3 w-full mt-2">
//                     <Link href="https://www.codechef.com/contests" className="w-full">
//                         <button type="button" className="w-full text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none">More Info</button>
//                     </Link>
//                     <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
//                         <button type="button" className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none flex items-center justify-center">
//                             <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//                             </svg>
//                             Calendar
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export function CodeforcesContestCard({contestInfo}:any){
//     const date = new Date(contestInfo.startTimeSeconds * 1000).toLocaleString('en-US', {
//         year: 'numeric',
//         month: 'numeric',
//         day: 'numeric',
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//         hour12: true
//     });

//     // Get the raw Date objects for calendar
//     const startDate = new Date(contestInfo.startTimeSeconds * 1000);
//     const endDate = new Date(startDate.getTime() + contestInfo.durationSeconds * 1000);

//     // Function to create Google Calendar URL
//     const createGoogleCalendarUrl = () => {
//         // Format dates for Google Calendar URL
//         const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
//         const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
        
//         // Create the URL
//         const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.name)}&details=${encodeURIComponent(`Codeforces Contest ID: ${contestInfo.id}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
        
//         return url;
//     };

//     return(
//         <div className="mb-4">
//             <div className="bg-cardBlue-custom md:w-72 text-white flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
//                 <div className="flex justify-center text-xl font-bold mt-1 mb-2">
//                     {contestInfo.name}
//                 </div>
                
//                 <div className="w-full border-t border-blue-400 my-2 opacity-30"></div>
                
//                 <div className="pt-3 w-full">
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Contest ID</span>
//                         <span className="font-medium">{contestInfo.id}</span>
//                     </div>
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Start Time</span>
//                         <span className="font-medium">{date}</span>
//                     </div>
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Duration</span>
//                         <span className="font-medium">{contestInfo.durationSeconds/60} minutes</span>
//                     </div>
//                 </div>
                
//                 <div className="w-full border-t border-blue-400 my-3 opacity-30"></div>
                
//                 <div className="grid grid-cols-2 gap-3 w-full mt-2">
//                     <Link href="https://codeforces.com/contests" className="w-full">
//                         <button type="button" className="w-full text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none">More Info</button>
//                     </Link>
//                     <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
//                         <button type="button" className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none flex items-center justify-center">
//                             <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//                             </svg>
//                             Calendar
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }
// Container for the contest cards


// Improved CodeforcesContestCard component
export function CodechefContestCard({ contestInfo }: any) {
  // Format the start date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric', 
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  // Function to format duration nicely
  const formatDuration = (durationMinutes: string | number) => {
    const minutes = parseInt(durationMinutes.toString());
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (hours > 0) {
      return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
    }
    return `${minutes} minutes`;
  };

  // Function to create Google Calendar URL
  const createGoogleCalendarUrl = () => {
    // Parse the start date (assuming it's in a standard format)
    const startDate = new Date(contestInfo.contest_start_date);
    
    // Calculate end date based on duration (in minutes)
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + parseInt(contestInfo.contest_duration));
    
    // Format dates for Google Calendar URL
    const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
    // Create the URL
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.contest_name)}&details=${encodeURIComponent(`Codechef Contest: ${contestInfo.contest_code}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
    
    return url;
  };

  return (
    <div className="w-full max-w-sm">
      <div className="bg-cardBlue-custom text-white flex flex-col p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
        <div className="text-center text-lg font-bold mb-4 line-clamp-2">
          {contestInfo.contest_code}
        </div>
        
        <div className="w-full border-t border-blue-400 my-2 opacity-30"></div>
        
        <div className="flex-1 space-y-3">
          <div className="flex flex-col">
            <span className="text-blue-200 text-sm">Contest Name</span>
            <span className="font-medium text-sm line-clamp-2">{contestInfo.contest_name}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-blue-200 text-sm">Start Date</span>
            <span className="font-medium text-sm">{formatDate(contestInfo.contest_start_date)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-blue-200 text-sm">Duration</span>
            <span className="font-medium">{formatDuration(contestInfo.contest_duration)}</span>
          </div>
        </div>
        
        <div className="w-full border-t border-blue-400 my-3 opacity-30"></div>
        
        <div className="grid grid-cols-2 gap-3 mt-2">
          <Link href="https://www.codechef.com/contests" className="w-full">
            <button 
              type="button" 
              className="w-full text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none"
            >
              More Info
            </button>
          </Link>
          <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
            <button 
              type="button" 
              className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
              Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export function CodeforcesContestCard({ contestInfo }: any) {
  const date = new Date(contestInfo.startTimeSeconds * 1000).toLocaleString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  // Get the raw Date objects for calendar
  const startDate = new Date(contestInfo.startTimeSeconds * 1000);
  const endDate = new Date(startDate.getTime() + contestInfo.durationSeconds * 1000);

  // Function to format duration nicely
  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes} minutes`;
  };

  // Function to create Google Calendar URL
  const createGoogleCalendarUrl = () => {
    // Format dates for Google Calendar URL
    const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
    // Create the URL
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.name)}&details=${encodeURIComponent(`Codeforces Contest ID: ${contestInfo.id}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
    
    return url;
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-cardBlue-custom text-white flex flex-col p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
        <div className="text-center text-lg font-bold mb-4 line-clamp-2">
          {contestInfo.name}
        </div>
        
        <div className="w-full border-t border-blue-400 my-2 opacity-30"></div>
        
        <div className="flex-1 space-y-3">
          <div className="flex flex-col">
            <span className="text-blue-200 text-sm">Contest ID</span>
            <span className="font-medium">{contestInfo.id}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-blue-200 text-sm">Start Time</span>
            <span className="font-medium text-sm">{date}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-blue-200 text-sm">Duration</span>
            <span className="font-medium">{formatDuration(contestInfo.durationSeconds)}</span>
          </div>
        </div>
        
        <div className="w-full border-t border-blue-400 my-3 opacity-30"></div>
        
        <div className="grid grid-cols-2 gap-3 mt-2">
          <Link href="https://codeforces.com/contests" className="w-full">
            <button 
              type="button" 
              className="w-full text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none"
            >
              More Info
            </button>
          </Link>
          <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
            <button 
              type="button" 
              className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
              Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
// export function LeetcodeContestCard({contestInfo}:any){
//     const date = new Date(contestInfo.startTime * 1000).toLocaleString('en-US', {
//         year: 'numeric',
//         month: 'numeric',
//         day: 'numeric',
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//         hour12: true
//     });

//     // Get the raw Date objects for calendar
//     const startDate = new Date(contestInfo.startTime * 1000);
//     const endDate = new Date(startDate.getTime() + contestInfo.duration * 1000);

//     // Function to create Google Calendar URL
//     const createGoogleCalendarUrl = () => {
//         // Format dates for Google Calendar URL
//         const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
//         const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
        
//         // Create the URL
//         const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.title)}&details=${encodeURIComponent(`LeetCode Contest`)}&dates=${startDateFormatted}/${endDateFormatted}`;
        
//         return url;
//     };

//     return(
//         <div className="mb-4">
//             <div className="bg-cardBlue-custom md:w-72 text-white flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
//                 <div className="flex justify-center text-xl font-bold mt-1 mb-2">
//                     {contestInfo.title}
//                 </div>
                
//                 <div className="w-full border-t border-blue-400 my-2 opacity-30"></div>
                
//                 <div className="pt-3 w-full">
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Start Time</span>
//                         <span className="font-medium">{date}</span>
//                     </div>
//                     <div className="py-2 flex flex-col">
//                         <span className="text-blue-200 text-sm">Duration</span>
//                         <span className="font-medium">{contestInfo.duration/60} minutes</span>
//                     </div>
//                 </div>
                
//                 <div className="w-full border-t border-blue-400 my-3 opacity-30"></div>
                
//                 <div className="grid grid-cols-2 gap-3 w-full mt-2">
//                     <Link href="https://leetcode.com/contest/" className="w-full">
//                         <button type="button" className="w-full text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none">More Info</button>
//                     </Link>
//                     <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
//                         <button type="button" className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none flex items-center justify-center">
//                             <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//                             </svg>
//                             Calendar
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }
export function LeetcodeContestCard({ contestInfo }: any) {
  const date = new Date(contestInfo.startTime * 1000).toLocaleString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  // Get the raw Date objects for calendar
  const startDate = new Date(contestInfo.startTime * 1000);
  const endDate = new Date(startDate.getTime() + contestInfo.duration * 1000);

  // Function to format duration nicely
  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes} minutes`;
  };

  // Function to create Google Calendar URL
  const createGoogleCalendarUrl = () => {
    // Format dates for Google Calendar URL
    const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
    // Create the URL
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.title)}&details=${encodeURIComponent(`LeetCode Contest`)}&dates=${startDateFormatted}/${endDateFormatted}`;
    
    return url;
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-cardBlue-custom text-white flex flex-col p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
        <div className="text-center text-lg font-bold mb-4 line-clamp-2">
          {contestInfo.title}
        </div>
        
        <div className="w-full border-t border-blue-400 my-2 opacity-30"></div>
        
        <div className="flex-1 space-y-3">
          <div className="flex flex-col">
            <span className="text-blue-200 text-sm">Start Time</span>
            <span className="font-medium text-sm">{date}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-blue-200 text-sm">Duration</span>
            <span className="font-medium">{formatDuration(contestInfo.duration)}</span>
          </div>
        </div>
        
        <div className="w-full border-t border-blue-400 my-3 opacity-30"></div>
        
        <div className="grid grid-cols-2 gap-3 mt-2">
          <Link href="https://leetcode.com/contest/" className="w-full">
            <button 
              type="button" 
              className="w-full text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none"
            >
              More Info
            </button>
          </Link>
          <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
            <button 
              type="button" 
              className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
              Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}