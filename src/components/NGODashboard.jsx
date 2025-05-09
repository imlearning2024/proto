import { useEffect, useState } from "react";
import IssueList from "../components/IssueList";

const NGODashboard = () => {
  const [issues, setIssues] = useState([]);

  // Simulate fetching from backend
  useEffect(() => {
    const fetchData = async () => {
      // Replace with actual API call
      const response = await new Promise((res) =>
        setTimeout(
          () =>
            res([
              {
                id: 1,
                type: "Water Pollution",
                description: "Contaminated water near the Yamuna river.",
                location: "Delhi, India",
                username: "Ravi Kumar",
                resolved: false,
              },
              {
                id: 2,
                type: "Soil Degradation",
                description: "Construction waste dumped in farmland.",
                location: "Meerut, Uttar Pradesh",
                username: "Sneha Sharma",
                resolved: false,
              },
            ]),
          1000
        )
      );
      setIssues(response);
    };

    fetchData();
  }, []);

  const markResolved = (id) => {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id ? { ...issue, resolved: true } : issue
      )
    );
  };

  const sendToGovernment = (issue) => {
    // Replace with your POST request logic
    console.log("Sending to government:", issue);
    alert(`Issue "${issue.type}" sent to government.`);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-600 mb-6">NGO Dashboard</h1>
      <IssueList
        issues={issues}
        onResolve={markResolved}
        onSend={sendToGovernment}
      />
    </div>
  );
};

export default NGODashboard;
