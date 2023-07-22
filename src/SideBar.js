const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-bg text-text shadow-lg">

            <img src="whhome.png" alt="whhome.png"/>
            <img src="whuser.png" alt="whuser.png"/>
            <img src="whserver.png" alt="whserver.png"/>
        </div>
    );
};


const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);


export default SideBar;