/**
 * Created by qianzheng on 17-4-25.
 */
function getCronInputs(language) {
    var cronInputs = {};
    var optsText = {};
    switch(language){
    case 'en_EN': cronInputs = {
        period: '<div class="cron-select-period"><label></label><select class="cron-period-select"></select></div>',
        startTime: '<div class="cron-input cron-start-time">Start time <select class="cron-clock-hour"></select>:<select class="cron-clock-minute"></select>:<select class="cron-clock-second"></select></div>',
        container: '<div class="cron-input"></div>',
        seconds: {
            tag: 'cron-seconds',
            inputs: ['<p>Every <select class="cron-seconds-select"></select> seconds(s)</p>']
        },
        minutes: {
            tag: 'cron-minutes',
            inputs: ['<p>Every <select class="cron-minutes-select"></select> minutes(s)</p>']
        },
        hourly: {
            tag: 'cron-hourly',
            inputs: ['<p><input type="radio" name="hourlyType" value="every"> Every <select class="cron-hourly-select"></select> hour(s)</p>',
                '<p><input type="radio" name="hourlyType" value="clock"> Every day at <select class="cron-hourly-hour"></select>:<select class="cron-hourly-minute"></select>:<select class="cron-hourly-second"></select></p>']
        },
        daily: {
            tag: 'cron-daily',
            inputs: ['<p><input type="radio" name="dailyType" value="every"> Every <select class="cron-daily-select"></select> day(s)</p>',
                '<p><input type="radio" name="dailyType" value="clock"> Every week day</p>']
        },
        weekly: {
            tag: 'cron-weekly',
            inputs: ['<p><input type="checkbox" name="dayOfWeekMon"> Monday  <input type="checkbox" name="dayOfWeekTue"> Tuesday  ' +
                '<input type="checkbox" name="dayOfWeekWed"> Wednesday  <input type="checkbox" name="dayOfWeekThu"> Thursday</p>',
            '<p><input type="checkbox" name="dayOfWeekFri"> Friday  <input type="checkbox" name="dayOfWeekSat"> Saturday  ' +
            '<input type="checkbox" name="dayOfWeekSun"> Sunday</p>']
        },
        monthly: {
            tag: 'cron-monthly',
            inputs: ['<p><input type="radio" name="monthlyType" value="byDay"> Day <select class="cron-monthly-day"></select> of every <select class="cron-monthly-month"></select> month(s)</p>',
                '<p><input type="radio" name="monthlyType" value="byWeek"> The <select class="cron-monthly-nth-day"></select> ' +
                '<select class="cron-monthly-day-of-week"></select> of every <select class="cron-monthly-month-by-week"></select> month(s)</p>']
        },
        yearly: {
            tag: 'cron-yearly',
            inputs: ['<p><input type="radio" name="yearlyType" value="byDay"> Every <select class="cron-yearly-month"></select> <select class="cron-yearly-day"></select></p>',
                '<p><input type="radio" name="yearlyType" value="byWeek"> The <select class="cron-yearly-nth-day"></select> ' +
                '<select class="cron-yearly-day-of-week"></select> of <select class="cron-yearly-month-by-week"></select></p>']
        }
    };

    optsText = {
        periodOpts: ["Seconds", "Minutes", "Hourly", "Daily", "Weekly", "Monthly", "Yearly"],
        monthOpts: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        nthWeekOpts: ["First", "Second", "Third", "Fourth"],
        dayOfWeekOpts: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    };
    break;
    case 'zh_CN': cronInputs = {
        period: '<div class="cron-select-period"><label></label><select class="cron-period-select"></select></div>',
        startTime: '<div class="cron-input cron-start-time">开始时间 <select class="cron-clock-hour"></select>:<select class="cron-clock-minute"></select>:<select class="cron-clock-second"></select></div>',
        container: '<div class="cron-input"></div>',
        seconds: {
            tag: 'cron-seconds',
            inputs: [ '<p>每隔 <select class="cron-seconds-select"></select> 秒</p>' ]
        },
        minutes: {
            tag: 'cron-minutes',
            inputs: [ '<p>每隔 <select class="cron-minutes-select"></select> 分钟</p>' ]
        },
        hourly: {
            tag: 'cron-hourly',
            inputs: [ '<p><input type="radio" name="hourlyType" value="every">每隔 <select class="cron-hourly-select"></select> 小时</p>',
                '<p><input type="radio" name="hourlyType" value="clock">每天 <select class="cron-hourly-hour"></select>:<select class="cron-hourly-minute"></select>:<select class="cron-hourly-second"></select></p>']
        },
        daily: {
            tag: 'cron-daily',
            inputs: [ '<p><input type="radio" name="dailyType" value="every">每隔 <select class="cron-daily-select"></select> 天</p>',
                '<p><input type="radio" name="dailyType" value="clock">每个工作日</p>']
        },
        weekly: {
            tag: 'cron-weekly',
            inputs: [ '<p><input type="checkbox" name="dayOfWeekMon"> 周一 <input type="checkbox" name="dayOfWeekTue"> 周二 '+
            '<input type="checkbox" name="dayOfWeekWed"> 周三 <input type="checkbox" name="dayOfWeekThu"> 周四 </p>',
                '<p><input type="checkbox" name="dayOfWeekFri"> 周五 <input type="checkbox" name="dayOfWeekSat"> 周六 '+
                '<input type="checkbox" name="dayOfWeekSun"> 周日 </p>' ]
        },
        monthly: {
            tag: 'cron-monthly',
            inputs: [ '<p><input type="radio" name="monthlyType" value="byDay">每 <select class="cron-monthly-month"></select> 个月的第 <select class="cron-monthly-day"></select>天</p>',
                '<p><input type="radio" name="monthlyType" value="byWeek">每 <select class="cron-monthly-month-by-week"></select> 个月的 <select class="cron-monthly-nth-day"></select> ' +
                '<select class="cron-monthly-day-of-week"></select></p>']
        },
        yearly: {
            tag: 'cron-yearly',
            inputs: [ '<p><input type="radio" name="yearlyType" value="byDay">每年 <select class="cron-yearly-month"></select><select class="cron-yearly-day"></select>日</p>',
                '<p><input type="radio" name="yearlyType" value="byWeek">每年 <select class="cron-yearly-month-by-week"></select> 的 <select class="cron-yearly-nth-day"></select> ' +
                '<select class="cron-yearly-day-of-week"></select></p>']
        }
    };
    optsText = {
        periodOpts:    ['秒', '分', '小时', '天', '周', '月', '年'],
        monthOpts:     ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        nthWeekOpts:   ['第一个', '第二个', '第三个', '第四个'],
        dayOfWeekOpts: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    };
    break;
    }
    return [cronInputs, optsText];
}