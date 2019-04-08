
export const CREATED = 'CREATED';
export const IN_PROGRESS = 'IN_PROGRESS';
export const COMPLETED = 'COMPLETED';

export const STATUSES_DESCRIPTIONS =  {
    [CREATED]: {
        title: 'Заказы на звонок'
    },
    [IN_PROGRESS]:   {
        title: 'В обработке'
    },
    [COMPLETED]:  {
        title: 'Обработанные звонки'
    }
};

export const STATUSES = [CREATED, IN_PROGRESS, COMPLETED];



