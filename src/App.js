import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Switch, TreeSelect, Button } from 'antd';
const {RangePicker} = DatePicker;
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      calendar : null,
      selectedItems: null,
      treeData: [
        {
          value: 1,
          title : "Mango"
        },
        {
          value: 2,
          title : "Banana"
        },
        {
          value: 3,
          title : "Apple"
        }
      ]
    }
  }
  selectData = (date, dateString)=> {
    const new_calendar = [];
    const selected = (date, dateString);
    new_calendar.push(Object.assign({from: selected[0], to: selected[1]}));
    this.setState({
      calendar: new_calendar
    })
  }
  data = (value)=> {
    this.setState({
      selectedItems: value
    })
  }
  switch = (checked)=> {
    if (checked === true) {
      let findItem = this.state.treeData.map(item=> item.value);
      this.setState({
        selectedItems: findItem
      })
    }
    else {
      this.setState({
        selectedItems: null
      })
    }
  }
  render() {
    const checked = this.state.calendar === null || this.state.selectedItems === null;
    return (
      <div>
        <div style={{padding: 50}}>
          <RangePicker onChange={this.selectData} style={{marginRight:20}} />
          <Switch disabled={this.state.calendar === null} onChange={this.switch} style={{marginRight:20}}/>
          <TreeSelect
          treeData={this.state.treeData}
          value={this.state.selectedItems}
          onChange={this.data}
          treeCheckable={true}
          searchPlaceholder={'Select Item'} 
          style={{marginRight:20, width: 300}}/>
          <Button disabled={checked || this.state.selectedItems === null} type="primary">Submit</Button>
        </div>
      </div>
    );
  }
}
