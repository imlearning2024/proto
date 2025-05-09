import { useEffect, useState } from "react";
import IssueCard from "../components/IssueCard";

const UserReports = () => {
  const [userIssues, setUserIssues] = useState([]);
  const [currentUser, setCurrentUser] = useState("Ravi Kumar"); // Replace with actual auth source

  useEffect(() => {
    const fetchUserIssues = async () => {
      // Replace with real API
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              {
                id: 1,
                type: "Water Pollution",
                description: "Contaminated water near the Yamuna river.",
                location: "Delhi, India",
                username: "Ravi Kumar",
                resolved: false,
              },
              {
                id: 3,
                type: "Plastic Waste",
                description: "Plastic bags dumped near school.",
                location: "Agra, UP",
                username: "Ravi Kumar",
                resolved: true,
              },
              {
                id: 4,
                type: "Deforestation",
                description: "Trees being cut without permit.",
                location: "Noida, UP",
                username: "Sneha Sharma",
                resolved: false,
              },
            ]),
          1000
        )
      );

      // Filter only current user’s reports
      const filtered = response.filter(
        (issue) => issue.username === currentUser
      );
      setUserIssues(filtered);
    };

    fetchUserIssues();
  }, [currentUser]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">My Reports</h1>

      {userIssues.length === 0 ? (
        <p className="text-gray-600">You haven’t reported any issues yet.</p>
      ) : (
        <div className="grid gap-6">
          {userIssues.map((issue) => (
            <IssueCard
              key={issue.id}
              issue={issue}
              onResolve={() => {}}
              onSend={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserReports;
