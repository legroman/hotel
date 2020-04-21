import React from "react";
import Loader from 'react-loader-spinner'

export default function Loading() {
    return(
        <div className="loading">
            <Loader
                type="ThreeDots"
                color="#AF9A7D"
                height={100}
                width={100}
                // timeout={3000} //3 secs

            />
        </div>
    )
}