"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Extend the Window interface to declare phoneEmailListener
declare global {
  interface Window {
    phoneEmailListener?: (userObj: any) => void;
  }
}

const SignInButton = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Load the external script
    const script = document.createElement("script");
    script.src = "https://www.phone.email/sign_in_button_v1.js";
    script.async = true;
    document.querySelector(".pe_signin_button")?.appendChild(script);

    // Define the listener function
    window.phoneEmailListener = async (userObj: any) => {
      const user_json_url = userObj.user_json_url;
      console.log("Generated user_json_url:", user_json_url);

      try {
        // Fetch user data from backend
        const response = await axios.get(
          `/api/get-user-data?url=${encodeURIComponent(user_json_url)}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    return () => {
      // Cleanup listener function when component unmounts
      window.phoneEmailListener = undefined;
    };
  }, []);

  return (
    <div>
      <div
        className="pe_signin_button"
        data-client-id="15695407177920574360"
      ></div>

      {userData && (
        <div>
          <h3>Phone Verification Successful!</h3>
        </div>
      )}
    </div>
  );
};

export default SignInButton;
