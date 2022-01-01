export const timeDiff = (created) => {
    let timestamp = new Date(created).getTime();
    let now = Date.now();
    let d_sec = (now - timestamp) / 1000;
    let d_min = d_sec / 60;
    let d_hour = d_min / 60;
    let d_day = d_hour / 24;
    if (d_day > 7) {
        let seoul = new Date(timestamp + 1000 * 60 * 60 * 9);
        return `${seoul.getMonth() + 1}ㅇ${seoul.getDate()}ㅇ`;
    } else if (Math.floor(d_day) > 0) {
        return `${d_day.toFixed()}ㅇ ㅈ`;
    } else if (Math.floor(d_hour) > 0) {
        return `${d_hour.toFixed()}ㅅㄱ ㅈ`;
    } else if (Math.floor(d_min) > 0) {
        return `${d_min.toFixed()}ㅂ ㅈ`;
    } else {
        return `${d_sec.toFixed()}ㅊ ㅈ`;
    }
};
