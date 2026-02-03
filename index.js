function calculateTimeDifference(targetDate) {
    const currentDate = new Date();
    const futureDate = new Date(targetDate);

    if (isNaN(targetDate)){
        throw new Error("Invalid date format");
    }

    if (futureDate <= currentDate) {
        return {error: 'Date provided is in the past'};
    }

    const differenceInMillis = futureDate - currentDate;

    const differenceInMinutes = Math.floor(differenceInMillis / (1000 * 60));
    const differenceInHours = Math.floor(differenceInMillis / (1000 * 60 * 60));
    const days = Math.floor(differenceInMinutes / (60 * 24));
    const hours = Math.floor(differenceInMinutes % (60 * 24) / 60);
    const minutes = Math.floor(differenceInMinutes % 60);
    const seconds = Math.floor((differenceInMillis % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    }
}

module.exports = {calculateTimeDifference};