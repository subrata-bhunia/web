import React from 'react';
import SerialLookup from '../Components/Serial';



const Cdata=[
  //1st Ques
  {
    id: '1',
    message: 'Hello how may I help you ?',
    trigger: '2',
  },
  //1st Ops
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
  // 2nd Ques
  //web dev
{
  id:'web_dev',
  message:'What you want ?',
  trigger:'web_dev1'
},
{
  id:"web_dev1",
  options:[
    {
      value:'1',
      label:'Website Develope & Design',
      trigger:'web_dev2'
    },
    {
      value:'2',
      label:'Website Maintenance',
      trigger:'web_dev97'  
    },
  ]
},
{
  id:'web_dev2',
  message:'Choose the right website type for your audience',
  trigger:'web_dev3'
},
{
  id:"web_dev3",
  options:[
    {
      value:'1',
      label:' Homepages',
      trigger:'web_dev4'
    },
    {
      value:'2',
      label:' Magazine',
      trigger:'web_dev4'
    },
    {
      value:'3',
      label:'E-commerce',
      trigger:'web_dev4'
    },
    {
      value:'4',
      label:' Blogs',
      trigger:'web_dev4'
    },
    {
      value:'5',
      label:' Portfolio',
      trigger:'web_dev4'
    },
    {
      value:'6',
      label:' Landing',
      trigger:'web_dev4'
    },
    {
      value:'7',
      label:' Social media',
      trigger:'web_dev4'
    },
    {
      value:'8',
      label:' Directory and contact pages',
      trigger:'web_dev4'
    },
  ]
},
{
  id:"web_dev4",
  message:'Do you have any domain ?',
  trigger:"web_dev5"
},
{
  id:'web_dev5',
  options:[
    {
      value:"1",
      label:"Yes",
      trigger:"web_dev97"
    },
    {
      value:"2",
      label:"No",
      trigger:"web_dev6"
    },
  ]
},
{
  id:"web_dev6",
  message:"Ok ! Don't worry.",
  trigger:"web_dev7"
},
{
  id:'web_dev7',
  options:[
    {
      value:"1",
      label:'Buy Domain',
      trigger:'web_dev8'      
    },
    {
      value:"2",
      label:'Contact Us',
      trigger:'web_dev9'      
    },
  ]
},
{
  id:'web_dev8',
  options:[
    {
      value:'1',
      label:"Google Domains",
      trigger:'web_dev100'
      //trigger:'google_domains'
    },
    {
      value:'2',
      label:"GoDaddy",
      trigger:'web_dev100'
      //trigger:'go_daddy'
    },
    {
      value:'3',
      label:"Hostinger",
      trigger:'web_dev100'
      //trigger:'host_inger'
    },
    {
      value:'4',
      label:"Bluehost",
      trigger:'web_dev100'
      //trigger:'google_domains'
    },
  ]
},
// Domain Trigger Sets For 14/12/2020
{
  id:'web_dev9',
  message:"Email:contact.sbhunia@gmail.com\n Mobile : +91-123-456-7890",
  end:true
},
  //
  {
    id: 'web_dev97',
    message: 'Please enter your Domain Name',
    trigger: 'web_dev98',
  },
{
  id:"web_dev98",
  user:true,
  trigger:'web_dev99'
},
//Q2
{
  id: 'web_dev99',
  component: <SerialLookup />,
  waitAction: true,
  trigger: 'web_dev100',
},
{
  id:'web_dev100',
  options:[
    {
      value:'1',
      label:'More..',
      trigger:'1'
    },
    {
      value:'2',
      label:'Ok Bye',
      trigger:'ok_bye'
    }
  ]
},

  //App Dev
  {
    id: 'app_dev',
    message: 'Please enter your Cisco serial number',
    trigger: 'serial',
  },

  //Ui des
  {
    id: 'ui_des',
    message: 'Please enter your Cisco serial number',
    trigger: 'serial',
  },

  //UX
  {
    id: 'ux_des',
    message: 'Please enter your Cisco serial number',
    trigger: 'serial',
  },

  //Learn
  {
    id: 'learn',
    message: 'Please enter your Cisco serial number',
    trigger: 'serial',
  },
//Common//
{
  id:'ok_bye',
  message:'Ok Bye ! Have a nice day 😊',
  end:true,
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