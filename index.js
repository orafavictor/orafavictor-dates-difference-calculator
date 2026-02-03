function calculateTimeDifference(targetDate) {
    const currentDate = new Date();
    const futureDate = new Date(targetDate);

    if (isNaN(targetDate)){
        throw new Error("Invalid date format");
    }
}