import { Container, Content, Row } from './styles';
import Input from './components/input';
import Button from './components/button';
import { useState } from 'react';

const App = () => {
const [currentNumber, setCurrentNumber] = useState(0);
const [firstNumber, setFirstNumber] = useState(0);
const [operation, setOperation] = useState('');

const handleClear = ( ) => {
  setCurrentNumber('0')
  setFirstNumber('0')
  setOperation('')
}
const handleAddNumber = (num) =>
{
  setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
}

const handleSumNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('+')
  } else {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String (sum))
    setOperation('')
  }
}
const handleSubNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('-')
  } else {
    const sub = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String (sub))
    setOperation('')
  }
}
const handleMultiNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('*')
  } else {
    const multi = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String (multi))
    setOperation('')
  }
}
const handleDiviNumber = () => {
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('/')
  } else {
    const divi = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String (divi))
    setOperation('')
  }
}




  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumber();
          break;
          case '-':
          handleSubNumber();
          break
          case '*':
          handleMultiNumber();
          break;
          case '/':
          handleDiviNumber();
          break;
          default: 
          break;
      }
    }
  }

  return (
    <Container>

    <Content>
      <Input value={currentNumber}/>

      <Row>
      <Button label="X"onClick={ () => handleAddNumber('X')}/>
      <Button label="/"onClick={handleDiviNumber}/>
      <Button label="C"onClick={handleClear}/>
      <Button label="*"onClick={handleMultiNumber}/>
      </Row>
      <Row>
      <Button label="7"onClick={ () => handleAddNumber('7')}/>
      <Button label="8"onClick={ () => handleAddNumber('8')}/>
      <Button label="9"onClick={ () => handleAddNumber('9')}/>
      <Button label="+"onClick={ handleSumNumber}/>
      </Row>

      <Row>
      <Button label="4"onClick={ () => handleAddNumber('4')}/>
      <Button label="5"onClick={ () => handleAddNumber('5')}/>
      <Button label="6"onClick={ () => handleAddNumber('6')}/>
      <Button label="-"onClick={ handleSubNumber}/>
      </Row>
      <Row>
      <Button label="1"onClick={ () => handleAddNumber('1')}/>
      <Button label="2"onClick={ () => handleAddNumber('2')}/>
      <Button label="3"onClick={ () => handleAddNumber('3')}/>
      <Button label="=" onClick={ handleEquals}/>
      </Row>
      
     

    </Content>

    </Container>
  );
}

export default App;
