import React from 'react'

const Container = ({ children }) => {
    return (
        <main className="h-screen bg-gray-900 text-white">
            <div className="container">
                {children}
            </div>
        </main>
    )
}

export default Container
