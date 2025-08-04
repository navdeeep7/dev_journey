
// "use client"
// import Link from 'next/link'

// // CodeChef Contest Card (already correct)
// export function CodechefContestCard({ contestInfo }: any) {
//   // Format the start date for display
//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleString('en-US', {
//       year: 'numeric',
//       month: 'numeric', 
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//       hour12: true
//     });
//   };

//   // Function to format duration nicely
//   const formatDuration = (durationMinutes: string | number) => {
//     const minutes = parseInt(durationMinutes.toString());
//     const hours = Math.floor(minutes / 60);
//     const remainingMinutes = minutes % 60;
    
//     if (hours > 0) {
//       return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
//     }
//     return `${minutes} minutes`;
//   };

//   // Function to create Google Calendar URL
//   const createGoogleCalendarUrl = () => {
//     const startDate = new Date(contestInfo.contest_start_date);
//     const endDate = new Date(startDate);
//     endDate.setMinutes(endDate.getMinutes() + parseInt(contestInfo.contest_duration));
    
//     const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
//     const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
//     const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.contest_name)}&details=${encodeURIComponent(`Codechef Contest: ${contestInfo.contest_code}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
    
//     return url;
//   };

//   return (
//     <div className="w-full ">
//       <div className="bg-cardBlue-custom text-white flex flex-col p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
//         <div className="text-center text-lg font-bold mb-4 line-clamp-2">
//           {contestInfo.contest_code}
//         </div>
        
//         <div className="w-full border-t border-blue-400 my-2 opacity-30"></div>
        
//         <div className="flex-1 space-y-3">
//           <div className="flex flex-col">
//             <span className="text-blue-200 text-sm">Contest Name</span>
//             <span className="font-medium text-sm line-clamp-2">{contestInfo.contest_name}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-blue-200 text-sm">Start Date</span>
//             <span className="font-medium text-sm">{formatDate(contestInfo.contest_start_date)}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-blue-200 text-sm">Duration</span>
//             <span className="font-medium">{formatDuration(contestInfo.contest_duration)}</span>
//           </div>
//         </div>
        
//         <div className="w-full border-t border-blue-400 my-3 opacity-30"></div>
        
//         <div className="grid grid-cols-2 gap-3 mt-2">
//           <Link href="https://www.codechef.com/contests" className="w-full">
//             <button 
//               type="button" 
//               className="w-full text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none"
//             >
//               More Info
//             </button>
//           </Link>
//           <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
//             <button 
//               type="button" 
//               className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none flex items-center justify-center"
//             >
//               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//               </svg>
//               Add
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Codeforces Contest Card (removed mx-auto)
// export function CodeforcesContestCard({ contestInfo }: any) {
//   const date = new Date(contestInfo.startTimeSeconds * 1000).toLocaleString('en-US', {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     hour12: true
//   });

//   const startDate = new Date(contestInfo.startTimeSeconds * 1000);
//   const endDate = new Date(startDate.getTime() + contestInfo.durationSeconds * 1000);

//   const formatDuration = (seconds: number) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
    
//     if (hours > 0) {
//       return `${hours}h ${minutes}m`;
//     }
//     return `${minutes} minutes`;
//   };

//   const createGoogleCalendarUrl = () => {
//     const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
//     const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
//     const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.name)}&details=${encodeURIComponent(`Codeforces Contest ID: ${contestInfo.id}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
    
//     return url;
//   };

//   return (
//     <div className="w-full ">
//       <div className="bg-cardBlue-custom text-white flex flex-col p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
//         <div className="text-center text-lg font-bold mb-4 line-clamp-2">
//           {contestInfo.name}
//         </div>
        
//         <div className="w-full border-t border-blue-400 my-2 opacity-30"></div>
        
//         <div className="flex-1 space-y-3">
//           <div className="flex flex-col">
//             <span className="text-blue-200 text-sm">Contest ID</span>
//             <span className="font-medium">{contestInfo.id}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-blue-200 text-sm">Start Time</span>
//             <span className="font-medium text-sm">{date}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-blue-200 text-sm">Duration</span>
//             <span className="font-medium">{formatDuration(contestInfo.durationSeconds)}</span>
//           </div>
//         </div>
        
//         <div className="w-full border-t border-blue-400 my-3 opacity-30"></div>
        
//         <div className="grid grid-cols-2 gap-3 mt-2">
//           <Link href="https://codeforces.com/contests" className="w-full">
//             <button 
//               type="button" 
//               className="w-full text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none"
//             >
//               More Info
//             </button>
//           </Link>
//           <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
//             <button 
//               type="button" 
//               className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none flex items-center justify-center"
//             >
//               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//               </svg>
//               Add
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// // LeetCode Contest Card (removed mx-auto)
// export function LeetcodeContestCard({ contestInfo }: any) {
//   const date = new Date(contestInfo.startTime * 1000).toLocaleString('en-US', {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     hour12: true
//   });

//   const startDate = new Date(contestInfo.startTime * 1000);
//   const endDate = new Date(startDate.getTime() + contestInfo.duration * 1000);

//   const formatDuration = (seconds: number) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
    
//     if (hours > 0) {
//       return `${hours}h ${minutes}m`;
//     }
//     return `${minutes} minutes`;
//   };

//   const createGoogleCalendarUrl = () => {
//     const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
//     const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
//     const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.title)}&details=${encodeURIComponent(`LeetCode Contest`)}&dates=${startDateFormatted}/${endDateFormatted}`;
    
//     return url;
//   };

//   return (
//     <div className="w-full ">
//       <div className="bg-cardBlue-custom text-white flex flex-col p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
//         <div className="text-center text-lg font-bold mb-4 line-clamp-2">
//           {contestInfo.title}
//         </div>
        
//         <div className="w-full border-t border-blue-400 my-2 opacity-30"></div>
        
//         <div className="flex-1 space-y-3">
//           <div className="flex flex-col">
//             <span className="text-blue-200 text-sm">Start Time</span>
//             <span className="font-medium text-sm">{date}</span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-blue-200 text-sm">Duration</span>
//             <span className="font-medium">{formatDuration(contestInfo.duration)}</span>
//           </div>
//         </div>
        
//         <div className="w-full border-t border-blue-400 my-3 opacity-30"></div>
        
//         <div className="grid grid-cols-2 gap-3 mt-2">
//           <Link href="https://leetcode.com/contest/" className="w-full">
//             <button 
//               type="button" 
//               className="w-full text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none"
//             >
//               More Info
//             </button>
//           </Link>
//           <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
//             <button 
//               type="button" 
//               className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors duration-300 focus:outline-none flex items-center justify-center"
//             >
//               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//               </svg>
//               Add
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client"
// import Link from 'next/link'
// import { useState, useEffect } from 'react'

// // Enhanced CodeChef Contest Card
// export function CodechefContestCard({ contestInfo }: any) {
//   const [timeLeft, setTimeLeft] = useState('');
//   const [isStartingSoon, setIsStartingSoon] = useState(false);

//   // Calculate time remaining until contest starts
//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const now = new Date().getTime();
//       const startTime = new Date(contestInfo.contest_start_date).getTime();
//       const difference = startTime - now;

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

//         if (days > 0) {
//           setTimeLeft(`${days}d ${hours}h ${minutes}m`);
//         } else if (hours > 0) {
//           setTimeLeft(`${hours}h ${minutes}m`);
//         } else {
//           setTimeLeft(`${minutes}m`);
//         }

//         // Contest starting within 1 hour
//         setIsStartingSoon(difference < 3600000);
//       } else {
//         setTimeLeft('Started');
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

//     return () => clearInterval(timer);
//   }, [contestInfo.contest_start_date]);

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleString('en-US', {
//       year: 'numeric',
//       month: 'short', 
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//       hour12: true
//     });
//   };

//   const formatDuration = (durationMinutes: string | number) => {
//     const minutes = parseInt(durationMinutes.toString());
//     const hours = Math.floor(minutes / 60);
//     const remainingMinutes = minutes % 60;
    
//     if (hours > 0) {
//       return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
//     }
//     return `${minutes} minutes`;
//   };

//   const createGoogleCalendarUrl = () => {
//     const startDate = new Date(contestInfo.contest_start_date);
//     const endDate = new Date(startDate);
//     endDate.setMinutes(endDate.getMinutes() + parseInt(contestInfo.contest_duration));
    
//     const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
//     const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
//     const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.contest_name)}&details=${encodeURIComponent(`Codechef Contest: ${contestInfo.contest_code}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
    
//     return url;
//   };

//   return (
//     <div className="w-full group">
//       <div className="bg-gradient-to-br from-cardBlue-custom to-blue-800 text-white flex flex-col p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-600/20 relative overflow-hidden">
//         {/* Background glow effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
//         {/* Contest status badge */}
//         <div className="absolute top-4 right-4 z-10">
//           <div className={`px-2 py-1 rounded-full text-xs font-medium ${
//             isStartingSoon 
//               ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30 animate-pulse' 
//               : 'bg-green-500/20 text-green-300 border border-green-400/30'
//           }`}>
//             {timeLeft === 'Started' ? '🔴 Live' : `⏱️ ${timeLeft}`}
//           </div>
//         </div>

//         <div className="text-center text-lg font-bold mb-4 line-clamp-2 relative z-10 group-hover:text-blue-200 transition-colors">
//           {contestInfo.contest_code}
//         </div>
        
//         <div className="w-full border-t border-blue-400/40 my-2"></div>
        
//         <div className="flex-1 space-y-3 relative z-10">
//           <div className="flex flex-col group/item hover:bg-blue-700/20 p-2 rounded-lg transition-colors">
//             <span className="text-blue-200 text-sm flex items-center">
//               <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
//               Contest Name
//             </span>
//             <span className="font-medium text-sm line-clamp-2 ml-4">{contestInfo.contest_name}</span>
//           </div>
//           <div className="flex flex-col group/item hover:bg-blue-700/20 p-2 rounded-lg transition-colors">
//             <span className="text-blue-200 text-sm flex items-center">
//               <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
//               Start Date
//             </span>
//             <span className="font-medium text-sm ml-4">{formatDate(contestInfo.contest_start_date)}</span>
//           </div>
//           <div className="flex flex-col group/item hover:bg-blue-700/20 p-2 rounded-lg transition-colors">
//             <span className="text-blue-200 text-sm flex items-center">
//               <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
//               Duration
//             </span>
//             <span className="font-medium ml-4">{formatDuration(contestInfo.contest_duration)}</span>
//           </div>
//         </div>
        
//         <div className="w-full border-t border-blue-400/40 my-3"></div>
        
//         <div className="grid grid-cols-2 gap-3 mt-2 relative z-10">
//           <Link href="https://www.codechef.com/contests" className="w-full">
//             <button 
//               type="button" 
//               className="w-full text-white bg-hoverBlue-custom hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-300 focus:outline-none transform hover:scale-105 shadow-md hover:shadow-lg"
//             >
//               <span className="flex items-center justify-center">
//                 <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
//                 </svg>
//                 Info
//               </span>
//             </button>
//           </Link>
//           <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
//             <button 
//               type="button" 
//               className="w-full text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-300 focus:outline-none transform hover:scale-105 shadow-md hover:shadow-lg"
//             >
//               <span className="flex items-center justify-center">
//                 <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//                 </svg>
//                 Add
//               </span>
//             </button>
//           </Link>
//         </div>

//         {/* Floating particles effect (optional) */}
//         <div className="absolute top-2 left-2 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-ping"></div>
//         <div className="absolute bottom-4 right-8 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-pulse"></div>
//       </div>
//     </div>
//   );
// }

// // Enhanced Codeforces Contest Card
// export function CodeforcesContestCard({ contestInfo }: any) {
//   const [timeLeft, setTimeLeft] = useState('');
//   const [isStartingSoon, setIsStartingSoon] = useState(false);

//   // Calculate time remaining until contest starts
//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const now = new Date().getTime();
//       const startTime = contestInfo.startTimeSeconds * 1000;
//       const difference = startTime - now;

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

//         if (days > 0) {
//           setTimeLeft(`${days}d ${hours}h ${minutes}m`);
//         } else if (hours > 0) {
//           setTimeLeft(`${hours}h ${minutes}m`);
//         } else {
//           setTimeLeft(`${minutes}m`);
//         }

//         setIsStartingSoon(difference < 3600000);
//       } else {
//         setTimeLeft('Started');
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 60000);

//     return () => clearInterval(timer);
//   }, [contestInfo.startTimeSeconds]);

//   const date = new Date(contestInfo.startTimeSeconds * 1000).toLocaleString('en-US', {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     hour12: true
//   });

//   const startDate = new Date(contestInfo.startTimeSeconds * 1000);
//   const endDate = new Date(startDate.getTime() + contestInfo.durationSeconds * 1000);

//   const formatDuration = (seconds: number) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
    
//     if (hours > 0) {
//       return `${hours}h ${minutes}m`;
//     }
//     return `${minutes} minutes`;
//   };

//   const createGoogleCalendarUrl = () => {
//     const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
//     const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
//     const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.name)}&details=${encodeURIComponent(`Codeforces Contest ID: ${contestInfo.id}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
    
//     return url;
//   };

//   return (
//     <div className="w-full group">
//       <div className="bg-gradient-to-br from-cardBlue-custom to-indigo-800 text-white flex flex-col p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-indigo-600/20 relative overflow-hidden">
//         {/* Background glow effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
//         {/* Contest status badge */}
//         <div className="absolute top-4 right-4 z-10">
//           <div className={`px-2 py-1 rounded-full text-xs font-medium ${
//             isStartingSoon 
//               ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30 animate-pulse' 
//               : 'bg-green-500/20 text-green-300 border border-green-400/30'
//           }`}>
//             {timeLeft === 'Started' ? '🔴 Live' : `⏱️ ${timeLeft}`}
//           </div>
//         </div>

//         <div className="text-center text-lg font-bold mb-4 line-clamp-2 relative z-10 group-hover:text-indigo-200 transition-colors">
//           {contestInfo.name}
//         </div>
        
//         <div className="w-full border-t border-indigo-400/40 my-2"></div>
        
//         <div className="flex-1 space-y-3 relative z-10">
//           <div className="flex flex-col group/item hover:bg-indigo-700/20 p-2 rounded-lg transition-colors">
//             <span className="text-indigo-200 text-sm flex items-center">
//               <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
//               Contest ID
//             </span>
//             <span className="font-medium ml-4">{contestInfo.id}</span>
//           </div>
//           <div className="flex flex-col group/item hover:bg-indigo-700/20 p-2 rounded-lg transition-colors">
//             <span className="text-indigo-200 text-sm flex items-center">
//               <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
//               Start Time
//             </span>
//             <span className="font-medium text-sm ml-4">{date}</span>
//           </div>
//           <div className="flex flex-col group/item hover:bg-indigo-700/20 p-2 rounded-lg transition-colors">
//             <span className="text-indigo-200 text-sm flex items-center">
//               <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
//               Duration
//             </span>
//             <span className="font-medium ml-4">{formatDuration(contestInfo.durationSeconds)}</span>
//           </div>
//         </div>
        
//         <div className="w-full border-t border-indigo-400/40 my-3"></div>
        
//         <div className="grid grid-cols-2 gap-3 mt-2 relative z-10">
//           <Link href="https://codeforces.com/contests" className="w-full">
//             <button 
//               type="button" 
//               className="w-full text-white bg-hoverBlue-custom hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-300 focus:outline-none transform hover:scale-105 shadow-md hover:shadow-lg"
//             >
//               <span className="flex items-center justify-center">
//                 <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
//                 </svg>
//                 Info
//               </span>
//             </button>
//           </Link>
//           <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
//             <button 
//               type="button" 
//               className="w-full text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-300 focus:outline-none transform hover:scale-105 shadow-md hover:shadow-lg"
//             >
//               <span className="flex items-center justify-center">
//                 <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//                 </svg>
//                 Add
//               </span>
//             </button>
//           </Link>
//         </div>

//         {/* Floating particles effect */}
//         <div className="absolute top-2 left-2 w-1 h-1 bg-indigo-300 rounded-full opacity-60 animate-ping"></div>
//         <div className="absolute bottom-4 right-8 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-pulse"></div>
//       </div>
//     </div>
//   );
// }

// // Enhanced LeetCode Contest Card
// export function LeetcodeContestCard({ contestInfo }: any) {
//   const [timeLeft, setTimeLeft] = useState('');
//   const [isStartingSoon, setIsStartingSoon] = useState(false);

//   // Calculate time remaining until contest starts
//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const now = new Date().getTime();
//       const startTime = contestInfo.startTime * 1000;
//       const difference = startTime - now;

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

//         if (days > 0) {
//           setTimeLeft(`${days}d ${hours}h ${minutes}m`);
//         } else if (hours > 0) {
//           setTimeLeft(`${hours}h ${minutes}m`);
//         } else {
//           setTimeLeft(`${minutes}m`);
//         }

//         setIsStartingSoon(difference < 3600000);
//       } else {
//         setTimeLeft('Started');
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 60000);

//     return () => clearInterval(timer);
//   }, [contestInfo.startTime]);

//   const date = new Date(contestInfo.startTime * 1000).toLocaleString('en-US', {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     hour12: true
//   });

//   const startDate = new Date(contestInfo.startTime * 1000);
//   const endDate = new Date(startDate.getTime() + contestInfo.duration * 1000);

//   const formatDuration = (seconds: number) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
    
//     if (hours > 0) {
//       return `${hours}h ${minutes}m`;
//     }
//     return `${minutes} minutes`;
//   };

//   const createGoogleCalendarUrl = () => {
//     const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
//     const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
//     const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.title)}&details=${encodeURIComponent(`LeetCode Contest`)}&dates=${startDateFormatted}/${endDateFormatted}`;
    
//     return url;
//   };

//   return (
//     <div className="w-full group">
//       <div className="bg-gradient-to-br from-cardBlue-custom to-emerald-800 text-white flex flex-col p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-emerald-600/20 relative overflow-hidden">
//         {/* Background glow effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
//         {/* Contest status badge */}
//         <div className="absolute top-4 right-4 z-10">
//           <div className={`px-2 py-1 rounded-full text-xs font-medium ${
//             isStartingSoon 
//               ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30 animate-pulse' 
//               : 'bg-green-500/20 text-green-300 border border-green-400/30'
//           }`}>
//             {timeLeft === 'Started' ? '🔴 Live' : `⏱️ ${timeLeft}`}
//           </div>
//         </div>

//         <div className="text-center text-lg font-bold mb-4 line-clamp-2 relative z-10 group-hover:text-emerald-200 transition-colors">
//           {contestInfo.title}
//         </div>
        
//         <div className="w-full border-t border-emerald-400/40 my-2"></div>
        
//         <div className="flex-1 space-y-3 relative z-10">
//           <div className="flex flex-col group/item hover:bg-emerald-700/20 p-2 rounded-lg transition-colors">
//             <span className="text-emerald-200 text-sm flex items-center">
//               <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
//               Start Time
//             </span>
//             <span className="font-medium text-sm ml-4">{date}</span>
//           </div>
//           <div className="flex flex-col group/item hover:bg-emerald-700/20 p-2 rounded-lg transition-colors">
//             <span className="text-emerald-200 text-sm flex items-center">
//               <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
//               Duration
//             </span>
//             <span className="font-medium ml-4">{formatDuration(contestInfo.duration)}</span>
//           </div>
//         </div>
        
//         <div className="w-full border-t border-emerald-400/40 my-3"></div>
        
//         <div className="grid grid-cols-2 gap-3 mt-2 relative z-10">
//           <Link href="https://leetcode.com/contest/" className="w-full">
//             <button 
//               type="button" 
//               className="w-full text-white bg-hoverBlue-custom hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-300 focus:outline-none transform hover:scale-105 shadow-md hover:shadow-lg"
//             >
//               <span className="flex items-center justify-center">
//                 <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
//                 </svg>
//                 Info
//               </span>
//             </button>
//           </Link>
//           <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
//             <button 
//               type="button" 
//               className="w-full text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-300 focus:outline-none transform hover:scale-105 shadow-md hover:shadow-lg"
//             >
//               <span className="flex items-center justify-center">
//                 <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
//                 </svg>
//                 Add
//               </span>
//             </button>
//           </Link>
//         </div>

//         {/* Floating particles effect */}
//         <div className="absolute top-2 left-2 w-1 h-1 bg-emerald-300 rounded-full opacity-60 animate-ping"></div>
//         <div className="absolute bottom-4 right-8 w-1 h-1 bg-cyan-300 rounded-full opacity-40 animate-pulse"></div>
//       </div>
//     </div>
//   );
// }
"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Enhanced CodeChef Contest Card
export function CodechefContestCard({ contestInfo }: any) {
  const [timeLeft, setTimeLeft] = useState('');
  const [isStartingSoon, setIsStartingSoon] = useState(false);

  // Calculate time remaining until contest starts
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const startTime = new Date(contestInfo.contest_start_date).getTime();
      const difference = startTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        if (days > 0) {
          setTimeLeft(`${days}d ${hours}h ${minutes}m`);
        } else if (hours > 0) {
          setTimeLeft(`${hours}h ${minutes}m`);
        } else {
          setTimeLeft(`${minutes}m`);
        }

        // Contest starting within 1 hour
        setIsStartingSoon(difference < 3600000);
      } else {
        setTimeLeft('Started');
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [contestInfo.contest_start_date]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  const formatDuration = (durationMinutes: string | number) => {
    const minutes = parseInt(durationMinutes.toString());
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (hours > 0) {
      return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
    }
    return `${minutes} minutes`;
  };

  const createGoogleCalendarUrl = () => {
    const startDate = new Date(contestInfo.contest_start_date);
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + parseInt(contestInfo.contest_duration));
    
    const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.contest_name)}&details=${encodeURIComponent(`Codechef Contest: ${contestInfo.contest_code}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
    
    return url;
  };

  return (
    <div className="w-full group">
      <div className="bg-gradient-to-br from-cardBlue-custom to-blue-800 text-white flex flex-col p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-600/20 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Contest status badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            isStartingSoon 
              ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30 animate-pulse' 
              : 'bg-green-500/20 text-green-300 border border-green-400/30'
          }`}>
            {timeLeft === 'Started' ? '🔴 Live' : `⏱️ ${timeLeft}`}
          </div>
        </div>

        <div className="text-center text-lg font-bold mb-4 line-clamp-2 relative z-10 group-hover:text-blue-200 transition-colors">
          {contestInfo.contest_code}
        </div>
        
        <div className="w-full border-t border-blue-400/40 my-2"></div>
        
        <div className="flex-1 space-y-3 relative z-10">
          <div className="flex flex-col group/item hover:bg-blue-700/20 p-2 rounded-lg transition-colors">
            <span className="text-blue-200 text-sm flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Contest Name
            </span>
            <span className="font-medium text-sm line-clamp-2 ml-4">{contestInfo.contest_name}</span>
          </div>
          <div className="flex flex-col group/item hover:bg-blue-700/20 p-2 rounded-lg transition-colors">
            <span className="text-blue-200 text-sm flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Start Date
            </span>
            <span className="font-medium text-sm ml-4">{formatDate(contestInfo.contest_start_date)}</span>
          </div>
          <div className="flex flex-col group/item hover:bg-blue-700/20 p-2 rounded-lg transition-colors">
            <span className="text-blue-200 text-sm flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Duration
            </span>
            <span className="font-medium ml-4">{formatDuration(contestInfo.contest_duration)}</span>
          </div>
        </div>
        
        <div className="w-full border-t border-blue-400/40 my-3"></div>
        
        <div className="grid grid-cols-2 gap-3 mt-2 relative z-10">
          <Link href="https://www.codechef.com/contests" className="w-full">
            <button 
              type="button" 
              className="w-full text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-300 focus:outline-none transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                Info
              </span>
            </button>
          </Link>
          <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
            <button 
              type="button" 
              className="w-full text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-300 focus:outline-none transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
                Add
              </span>
            </button>
          </Link>
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute bottom-4 right-8 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-pulse"></div>
      </div>
    </div>
  );
}

// Enhanced Codeforces Contest Card
export function CodeforcesContestCard({ contestInfo }: any) {
  const [timeLeft, setTimeLeft] = useState('');
  const [isStartingSoon, setIsStartingSoon] = useState(false);

  // Calculate time remaining until contest starts
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const startTime = contestInfo.startTimeSeconds * 1000;
      const difference = startTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        if (days > 0) {
          setTimeLeft(`${days}d ${hours}h ${minutes}m`);
        } else if (hours > 0) {
          setTimeLeft(`${hours}h ${minutes}m`);
        } else {
          setTimeLeft(`${minutes}m`);
        }

        setIsStartingSoon(difference < 3600000);
      } else {
        setTimeLeft('Started');
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, [contestInfo.startTimeSeconds]);

  const date = new Date(contestInfo.startTimeSeconds * 1000).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const startDate = new Date(contestInfo.startTimeSeconds * 1000);
  const endDate = new Date(startDate.getTime() + contestInfo.durationSeconds * 1000);

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes} minutes`;
  };

  const createGoogleCalendarUrl = () => {
    const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.name)}&details=${encodeURIComponent(`Codeforces Contest ID: ${contestInfo.id}`)}&dates=${startDateFormatted}/${endDateFormatted}`;
    
    return url;
  };

  return (
    <div className="w-full group">
      <div className="bg-gradient-to-br from-cardBlue-custom to-blue-800 text-white flex flex-col p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-600/20 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Contest status badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            isStartingSoon 
              ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30 animate-pulse' 
              : 'bg-green-500/20 text-green-300 border border-green-400/30'
          }`}>
            {timeLeft === 'Started' ? '🔴 Live' : `⏱️ ${timeLeft}`}
          </div>
        </div>

        <div className="text-center text-lg font-bold mb-4 line-clamp-2 relative z-10 group-hover:text-blue-200 transition-colors">
          {contestInfo.name}
        </div>
        
        <div className="w-full border-t border-blue-400/40 my-2"></div>
        
        <div className="flex-1 space-y-3 relative z-10">
          <div className="flex flex-col group/item hover:bg-blue-700/20 p-2 rounded-lg transition-colors">
            <span className="text-blue-200 text-sm flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Contest ID
            </span>
            <span className="font-medium ml-4">{contestInfo.id}</span>
          </div>
          <div className="flex flex-col group/item hover:bg-blue-700/20 p-2 rounded-lg transition-colors">
            <span className="text-blue-200 text-sm flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Start Time
            </span>
            <span className="font-medium text-sm ml-4">{date}</span>
          </div>
          <div className="flex flex-col group/item hover:bg-blue-700/20 p-2 rounded-lg transition-colors">
            <span className="text-blue-200 text-sm flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Duration
            </span>
            <span className="font-medium ml-4">{formatDuration(contestInfo.durationSeconds)}</span>
          </div>
        </div>
        
        <div className="w-full border-t border-blue-400/40 my-3"></div>
        
        <div className="grid grid-cols-2 gap-3 mt-2 relative z-10">
          <Link href="https://codeforces.com/contests" className="w-full">
            <button 
              type="button" 
              className="w-full text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-300 focus:outline-none transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                Info
              </span>
            </button>
          </Link>
          <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
            <button 
              type="button" 
              className="w-full text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-300 focus:outline-none transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
                Add
              </span>
            </button>
          </Link>
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute bottom-4 right-8 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-pulse"></div>
      </div>
    </div>
  );
}

// Enhanced LeetCode Contest Card
export function LeetcodeContestCard({ contestInfo }: any) {
  const [timeLeft, setTimeLeft] = useState('');
  const [isStartingSoon, setIsStartingSoon] = useState(false);

  // Calculate time remaining until contest starts
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const startTime = contestInfo.startTime * 1000;
      const difference = startTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        if (days > 0) {
          setTimeLeft(`${days}d ${hours}h ${minutes}m`);
        } else if (hours > 0) {
          setTimeLeft(`${hours}h ${minutes}m`);
        } else {
          setTimeLeft(`${minutes}m`);
        }

        setIsStartingSoon(difference < 3600000);
      } else {
        setTimeLeft('Started');
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, [contestInfo.startTime]);

  const date = new Date(contestInfo.startTime * 1000).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const startDate = new Date(contestInfo.startTime * 1000);
  const endDate = new Date(startDate.getTime() + contestInfo.duration * 1000);

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes} minutes`;
  };

  const createGoogleCalendarUrl = () => {
    const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(contestInfo.title)}&details=${encodeURIComponent(`LeetCode Contest`)}&dates=${startDateFormatted}/${endDateFormatted}`;
    
    return url;
  };

  return (
    <div className="w-full group">
      <div className="bg-gradient-to-br from-cardBlue-custom to-blue-800 text-white flex flex-col p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-600/20 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Contest status badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            isStartingSoon 
              ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30 animate-pulse' 
              : 'bg-green-500/20 text-green-300 border border-green-400/30'
          }`}>
            {timeLeft === 'Started' ? '🔴 Live' : `⏱️ ${timeLeft}`}
          </div>
        </div>

        <div className="text-center text-lg font-bold mb-4 line-clamp-2 relative z-10 group-hover:text-blue-200 transition-colors">
          {contestInfo.title}
        </div>
        
        <div className="w-full border-t border-blue-400/40 my-2"></div>
        
        <div className="flex-1 space-y-3 relative z-10">
          <div className="flex flex-col group/item hover:bg-blue-700/20 p-2 rounded-lg transition-colors">
            <span className="text-blue-200 text-sm flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Start Time
            </span>
            <span className="font-medium text-sm ml-4">{date}</span>
          </div>
          <div className="flex flex-col group/item hover:bg-blue-700/20 p-2 rounded-lg transition-colors">
            <span className="text-blue-200 text-sm flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Duration
            </span>
            <span className="font-medium ml-4">{formatDuration(contestInfo.duration)}</span>
          </div>
        </div>
        
        <div className="w-full border-t border-blue-400/40 my-3"></div>
        
        <div className="grid grid-cols-2 gap-3 mt-2 relative z-10">
          <Link href="https://leetcode.com/contest/" className="w-full">
            <button 
              type="button" 
              className="w-full text-white bg-hoverBlue-custom hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-300 focus:outline-none transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                Info
              </span>
            </button>
          </Link>
          <Link href={createGoogleCalendarUrl()} target="_blank" className="w-full">
            <button 
              type="button" 
              className="w-full text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-all duration-300 focus:outline-none transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
                Add
              </span>
            </button>
          </Link>
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute bottom-4 right-8 w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-pulse"></div>
      </div>
    </div>
  );
}