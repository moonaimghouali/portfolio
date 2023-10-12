export const ageCalculator = (birthday) =>{
    let date_1 = new Date(birthday);
    let date_2 = new Date();
    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    let percentage = (TotalDays/366).toFixed(4).toString().split('.')[1]
    return percentage
} 