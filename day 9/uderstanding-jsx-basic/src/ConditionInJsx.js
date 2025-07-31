function ConditionInJsx() {
    let age = 50;

    let day = 5;
    let dayName = "";
    switch (day) {
        case 1:
            dayName = "monday";
            break;
        case 2:
            dayName = "tuesday";
            break;
        case 3:
            dayName = "wednesday";
            break;
        case 4:
            dayName = "thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid Day";
    }

    return (
        <div>
            <h1 className="text-2xl mt-3">your age category is {age <18 ? "child" : "adult"}</h1>
            <h1 className="text-2xl mt-3">your day name is {dayName}</h1>
        </div>
    );
}

export { ConditionInJsx };