
export const Presentation_profile = ({name}, {showName}, toggleShowName) => {
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
            </div>
        </>
    );
}