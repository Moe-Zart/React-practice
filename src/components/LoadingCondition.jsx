import React from 'react';

const LoadingCondition = (props) => {
    if (props.isLoading === true){
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    return (
        <div>
            <p> You are Currently Logged In</p>  
        </div>
    );
}

export default LoadingCondition;
