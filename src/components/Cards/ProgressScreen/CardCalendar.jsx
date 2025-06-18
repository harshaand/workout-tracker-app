import React from 'react'
import { format, compareAsc } from 'date-fns';
import { ActivityCalendar, } from 'react-activity-calendar'

function CardCalendar({ dates }) {
    /*  EXPLANATION
        1. calendarDates: The library requires dates be in the following format. 
        Will be storing these dates in calendarDates.
        [{ date: "2021-02-20", count: 16, level: 3 },
         { date: "2021-02-20", count: 16, level: 3 },...]
    */
    if (dates === undefined || dates === null) return ''

    let calendarDates = []
    const allDates = dates
    allDates.sort(compareAsc)

    allDates.forEach(date => {
        const dateKey = format(date, 'yyyy-MM-dd');

        let calendarDate = calendarDates.find(dateData => dateData.date === dateKey)

        if (calendarDate === undefined || calendarDate === null) {
            calendarDate = {
                date: dateKey,
                count: 1,
                level: 1
            };
            calendarDates.push(calendarDate)
        }
        else {
            const newCount = calendarDate.count + 1;
            const newLevel = calendarDate.level + 1;
            calendarDates = calendarDates.map(dateObj => {
                if (dateObj.date === dateKey) {
                    return {
                        date: dateKey,
                        count: newCount,
                        level: newLevel
                    }
                }
                else return dateData
            })
        }
    });

    const calendarTheme = {
        light: ['hsl(0, 0%, 92%)', 'hsl(206, 66%, 48%)'],
    }
    const calendarLabels = {
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',],
        totalCount: '{{count}} Workouts Completed',
        legend: {
            less: 'Less',
            more: 'More',
        }
    }
    return (
        <div className='card-calendar'>
            <h4>Calendar</h4>
            <ActivityCalendar data={calendarDates} maxLevel={1}
                fontSize={14} theme={calendarTheme} colorScheme="light" hideColorLegend
                blockSize={16} blockRadius={2} blockMargin={4}
                weekStart={1} labels={calendarLabels} showWeekdayLabels={['Mon', 'Wed', 'Fri', 'Sun']}
            />
        </div>
    )
}

export default CardCalendar
