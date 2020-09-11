import React from 'react'

function Welcome() {
    return (
        
        <div className="flex justify-center items-center mt-5">
            <div className="rounded overflow-hidden shadow-lg">
                <div className="flex justify-around bg-red-500 p-2 font-sans">
                    <span className="text-6xl text-white"><h1>Not Found :(</h1></span>
                </div>
                <div className="px-6 pt-2 text-center">
                    <img src="/imgs/404.png" height="250" />
                </div>

            </div>
        </div>
        
    )
}

export default Welcome
