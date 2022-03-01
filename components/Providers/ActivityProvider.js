import React from "react";
const ActivityContext = React.createContext({
    'activity': true,
});

const ActivityProvider = ({ children }) => {
    const [activity, setActivity] = React.useState(true);
    return (
        <ActivityContext.Provider value={{
            activity,
            setActivity
        }}>
            {children}
        </ActivityContext.Provider>
    );
}
export { ActivityContext, ActivityProvider };
