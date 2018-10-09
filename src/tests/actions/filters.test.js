import moment from 'moment';
import { sortByAmount, setTextFilter, setEndDate, setStartDate, sortByDate } from '../../actions/filters';

test('should set start date', () => {
  const result = setStartDate(moment(0));
  expect(result).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should set end date', () => {
  const result = setEndDate(moment(0));
  expect(result).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should sort by amount', () => {
  const result = sortByAmount();
  expect(result).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
});

test('should sort by date', () => {
  const result = sortByDate();
  expect(result).toEqual({
    type: 'SORT_BY_DATE'
  })
});

test('should set text filter with provided text', () => {
  const result = setTextFilter('ABC');
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'ABC'
  })
});

test('should set text filter with default text', () => {
  const result = setTextFilter();
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});