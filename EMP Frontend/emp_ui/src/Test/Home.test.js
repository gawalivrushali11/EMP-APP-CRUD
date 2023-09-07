import { render, screen,getAllByRole, fireEvent } from '@testing-library/react';
import Home from '../Components/Home';
import '@testing-library/jest-dom/extend-expect';

test.skip("Render table", () => {
    render(<Home />);
     const coloumn1 = screen.getByText('Display All Employee');
     const tbl=screen.getByRole('table');

    expect(tbl).toBeInTheDocument();
    expect(coloumn1).toBeInTheDocument();

  });

test('clicking the delete button ',()=>{
  const onDeleteMock=jest.fn();
  render(<Home onDelete={onDeleteMock}/>)

  const delbtn=screen.getByText('Delete');

  fireEvent.click(delbtn);
  expect(onDeleteMock).toHaveBeenCalled();
})