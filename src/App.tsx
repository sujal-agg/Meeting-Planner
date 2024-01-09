import React from 'react';
import './App.css';
import {Inject, ScheduleComponent , Day,Week,WorkWeek,Month,Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';

import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data';

class App extends React.Component{
  private localData:EventSettingsModel={
    dataSource:[{
      End: new Date(2024,0,11,6,30),
      Start: new Date(2024,0,11,4,0),
      Summary:'Testing',
      IsAllDay: true,
      RecurrenceRule:'FREQ=DAILY;INTERVAL=1;COUNT=10'
    }],
    fields:{
      subject:{name:'Summary',default:'No title Provided'},
      startTime:{name:'Start'},
      endTime:{name:'End'}
    }
  };
  private remoteData=new DataManager({
    url:'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor:new WebApiAdaptor(),
    crossDomain:true
  });
  public render() {
    return <ScheduleComponent currentView='Month' 
    // selectedDate={new Date(2024,0,1)}
      eventSettings={{dataSource:this.remoteData}}>
      <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
    </ScheduleComponent>
  }
}

export default App;
