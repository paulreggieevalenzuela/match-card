import { formatDate } from '@/utils/formatDate';

describe('Format date', () => {
  const mockDate = "Aug 7th";
  const formatted = formatDate('07.08.2016');
  it('Should return the correct formatted date', () => {
    expect(formatted).toEqual(mockDate);
  });
});
