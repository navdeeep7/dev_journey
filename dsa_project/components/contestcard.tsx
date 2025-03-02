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
// }
"use client"
import Link from 'next/link'

export function CodechefContestCard({contestInfo}:any){
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

    return(
        <div className='mb-2'>
            <div className="bg-cardBlue-custom md:w-72 text-white flex flex-col items-center p-4 rounded-xl">
                <div className="flex justify-center text-xl mt-2">
                    {contestInfo.contest_code}
                </div>
                
                <div className="pt-6">
                    <div className="py-1">
                        Contest Name: {contestInfo.contest_name}
                    </div>
                    <div className="py-1">
                        Start Date: {contestInfo.contest_start_date} 
                    </div>
                    <div className="py-1">
                        Duration: {contestInfo.contest_duration} minutes 
                    </div>
                </div>
                <div className="flex space-x-2">
                    <Link href="https://www.codechef.com/contests">
                        <button type="button" className="text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-2 px-5 py-2 me-2 mb-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">More Info</button>
                    </Link>
                    <Link href={createGoogleCalendarUrl()} target="_blank">
                        <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm mt-2 px-5 py-2 me-2 mb-6 focus:outline-none">Add to Calendar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export function CodeforcesContestCard({contestInfo}:any){
    const date = new Date(contestInfo.startTimeSeconds * 1000).toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    });

    // Get the raw Date objects for calendar
    const startDate = new Date(contestInfo.startTimeSeconds * 1000);
    const endDate = new Date(startDate.getTime() + contestInfo.durationSeconds * 1000);

    // Function to create Google Calendar URL
    const createGoogleCalendarUrl = () => {
        // Format dates for Google Calendar URL
        const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
        const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
        
        // Create the URL
        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.name)}&details=${encodeURIComponent(`Codeforces Contest ID: ${contestInfo.id}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
        
        return url;
    };

    return(
        <div>
            <div className='mb-2'>
                <div className="bg-cardBlue-custom md:w-72 text-white flex flex-col items-center p-4 rounded-xl">
                    <div className="flex justify-center text-xl mt-2">
                        {contestInfo.name}
                    </div>
                    
                    <div className="pt-6">
                        <div className="py-1">
                            Contest ID: {contestInfo.id}
                        </div>
                        <div className="py-1">
                            Start Time: {date}
                        </div>
                        <div className="py-1">
                            Duration: {contestInfo.durationSeconds/60} minutes 
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <Link href="https://codeforces.com/contests">
                            <button type="button" className="text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-2 px-5 py-2 me-2 mb-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">More Info</button>
                        </Link>
                        <Link href={createGoogleCalendarUrl()} target="_blank">
                            <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm mt-2 px-5 py-2 me-2 mb-6 focus:outline-none">Add to Calendar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function LeetcodeContestCard({contestInfo}:any){
    const date = new Date(contestInfo.startTime * 1000).toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    });

    // Get the raw Date objects for calendar
    const startDate = new Date(contestInfo.startTime * 1000);
    const endDate = new Date(startDate.getTime() + contestInfo.duration * 1000);

    // Function to create Google Calendar URL
    const createGoogleCalendarUrl = () => {
        // Format dates for Google Calendar URL
        const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
        const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
        
        // Create the URL
        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.title)}&details=${encodeURIComponent(`LeetCode Contest`)}&dates=${startDateFormatted}/${endDateFormatted}`;
        
        return url;
    };

    return(
        <div>
            <div className='mb-2'>
                <div className="bg-cardBlue-custom md:w-72 text-white flex flex-col items-center p-4 rounded-xl">
                    <div className="flex justify-center text-xl mt-2">
                        {contestInfo.title}
                    </div>
                    
                    <div className="pt-6">
                        <div className="py-1">
                            Start Time: {date}
                        </div>
                        <div className="py-1">
                            Duration: {contestInfo.duration/60} minutes 
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <Link href="https://leetcode.com/contest/">
                            <button type="button" className="text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-2 px-5 py-2 me-2 mb-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">More Info</button>
                        </Link>
                        <Link href={createGoogleCalendarUrl()} target="_blank">
                            <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm mt-2 px-5 py-2 me-2 mb-6 focus:outline-none">Add to Calendar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}