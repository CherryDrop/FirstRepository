import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProtectedPageFunction } from "src/lib/auth0/auth0";
import { getCsrfTokenShortcut } from "src/lib/requestUtils";

const Profile = () => {
    const [userInfo, setUserInfo] = useState(null);


    useEffect(() => {
        fetch("/api/auth0/get-user", {
            method: "GET"
        }).then((res) => {
            res.json().then((data) => {
                setUserInfo(data);
            })
        }).catch()
    }, []);

    return userInfo ? (
        <div className="flex flex-col sm:flex-row p-10">
            <div className="
            sm:w-1/2
            "
            >
                <img style={{
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            }}
            src={
                    userInfo.picture
                } className="h-64 w-full object-cover rounded-lg mb-4 sm:mb-0"/>
            </div>
            <div className="sm:w-1/2 p-4 sm:pl-8">
                <h2 className="text-2xl font-medium">{userInfo.name}</h2>
                <p className="text-gray-600">{userInfo.email}</p>
                <p className="mt-4">{userInfo.nickname}</p>
            </div>
        </div>
    ) : ( <></> )
};
