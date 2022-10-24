import * as React from 'react';
import TodoProvider from './context/todoContext';
import { AddTodo, Todos } from './components/ToDo';
import './styles/styles.css';
import ThemeProvider from './context/themeContext';
import ThemeWrapper from './components/ThemeWrapper';
import { Flex } from './components/UI';

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeWrapper>
          <main className="App">
            <h1>Let&apos;s Get Stuff Done!</h1>
            <Flex flexDirection="column" className="box--shadow rounded" text="center">
              <AddTodo />
              <Todos />
            </Flex>
          </main>
        </ThemeWrapper>
      </TodoProvider>
    </ThemeProvider>
  );
}
