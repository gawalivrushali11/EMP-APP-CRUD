import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter,Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Home from './Components/Home';
import Addemp from './Components/Addemp';

// test('Render Navbar', () => {
//  render(<App/>);
//  screen.debug();
// });

test('render home',()=>
{
render(<MemoryRouter initialEntries={['/']}>
 <Home/>
</MemoryRouter>)

expect(screen.getByText('Display All Employee')).toBeInTheDocument();

})

test('render add employee',()=>
{
render(<MemoryRouter initialEntries={['/addEmployee']}>
 <Addemp/>
</MemoryRouter>)

expect(screen.getByText('Add Employee')).toBeInTheDocument();

})