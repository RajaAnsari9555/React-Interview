import React, { useEffect, useState } from 'react';

const FetchAPI = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => {
        setUser(data.results);
      });
  }, []);
  
//! for axios
//   useEffect(() => {
//     axios
//       .get("https://randomuser.me/api/?results=5")
//       .then(res => {
//         setUser(res.data.results);
//       });
//   }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {user.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={user.picture.large}
              alt="user"
              className="w-28 h-28 mx-auto rounded-full border-4 border-indigo-500 mb-4"
            />

            <h2 className="text-xl font-semibold text-gray-800">
              {user.name.first} {user.name.last}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {user.email}
            </p>

            <span className="inline-block mt-3 px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-600 capitalize">
              {user.gender}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchAPI;
