// Composition
// import {React} from "react";

function DashboardLayout({children}){
    return <div className="layout">{children}</div>
}

function AccountSidebar({children}){
    return <aside className="sidebar">{children}</aside>
}

function UserInfoPanel({children}){
    return <aside className="user-panel">{children}</aside>
}

function ProfileAvatar({ user }){
    return <img src={`/${user.name}.png`} alt={user.name} className="avatar"/>
}

export function CompositionDemo(params){
    const user = {name:"Chaithanya"};
    return(
        <div>
            <h3>Component Solution</h3>
            <DashboardLayout>
                <AccountSidebar>
                    <UserInfoPanel>
                        <ProfileAvatar user={user}/>
                    </UserInfoPanel>
                </AccountSidebar>
            </DashboardLayout>
        </div>
    )
}