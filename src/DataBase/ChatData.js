import React from 'react';
import SerialLookup from '../Components/Serial';



const Cdata=[
  {
    id: '1',
    message: 'Hello how may I help you?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      {
        value:'1',
        label:"Web Develope",
        trigger:'web_dev'
      },
      {
        value:'2',
        label:"App Develope",
        trigger:'app_dev'
      },
      {
        value:'3',
        label:"UI Design",
        trigger:'ui_des'
      },
      {
        value:'4',
        label:"UX Design",
        trigger:'ux_des'
      },
      {
        value:'5',
        label:"Learning",
        trigger:'learn'
      },
    ],
  },
  // 
  {
    id: 'web_dev',
    message: 'Please enter your Cisco serial number',
    trigger: 'serial',
  },
  {
    id: 'app_dev',
    message: 'Please enter your Cisco serial number',
    trigger: 'serial',
  },
  {
    id: 'ui_des',
    message: 'Please enter your Cisco serial number',
    trigger: 'serial',
  },
  {
    id: 'ux_des',
    message: 'Please enter your Cisco serial number',
    trigger: 'serial',
  },
  {
    id: 'learn',
    message: 'Please enter your Cisco serial number',
    trigger: 'serial',
  },
  // 
  {
    id: 'serial',
    user: true,
    trigger: 'serial-response',
  },
  {
    id: 'serial-response',
    component: <SerialLookup />,
    waitAction: true,
    trigger: '1',
  }
]

export default Cdata;