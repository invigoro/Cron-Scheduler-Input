//import './language_settings';
import {getCronInputs} from "./language_settings/language_settings.js";

; (function ($) {
    //"use strict";

    // function getCronInputs(language) {
    //     var cronInputs = {};
    //     var optsText = {};
    //     switch (language) {
    //         case 'en_EN': cronInputs = {
    //             period: '<div class="cron-select-period"><label></label><select class="cron-period-select"></select></div>',
    //             startTime: '<div class="cron-input cron-start-time">Start time <select class="cron-clock-hour"></select>:<select class="cron-clock-minute"></select>:<select class="cron-clock-second"></select></div>',
    //             container: '<div class="cron-input"></div>',
    //             seconds: {
    //                 tag: 'cron-seconds',
    //                 inputs: ['<p>Every <select class="cron-seconds-select"></select> seconds(s)</p>']
    //             },
    //             minutes: {
    //                 tag: 'cron-minutes',
    //                 inputs: ['<p>Every <select class="cron-minutes-select"></select> minutes(s)</p>']
    //             },
    //             hourly: {
    //                 tag: 'cron-hourly',
    //                 inputs: ['<p><input type="radio" name="hourlyType" value="every"> Every <select class="cron-hourly-select"></select> hour(s)</p>',
    //                     '<p><input type="radio" name="hourlyType" value="clock"> Every day at <select class="cron-hourly-hour"></select>:<select class="cron-hourly-minute"></select>:<select class="cron-hourly-second"></select></p>']
    //             },
    //             daily: {
    //                 tag: 'cron-daily',
    //                 inputs: ['<p><input type="radio" name="dailyType" value="every"> Every <select class="cron-daily-select"></select> day(s)</p>',
    //                     '<p><input type="radio" name="dailyType" value="clock"> Every week day</p>']
    //             },
    //             weekly: {
    //                 tag: 'cron-weekly',
    //                 inputs: ['<p><input type="checkbox" name="dayOfWeekMon"> Monday  <input type="checkbox" name="dayOfWeekTue"> Tuesday  ' +
    //                     '<input type="checkbox" name="dayOfWeekWed"> Wednesday  <input type="checkbox" name="dayOfWeekThu"> Thursday</p>',
    //                 '<p><input type="checkbox" name="dayOfWeekFri"> Friday  <input type="checkbox" name="dayOfWeekSat"> Saturday  ' +
    //                 '<input type="checkbox" name="dayOfWeekSun"> Sunday</p>']
    //             },
    //             monthly: {
    //                 tag: 'cron-monthly',
    //                 inputs: ['<p><input type="radio" name="monthlyType" value="byDay"> Day <select class="cron-monthly-day"></select> of every <select class="cron-monthly-month"></select> month(s)</p>',
    //                     '<p><input type="radio" name="monthlyType" value="byWeek"> The <select class="cron-monthly-nth-day"></select> ' +
    //                     '<select class="cron-monthly-day-of-week"></select> of every <select class="cron-monthly-month-by-week"></select> month(s)</p>']
    //             },
    //             yearly: {
    //                 tag: 'cron-yearly',
    //                 inputs: ['<p><input type="radio" name="yearlyType" value="byDay"> Every <select class="cron-yearly-month"></select> <select class="cron-yearly-day"></select></p>',
    //                     '<p><input type="radio" name="yearlyType" value="byWeek"> The <select class="cron-yearly-nth-day"></select> ' +
    //                     '<select class="cron-yearly-day-of-week"></select> of <select class="cron-yearly-month-by-week"></select></p>']
    //             }
    //         };

    //             optsText = {
    //                 periodOpts: ["Seconds", "Minutes", "Hourly", "Daily", "Weekly", "Monthly", "Yearly"],
    //                 monthOpts: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    //                 nthWeekOpts: ["First", "Second", "Third", "Fourth"],
    //                 dayOfWeekOpts: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    //             };
    //             break;
    //         case 'zh_CN': cronInputs = {
    //             period: '<div class="cron-select-period"><label></label><select class="cron-period-select"></select></div>',
    //             startTime: '<div class="cron-input cron-start-time">开始时间 <select class="cron-clock-hour"></select>:<select class="cron-clock-minute"></select>:<select class="cron-clock-second"></select></div>',
    //             container: '<div class="cron-input"></div>',
    //             seconds: {
    //                 tag: 'cron-seconds',
    //                 inputs: ['<p>每隔 <select class="cron-seconds-select"></select> 秒</p>']
    //             },
    //             minutes: {
    //                 tag: 'cron-minutes',
    //                 inputs: ['<p>每隔 <select class="cron-minutes-select"></select> 分钟</p>']
    //             },
    //             hourly: {
    //                 tag: 'cron-hourly',
    //                 inputs: ['<p><input type="radio" name="hourlyType" value="every">每隔 <select class="cron-hourly-select"></select> 小时</p>',
    //                     '<p><input type="radio" name="hourlyType" value="clock">每天 <select class="cron-hourly-hour"></select>:<select class="cron-hourly-minute"></select>:<select class="cron-hourly-second"></select></p>']
    //             },
    //             daily: {
    //                 tag: 'cron-daily',
    //                 inputs: ['<p><input type="radio" name="dailyType" value="every">每隔 <select class="cron-daily-select"></select> 天</p>',
    //                     '<p><input type="radio" name="dailyType" value="clock">每个工作日</p>']
    //             },
    //             weekly: {
    //                 tag: 'cron-weekly',
    //                 inputs: ['<p><input type="checkbox" name="dayOfWeekMon"> 周一 <input type="checkbox" name="dayOfWeekTue"> 周二 ' +
    //                     '<input type="checkbox" name="dayOfWeekWed"> 周三 <input type="checkbox" name="dayOfWeekThu"> 周四 </p>',
    //                 '<p><input type="checkbox" name="dayOfWeekFri"> 周五 <input type="checkbox" name="dayOfWeekSat"> 周六 ' +
    //                 '<input type="checkbox" name="dayOfWeekSun"> 周日 </p>']
    //             },
    //             monthly: {
    //                 tag: 'cron-monthly',
    //                 inputs: ['<p><input type="radio" name="monthlyType" value="byDay">每 <select class="cron-monthly-month"></select> 个月的第 <select class="cron-monthly-day"></select>天</p>',
    //                     '<p><input type="radio" name="monthlyType" value="byWeek">每 <select class="cron-monthly-month-by-week"></select> 个月的 <select class="cron-monthly-nth-day"></select> ' +
    //                     '<select class="cron-monthly-day-of-week"></select></p>']
    //             },
    //             yearly: {
    //                 tag: 'cron-yearly',
    //                 inputs: ['<p><input type="radio" name="yearlyType" value="byDay">每年 <select class="cron-yearly-month"></select><select class="cron-yearly-day"></select>日</p>',
    //                     '<p><input type="radio" name="yearlyType" value="byWeek">每年 <select class="cron-yearly-month-by-week"></select> 的 <select class="cron-yearly-nth-day"></select> ' +
    //                     '<select class="cron-yearly-day-of-week"></select></p>']
    //             }
    //         };
    //             optsText = {
    //                 periodOpts: ['秒', '分', '小时', '天', '周', '月', '年'],
    //                 monthOpts: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    //                 nthWeekOpts: ['第一个', '第二个', '第三个', '第四个'],
    //                 dayOfWeekOpts: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    //             };
    //             break;
    //     }
    //     return [cronInputs, optsText];
    // }



    var cronInputs = $.fn.cronInputs = {};
    var optsText = $.fn.optsText = {};

    // Convert an array of values to options to append to select input
    function arrayToOptions(opts, values, start = 0, interval = 1) {
        var inputOpts = '';
        for (var i = start; i < opts.length; i += interval) {
            var value = opts[i];
            if (values != null) value = values[i];
            inputOpts += "<option value='" + value + "'>" + opts[i] + "</option>\n";

        }
        return inputOpts;
    }

    // Convert an integer range to options to append to select input
    function rangeToOptions(start, end, isClock = false, interval = 1) {
        var inputOpts = '', label;
        for (var i = start; i <= end; i += interval) {
            if (isClock && i < 10) label = "0" + i;
            else label = i;
            inputOpts += "<option value='" + i + "'>" + label + "</option>\n";
        }
        return inputOpts;
    }

    // Add input elements to UI as defined in cronInputs
    function addInputElements($baseEl, inputObj, onFinish) {
        $(cronInputs.container).addClass(inputObj.tag).appendTo($baseEl);
        $baseEl.children("." + inputObj.tag).append(inputObj.inputs);
        if (typeof onFinish === "function") onFinish();
    }

    var eventHandlers = {
        periodSelect: function () {
            var period = ($(this).val());
            var $selector = $(this).parent();
            $selector.siblings('div.cron-input').hide();
            $selector.siblings().find("select option").removeAttr("selected");
            $selector.siblings().find("select option:first").attr("selected", "selected");
            $selector.siblings('div.cron-start-time').show();
            $selector.siblings('div.cron-start-time').children("select.cron-clock-hour").val('12');
            switch (period) {
                case 'Seconds':
                    $selector.siblings('div.cron-seconds')
                        .show()
                        .find("select.cron-seconds-select").val('1');
                    $selector.siblings('div.cron-start-time').hide();
                    break;
                case 'Minutes':
                    $selector.siblings('div.cron-minutes')
                        .show()
                        .find("select.cron-minutes-select").val('1');
                    $selector.siblings('div.cron-start-time').hide();
                    break;
                case 'Hourly':
                    var $hourlyEl = $selector.siblings('div.cron-hourly');
                    $hourlyEl.show()
                        .find("input[name=hourlyType][value=every]").prop('checked', true);
                    $hourlyEl.find("select.cron-hourly-hour").val('12');
                    $selector.siblings('div.cron-start-time').hide();
                    break;
                case 'Daily':
                    var $dailyEl = $selector.siblings('div.cron-daily');
                    $dailyEl.show()
                        .find("input[name=dailyType][value=every]").prop('checked', true);
                    break;
                case 'Weekly':
                    $selector.siblings('div.cron-weekly')
                        .show()
                        .find("input[type=checkbox]").prop('checked', false);
                    break;
                case 'Monthly':
                    var $monthlyEl = $selector.siblings('div.cron-monthly');
                    $monthlyEl.show()
                        .find("input[name=monthlyType][value=byDay]").prop('checked', true);
                    break;
                case 'Yearly':
                    var $yearlyEl = $selector.siblings('div.cron-yearly');
                    $yearlyEl.show()
                        .find("input[name=yearlyType][value=byDay]").prop('checked', true);
                    break;
            }
        }
    };

    // Public functions
    $.cronBuilder = function (el, options) {
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Reverse reference to the DOM object
        base.$el.data('cronBuilder', base);

        // Initialization
        base.init = function () {

            base.options = $.extend({}, $.cronBuilder.defaultOptions, options);

            var language_settings = getCronInputs(base.options.language);
            cronInputs = language_settings[0];
            optsText = language_settings[1];


            var disabled = base.options.disabledPeriods;
            disabled = [
                disabled.seconds,
                disabled.minutes,
                disabled.hours,
                disabled.days,
                disabled.weeks,
                disabled.months,
                disabled.years
            ];

            var periodValsArray = ["Seconds", "Minutes", "Hourly", "Daily", "Weekly", "Monthly", "Yearly"];
            var periodOpts = [];
            var periodVals = [];

            for (var i = 0; i < disabled.length; i++) {
                if (!(disabled[i])) {
                    periodOpts.push(optsText.periodOpts[i]);
                    periodVals.push(periodValsArray[i]);
                }
            }

            var periodOpts = arrayToOptions(periodOpts, periodVals);

            var si = base.options.secondInterval;
            var mi = base.options.minuteInterval;
            var hi = base.options.hourInterval;
            var di = base.options.dayInterval;
            var wi = base.options.weekInterval;
            var moi = base.options.monthInterval;
            var yi = base.options.yearInterval;
            // var secondOpts=rangeToOptions(1, 60);
            // var minuteOpts=rangeToOptions(1, 60);
            // var hourOpts=rangeToOptions(1, 24);
            // var dayOpts=rangeToOptions(1, 100);
            // var secondClockOpts=rangeToOptions(0, 59, true);
            // var minuteClockOpts=rangeToOptions(0, 59, true);
            // var hourClockOpts=rangeToOptions(0, 23, true);
            // var dayInMonthOpts=rangeToOptions(1, 31);

            var secondOpts = rangeToOptions(si, 59, false, si);
            var minuteOpts = rangeToOptions(mi, 59, false, mi);
            var hourOpts = rangeToOptions(hi, 23, false, hi);
            var dayOpts = rangeToOptions(di, 100, false, di);
            var secondClockOpts = rangeToOptions(0, 59, true, si);
            var minuteClockOpts = rangeToOptions(0, 59, true, mi);
            var hourClockOpts = rangeToOptions(0, 23, true, hi);
            var dayInMonthOpts = rangeToOptions(1, 31, false, di);
            var monthOpts = arrayToOptions(optsText.monthOpts,
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
            var monthNumOpts = rangeToOptions(moi, 11, false, moi);
            var nthWeekOpts = arrayToOptions(optsText.nthWeekOpts, [1, 2, 3, 4], 0, wi);
            var dayOfWeekOpts = arrayToOptions(optsText.dayOfWeekOpts,
                ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"], 0, di);

            base.$el.append(cronInputs.period);
            base.$el.find("div.cron-select-period label").text(base.options.selectorLabel);
            base.$el.find("select.cron-period-select")
                .append(periodOpts)
                .bind("change", eventHandlers.periodSelect);

            addInputElements(base.$el, cronInputs.seconds, function () {
                base.$el.find("select.cron-seconds-select").append(secondOpts);
            });

            addInputElements(base.$el, cronInputs.minutes,  function () {
                base.$el.find("select.cron-minutes-select").append(minuteOpts);
            });

            addInputElements(base.$el, cronInputs.hourly, function () {
                base.$el.find("select.cron-hourly-select").append(hourOpts);
                base.$el.find("select.cron-hourly-hour").append(hourClockOpts);
                base.$el.find("select.cron-hourly-minute").append(minuteClockOpts);
                base.$el.find("select.cron-hourly-second").append(secondClockOpts);
            });

            addInputElements(base.$el, cronInputs.daily, function () {
                base.$el.find("select.cron-daily-select").append(dayOpts);
            });

            addInputElements(base.$el, cronInputs.weekly);

            addInputElements(base.$el, cronInputs.monthly, function () {
                base.$el.find("select.cron-monthly-day").append(dayInMonthOpts);
                base.$el.find("select.cron-monthly-month").append(monthNumOpts);
                base.$el.find("select.cron-monthly-nth-day").append(nthWeekOpts);
                base.$el.find("select.cron-monthly-day-of-week").append(dayOfWeekOpts);
                base.$el.find("select.cron-monthly-month-by-week").append(monthNumOpts);
            });

            addInputElements(base.$el, cronInputs.yearly, function () {
                base.$el.find("select.cron-yearly-month").append(monthOpts);
                base.$el.find("select.cron-yearly-day").append(dayInMonthOpts);
                base.$el.find("select.cron-yearly-nth-day").append(nthWeekOpts);
                base.$el.find("select.cron-yearly-day-of-week").append(dayOfWeekOpts);
                base.$el.find("select.cron-yearly-month-by-week").append(monthOpts);
            });


            base.$el.append(cronInputs.startTime);
            base.$el.find("select.cron-clock-hour").append(hourClockOpts);
            base.$el.find("select.cron-clock-minute").append(minuteClockOpts);
            base.$el.find("select.cron-clock-second").append(secondClockOpts);

            if (typeof base.options.onChange === "function") {
                base.$el.find("select, input").change(function () {
                    base.options.onChange(base.getExpression());
                });
            }

            base.$el.find("select.cron-period-select")
                .triggerHandler("change");

            base.setExpression(base.options.initial);

        }

        base.setExpression = function (expression) {
            var expr = expression.split(" ");
            var sec = expr[0];
            var min = expr[1];
            var hr = expr[2];
            var dy = expr[3];
            var mo = expr[4];
            var we = expr[5];
            var yr = expr[6];
            if ((we.match(/^[A-Z]{3}\#[0-5]{1}$/) && mo.match(/^[0-9]{1,2}$/))
                || (we == "?" && mo.match(/^[0-9]{1,2}$/))) //case 1: yearly tab
            {
                //switch to yearly tab
                console.log("yearly");
                base.$el.find(".cron-select-period .cron-period-select").val("Yearly").change();

            }
            else if ((we == "?" && mo.match(/^[0-9]{1,2}\/[0-9]{1,2}$/)) ||
                (we.match(/^[A-Z]{3}\#[0-5]{1}$/) && (mo == "*" || mo.match(/^[0-9]{1,2}\/[0-9]{1,2}$/)))) //case 2: monthly tab
            {
                //switch to monthly tab
                console.log("monthly");
                base.$el.find(".cron-select-period .cron-period-select").val("Monthly").change();
            }
            else if (we.match(/^[A-Z]{3}((\,[A-Z]{3})*)$/)) //case 3: weekly
            {
                //switch to weekly tab
                console.log("weekly");
                base.$el.find(".cron-select-period .cron-period-select").val("Weekly").change();
            }
            else if (we.match(/^[A-Z]{3}\-[A-Z]{3}$/) && dy.match(/^1\/[0-9]+$/)) //case 4: daily
            {
                //switch to daily tab
                console.log("daily");
                base.$el.find(".cron-select-period .cron-period-select").val("Daily").change();
            }
            else if (min == "0" && hr == "*" || hr.match(/^1\/[0-9]+$/) || hr.match(/^[0-9]{1,2}$/)) //case 5: hourly
            {
                //switch to hourly tab
                console.log("hourly");
                base.$el.find(".cron-select-period .cron-period-select").val("Hourly").change();
            }
            else if (sec == "0" || min.match(/^1\/[0-9]+$/)) //case 6: minute
            {
                //switch to minute tab
                console.log("minutes");
                base.$el.find(".cron-select-period .cron-period-select").val("Minutes").change();
            }
            else if (sec.match(/^1\/[0-9]+$/) || sec == "*") //case 7: seconds
            {
                //switch to seconds tab
                console.log("seconds");
                base.$el.find(".cron-select-period .cron-period-select").val("Seconds").change();
            }
        }

        base.getExpression = function () {
            //var b = c.data("block");
            var sec = 0; // ignoring seconds by default
            var year = "*"; // every year by default
            var dow = "?";
            var month = "*", dom = "*";
            var sec = base.$el.find("select.cron-clock-second").val();
            var min = base.$el.find("select.cron-clock-minute").val();
            var hour = base.$el.find("select.cron-clock-hour").val();
            var period = base.$el.find("select.cron-period-select").val();
            switch (period) {
                case 'Seconds':
                    var $selector = base.$el.find("div.cron-seconds");
                    var nsec = $selector.find("select.cron-seconds-select").val();
                    if (nsec > 1) sec = "0/" + nsec;
                    else sec = "*";
                    min = "*";
                    hour = "*";
                    break;

                case 'Minutes':
                    var $selector = base.$el.find("div.cron-minutes");
                    var nmin = $selector.find("select.cron-minutes-select").val();
                    if (nmin > 1) min = "0/" + nmin;
                    else min = "*";
                    hour = "*";
                    break;

                case 'Hourly':
                    var $selector = base.$el.find("div.cron-hourly");
                    if ($selector.find("input[name=hourlyType][value=every]").is(":checked")) {
                        min = 0;
                        hour = "*";
                        var nhour = $selector.find("select.cron-hourly-select").val();
                        if (nhour > 1) hour = "0/" + nhour;
                    } else {
                        sec = $selector.find("select.cron-hourly-second").val();
                        min = $selector.find("select.cron-hourly-minute").val();
                        hour = $selector.find("select.cron-hourly-hour").val();
                    }
                    break;

                case 'Daily':
                    var $selector = base.$el.find("div.cron-daily");
                    if ($selector.find("input[name=dailyType][value=every]").is(":checked")) {
                        var ndom = $selector.find("select.cron-daily-select").val();
                        if (ndom > 1) dom = "1/" + ndom;
                    } else {
                        dom = "?";
                        dow = "MON-FRI";
                    }
                    break;

                case 'Weekly':
                    var $selector = base.$el.find("div.cron-weekly");
                    var ndow = [];
                    if ($selector.find("input[name=dayOfWeekMon]").is(":checked"))
                        ndow.push("MON");
                    if ($selector.find("input[name=dayOfWeekTue]").is(":checked"))
                        ndow.push("TUE");
                    if ($selector.find("input[name=dayOfWeekWed]").is(":checked"))
                        ndow.push("WED");
                    if ($selector.find("input[name=dayOfWeekThu]").is(":checked"))
                        ndow.push("THU");
                    if ($selector.find("input[name=dayOfWeekFri]").is(":checked"))
                        ndow.push("FRI");
                    if ($selector.find("input[name=dayOfWeekSat]").is(":checked"))
                        ndow.push("SAT");
                    if ($selector.find("input[name=dayOfWeekSun]").is(":checked"))
                        ndow.push("SUN");
                    dow = "*";
                    dom = "?";
                    if (ndow.length < 7 && ndow.length > 0) dow = ndow.join(",");
                    break;

                case 'Monthly':
                    var $selector = base.$el.find("div.cron-monthly");
                    var nmonth;
                    if ($selector.find("input[name=monthlyType][value=byDay]").is(":checked")) {
                        month = "*";
                        nmonth = $selector.find("select.cron-monthly-month").val();
                        dom = $selector.find("select.cron-monthly-day").val();
                        dow = "?";
                    } else {
                        dow = $selector.find("select.cron-monthly-day-of-week").val()
                            + "#" + $selector.find("select.cron-monthly-nth-day").val();
                        nmonth = $selector.find("select.cron-monthly-month-by-week").val();
                        dom = "?";
                    }
                    if (nmonth > 1) month = "1/" + nmonth;
                    break;

                case 'Yearly':
                    var $selector = base.$el.find("div.cron-yearly");
                    if ($selector.find("input[name=yearlyType][value=byDay]").is(":checked")) {
                        dom = $selector.find("select.cron-yearly-day").val();
                        month = $selector.find("select.cron-yearly-month").val();
                        dow = "?";
                    } else {
                        dow = $selector.find("select.cron-yearly-day-of-week").val()
                            + "#" + $selector.find("select.cron-yearly-nth-day").val();
                        month = $selector.find("select.cron-yearly-month-by-week").val();
                        dom = "?";
                    }
                    break;

                default:
                    break;
            }
            return [sec, min, hour, dom, month, dow, year].join(" ");
        };

        base.init();
    };

    // Plugin default options
    $.cronBuilder.defaultOptions = {
        selectorLabel: "Select period: ",
        language: "en_EN",
        secondInterval: 1,
        minuteInterval: 1,
        hourInterval: 1,
        dayInterval: 1,
        weekInterval: 1,
        monthInterval: 1,
        yearInterval: 1,
        initial: "0 * * * * ? *",
        disabledPeriods: {
            seconds: false,
            minutes: false,
            hours: false,
            days: false,
            weeks: false,
            months: false,
            years: false,
        }
    };

    // Plugin definition
    $.fn.cronBuilder = function (options) {
        return this.each(function () {
            (new $.cronBuilder(this, options));
        });
    };

    exports.cronBuilder = $.fn.cronBuilder;

    exports.printMsg = function printMsg() {
        console.log("You have successfully tested loading jquery-cron-input-invigoro.");
    }

}(jQuery));
