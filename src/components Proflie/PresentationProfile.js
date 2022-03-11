
export const PresentationProfile = ({name, showName, toggleShowName}) => {
    return (
        <>
            <h1>Profile</h1>
            <div>
                <input
                    type="checkbox"
                    checked={showName}
                    value={showName}
                    onChange={toggleShowName}
                />Show Name
                {showName && <p>{name}</p>}
            </div>
        </>
    );
}