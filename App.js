import './App.css';
import {GridComponent , ColumnsDirective , Page , Inject} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
function App() {
  return (
    <div className="App" style={{margin: '10%' , marginTop: '10%' }}>
      <GridComponent dataSource={data}
        allowPaging = {true}
        PageSettings = {{pageSize : 12}}
        allowFiltering = {true}
      >
        <ColumnsDirective field = 'ID' headerText = 'ID' textAlign="Right" width='100'/>
        <ColumnsDirective field = 'EmployeeName' headerText = 'EmployeeName' textAlign="Right" width='100' />
        <ColumnsDirective field = 'EmployeeAge' headerText = 'EmployeeAge' textAlign="Right" width='100' />
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
}

export default App;
