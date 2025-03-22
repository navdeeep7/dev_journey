// "use client"
// import axios from "axios";
// import { useEffect, useState } from "react";

// const InfoRow = ({ label, value }:any) => (
//     <div className="flex justify-between">
//       <span className="text-gray-600 font-semibold">{label}:</span>
//       <span className="text-white block text-right">{value}</span>
//     </div>
//   );

  
// export default function CodeforcesCard(){
//   const[userData,setUserData]=useState<any>({});
//   const [loading,setLoading]=useState(true);

//   useEffect(()=>{
//     try{
      
//       axios.get("https://dev-journey-zeta.vercel.app/api/platformRatings/codeforces",{
//         headers:{
//             authorization:localStorage.getItem("token")
//         } 
//     }).then(res=>{
//         setUserData(res.data.userData);
//         if(res.data.success){
//           setLoading(false);
//         }
//       })
//     }
//     catch(e){
//       alert(e);
//     }
//      // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[])
    
//         const getRankColor = (rank:any) => {
//           const colors = {
//             'newbie': 'text-gray-500',
//             'pupil': 'text-green-500',
//             'specialist': 'text-cyan-500',
//             'expert': 'text-blue-500',
//             'candidate master': 'text-purple-500',
//             'master': 'text-orange-500',
//             'international master': 'text-orange-600',
//             'grandmaster': 'text-red-500',
//             'international grandmaster': 'text-red-600',
//             'legendary grandmaster': 'text-red-700'
//           };
//           //@ts-ignore
//           return colors[rank.toLowerCase()] || 'text-gray-700';
//         };
//     return(
//         <div>
//           {loading? <div className="skeleton-loader  h-80 bg-cardBlue-custom rounded-lg shadow-md p-6 shadow-md p-6 animate-pulse">
//           <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
//           <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
//           <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
//           <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
//           <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
//         </div>:<div className="bg-cardBlue-custom rounded-lg shadow-md p-6 ">
//       <div className="flex items-center mb-12 mt-6">
//         <div>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mr-4">
//     <path fill="#1F8ACB" d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
//   </svg>

//         </div>
//         <div>
//           <h2 className="text-2xl  text-white">{userData.result[0].handle}</h2>
          
          
//         </div>
//       </div>
//       <div className="space-y-2">
//         <InfoRow label="Rating" value={userData.result[0].rating} />
//         <InfoRow label="Rank" value={userData.result[0].rank} />
//         <InfoRow label="Max Rating" value={userData.result[0].maxRating} />
//         <InfoRow label="Max Rank" value={userData.result[0].maxRank} />
        
//       </div>
//     </div>}
             
//         </div>
//     )
// }
"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const InfoRow = ({ label, value }: any) => (
  <div className="flex justify-between">
    <span className="text-gray-600 font-semibold">{label}:</span>
    <span className="text-white block text-right">{value}</span>
  </div>
);

export default function CodeforcesCard() {
  const [userData, setUserData] = useState<any>({});
  const [contests, setContests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userRes = await axios.get("https://dev-journey-zeta.vercel.app/api/platformRatings/codeforces", {
          headers: { authorization: localStorage.getItem("token") },
        });

        if (userRes.data.success) {
          setUserData(userRes.data.userData);
        }

        // Fetch contest data
        const contestsRes = await axios.get("https://codeforces.com/api/contest.list");
        if (contestsRes.data.status === "OK") {
          // Filter only upcoming contests
          const upcomingContests = contestsRes.data.result
            .filter((contest: any) => contest.phase === "BEFORE")
            .sort((a: any, b: any) => a.startTimeSeconds - b.startTimeSeconds) // Sort by start time
            .slice(0, 2); // Take the latest two contests

          setContests(upcomingContests);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="skeleton-loader h-80 bg-cardBlue-custom rounded-lg shadow-md p-6 animate-pulse">
          <div className="w-3/4 h-6 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-2"></div>
          <div className="w-full h-4 bg-cardBlue-light rounded mb-4"></div>
          <div className="w-1/2 h-8 bg-cardBlue-light rounded"></div>
        </div>
      ) : (
        <div className="bg-cardBlue-custom rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 mr-4">
              <path fill="#1F8ACB" d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
            </svg>
            <div>
              <h2 className="text-2xl text-white">{userData.result?.[0]?.handle}</h2>
            </div>
          </div>

          <div className="space-y-2">
            <InfoRow label="Rating" value={userData.result?.[0]?.rating} />
            <InfoRow label="Rank" value={userData.result?.[0]?.rank} />
            <InfoRow label="Max Rating" value={userData.result?.[0]?.maxRating} />
            <InfoRow label="Max Rank" value={userData.result?.[0]?.maxRank} />
          </div>

          {/* Upcoming Contests Section */}
          <h3 className="text-xl text-white mt-6 mb-2">Upcoming Contests</h3>
          <div className="space-y-2">
            {contests.length > 0 ? (
              contests.map((contest) => (
                <div key={contest.id} className="p-4 bg-cardBlue-light rounded-lg">
                  <h4 className="text-lg text-white">{contest.name}</h4>
                  <p className="text-gray-300">
                    Starts: {new Date(contest.startTimeSeconds * 1000).toLocaleString()}
                  </p>
                  <p className="text-gray-400">Duration: {contest.durationSeconds / 3600} hours</p>
                </div>
              ))
            ) : (
              <p className="text-gray-300">No upcoming contests.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
