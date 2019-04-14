import React, { useState } from 'react';
import moment from 'moment';
import { Modal } from 'reactstrap';
import { DateRangePicker } from "react-date-range";
import ruLocale from "react-date-range/src/locale/ru";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styles from './DateRangePicker.module.scss';

import { createStaticRanges } from 'react-date-range/src/defaultRanges';
import {
    addDays,
    subDays,
    endOfDay,
    startOfDay,
    startOfMonth,
    endOfMonth,
    addMonths,
    startOfWeek,
    startOfYear,
    endOfWeek,
    isSameDay,
    differenceInCalendarDays,
} from 'date-fns';

const defineds = {
    startOfYear: startOfYear(new Date()),
    startOfWeek: startOfWeek(new Date()),
    endOfWeek: endOfWeek(new Date()),
    startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
    endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
    startOfToday: startOfDay(new Date()),
    endOfToday: endOfDay(new Date()),
    startOfYesterday: startOfDay(addDays(new Date(), -1)),
    endOfYesterday: endOfDay(addDays(new Date(), -1)),
    startOfMonth: startOfMonth(new Date()),
    endOfMonth: endOfMonth(new Date()),
    startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
    endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
};

const staticRanges = createStaticRanges([
    {
        label: 'Сегодня',
        range: () => ({
            startDate: defineds.startOfToday,
            endDate: defineds.endOfToday,
        })
    },
    {
        label: 'Вчера',
        range: () => ({
            startDate: defineds.startOfYesterday,
            endDate: defineds.endOfYesterday,
        }),
    },

    {
        label: 'Текущая неделя',
        range: () => ({
            startDate: defineds.startOfWeek,
            endDate: defineds.endOfWeek,
        }),
    },
    {
        label: 'Прошлая неделя',
        range: () => ({
            startDate: defineds.startOfLastWeek,
            endDate: defineds.endOfLastWeek,
        }),
    },
    {
        label: 'Текущий месяц',
        range: () => ({
            startDate: defineds.startOfMonth,
            endDate: defineds.endOfMonth,
        }),
    },
    {
        label: 'Прошлый месяц',
        range: () => ({
            startDate: defineds.startOfLastMonth,
            endDate: defineds.endOfLastMonth,
        }),
    },
    {
        label: 'Текущий год',
        range: () => ({
            startDate: defineds.startOfYear,
            endDate: new Date(),
        }),
    },
]);

const inputRanges = createStaticRanges([
    {
        label: 'Дней до сегодняшенго дня',
        range(value) {
            return {
                startDate: addDays(defineds.startOfToday, (Math.max(Number(value), 1) - 1) * -1),
                endDate: defineds.endOfToday,
            };
        },
        getCurrentValue(range) {
            if (!isSameDay(range.endDate, defineds.endOfToday)) return '-';
            if (!range.startDate) return '∞';
            return differenceInCalendarDays(defineds.endOfToday, range.startDate) + 1;
        },
    },
]);

export default ({ startDate, endDate, changeStartDate, changeEndDate }) => {

    const [isOpenDatePicker, toggleDatePickerModal] = useState(false);

    return (
        <div>
            <span>Анализ за период c </span>
            <span className={styles.DateRangePicker__date}>
                {moment(startDate).format('DD MM YYYY')}
                </span>
            по
            <span className={styles.DateRangePicker__date}>
                {moment(endDate).format('DD MM YYYY')}
                </span>
            <button
                className={styles.DateRangePicker__btnChangeDateRange}
                onClick={(e) => {
                    e.preventDefault();
                    toggleDatePickerModal(true);
                }}>Изменить
            </button>
            <Modal isOpen={isOpenDatePicker}
                   toggle={() => toggleDatePickerModal(!isOpenDatePicker)}>
                <DateRangePicker
                    locale={ruLocale}
                    ranges={[{
                        startDate: startDate,
                        endDate: endDate,
                        color: '#00acac',
                        key: 'selection',
                    }]}
                    onChange={(ranges) => {
                        const range = ranges['selection'];
                        changeStartDate(range.startDate);
                        changeEndDate(range.endDate);
                    }}
                    staticRanges={staticRanges}
                    inputRanges={inputRanges}
                />
                <div className={styles.DateRangePicker__btnContainer}>
                    <button
                        className={styles.DateRangePicker__btn}
                        onClick={() => toggleDatePickerModal(false)}>Закрыть
                    </button>
                </div>
            </Modal>
        </div>
    );
}
