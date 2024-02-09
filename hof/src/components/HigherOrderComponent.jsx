import React, { Component } from 'react'
import './Style.css'

export default class HigherOrderComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userData:[
            {id: '1' , name:'Joe' , user_Type:'Developer' , age: '31' , years: '11'},
            {id: '2' , name:'Hill' , user_Type:'Designer' , age: '26' , years: '4'},
            {id: '3' , name:'John' , user_Type:'Teacher' , age: '24' , years: '2'},
            {id: '4' , name:'Sam' , user_Type:'Entreprenuer' , age: '58' , years: '25'},
            {id: '5' , name:'Jack' , user_Type:'Designer' , age: '43' , years: '18'}
         ]
      }
    }
  render() {
    const data1 = this.state.userData;
    const dataRow1 = data1.map(info=>(
        <React.Fragment key={info.id}>
            <li className='list-elements'>
                <span>Id: {info.id} </span>
                <span>Name: {info.name} </span>
                <span>user_Type: {info.user_Type}</span>
            </li>
        </React.Fragment>
    ))

    const data2 = this.state.userData.filter((info)=> info.user_Type === 'Designer');
    const dataRow2 = data2.map(info=>(
        <React.Fragment key={info.id}>
            <li className='list-elements'>
                <span>Id: {info.id} </span>
                <span>Name: {info.name} </span>
                <span>user_Type: {info.user_Type}</span>
            </li>
        </React.Fragment>
    ))
    
    const data3 = this.state.userData.filter((info)=> info.name.startsWith('J'));
    const dataRow3 = data3.map(info=>(
        <React.Fragment key={info.id}>
            <li className='list-elements'>
                <span>Id: {info.id} </span>
                <span>Name: {info.name} </span>
                <span>user_Type: {info.user_Type}</span>
            </li>
        </React.Fragment>
    ))

    const data4 = this.state.userData.filter((info)=> info.age > 28 && info.age < 50);
    const dataRow4 = data4.map(info=>(
        <React.Fragment key={info.id}>
            <li className='list-elements'>
                <span>Id: {info.id} </span>
                <span>Name: {info.name} </span>
                <span>user_Type: {info.user_Type}</span>
            </li>
        </React.Fragment>
    ))

    const data5 = this.state.userData.filter((info) => info.user_Type === 'Designer');
    let sum = 0
    data5.forEach((info) => {
      sum = sum + parseInt(info.years)
    });

    return(
      <div>
        <h1>Display all items</h1>
         {dataRow1}
        <h1>Display display based on user type</h1>
         {dataRow2}
        <h1>Filter all data starting with letter J</h1>
         {dataRow3}
        <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
         {dataRow4}
        <h1>Find the total years of the designers</h1>
         {sum}
      </div>
    )
  }
}