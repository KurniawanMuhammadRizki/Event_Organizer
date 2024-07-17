"use client";
import React from "react";
import MenuComponent from "./menuComponent";
import SignOutBtn from "./signOutBtn";
import Test from "./test";
import dynamic from "next/dynamic";
import EventList from "./eventListt";
import { useSession } from "next-auth/react";
// import EventPage from "./eventPage";
// import { useTokenContext } from "./tokenContext";

const UserProfileForm = dynamic(() => import("../dummy/userProfileForm"), {
  ssr: false,
});
const DummyPage = () => {
  const { data: session } = useSession();
  return (
    <div>
      {/* <UserProfileForm /> */}

      {/* <UserProfileForm /> */}

      {/* <EventList /> */}
      {/* <div className="mt-20">
        <p>Email: {session?.user?.email}</p>
        <p>Email: {session?.user?.token}</p>
      </div> */}

      <UserProfileForm />
    </div>
  );
};

export default DummyPage;
