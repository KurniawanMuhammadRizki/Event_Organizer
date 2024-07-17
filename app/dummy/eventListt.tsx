"use client";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

const EventListt = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Gunakan token dari session jika ada
        let token = session?.user?.id || "";

        // Jika tidak ada token di session, gunakan token hardcoded (hanya untuk testing)
        if (!token) {
          token =
            "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoia3VraUBnbWFpbC5jb20iLCJleHAiOjE3MjExNTM0NjUsImlhdCI6MTcyMTE0OTg2NSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DT01QQU5ZIl0sInNjb3BlIjoiUk9MRV9DT01QQU5ZIn0.BeHvadHq140MqxNx4jiHWAPXrMV3JRwlSM3SmW9llMw5v_ecCLnqF--QNAG-Hyum-vgTF0UxLwMrA7GqMdyiDXKsYbO_y0qO5lEMS_9W3oJirfWlo4V8-TlywHQerGLXigIjBXOIuSYFAlB01hrIxvp20c8cdQjeseZqf_NDzM9e1qmMOjCAgGR4Cq4NwS2RFSjMoNrGB-e25Za3aFY3-k1Q59jjZoZEV86_uEuVShu20pFZWfCzF66OZHn8HnKeZdygnuiNc87oNQ03Mi83R4UpEqSYiAlWNHt_YBwmnSgLfpoQ7nCyTHjfgAsuhqb8tWakCmW_EbpoEXaah9coCQ";
          console.log("Using hardcoded token");
        } else {
          console.log("Using session token");
        }

        if (!token) {
          throw new Error("No token found");
        }

        const response = await fetch(
          "https://kuivent-event-management-y2muiw3wba-et.a.run.app/api/v1/invoice/event/3",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const errorBody = await response.text();
          console.error("Error response:", errorBody);
          if (response.status === 401) {
            throw new Error(
              `Unauthorized: Invalid or expired token. Details: ${errorBody}`
            );
          }
          throw new Error(
            `HTTP error! status: ${response.status}, details: ${errorBody}`
          );
        }

        const data = await response.json();
        setEvents(data);
        console.log("ini data: ", data.data[0].companyName);
      } catch (e) {
        setError(e.message);
        console.error("Error fetching events:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [session]); // Tambahkan session sebagai dependency

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Events</h1>

      {events.length > 0 ? (
        <h3>{events.data.data[0].companyName}</h3>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default EventListt;
