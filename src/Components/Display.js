const Display = ({displayData, backBtn}) => {
    console.log(displayData)
    return (
        <>
            {
                displayData.map(
                    ({name, age, salary}, index) => <h1 key={index}>{name} || {age} || {salary}</h1>
                )
            }
            <button onClick={backBtn}>BACK</button>
        </>
    )
}

export default Display;