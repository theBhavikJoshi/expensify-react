import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should Remove an Expense', () => {
  const result = removeExpense({ id: '123' });
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('Should Edit an Expense', () => {
  const result = editExpense('123', { note: 'HERE IS A NOTE' });
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'HERE IS A NOTE'
    }
  });
});

test('Should Add a new expense with provided values', () => {
  const expense = {
    description: 'DESC',
    note: 'NOTE1',
    amount: 1212289,
    createdAt: 273638329
  };
  const result = addExpense(expense);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: 'DESC',
      note: 'NOTE1',
      amount: 1212289,
      createdAt: 273638329
    }
  });
});

test('Should Add a new expense with default values', () => {
  const result = addExpense();
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});