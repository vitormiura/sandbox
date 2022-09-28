import React, { ReactFragment } from "react";

export default function Layout({ children }:{ children: React.ReactNode }){
    return(
        <div>
            <nav>
                <li>Home</li>
            </nav>
            {children}
        </div>
    )
}