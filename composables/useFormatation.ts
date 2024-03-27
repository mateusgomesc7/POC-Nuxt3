export default function () {

    // Count the number of days to my birthday and return the result
    const daysToBirthday = (birthday: string) => {
        const date = new Date(birthday);
        const today = new Date();
        const timeDiff = date.getTime() - today.getTime();
        const daysDiff = timeDiff / (1000 * 3600 * 24);
        return Math.ceil(daysDiff);
    }

    return { daysToBirthday }
}
