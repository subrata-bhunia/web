import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './contact.css';
//------//
import logo from '../logo.svg';
//-------------//
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
// -----------//
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// var today=new Date();


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    maxWidth:"100%",
  },
  media: {
    height: "400px",
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};



const Contact=()=>{
  const [Arr,setArr]=useState(
    {
      newsData:[]
    }
  );
  // const [Hoil,setHoil]=useState([]);
  // const [Model,setModel]=useState(false);
  const classes = useStyles();
  var localArr=[];


  // New Api-----Google--rapidapi--//
// //-------------------------------//
  // async function fetchDataMthd(){
  // var fetchData = await fetch("https://google-news.p.rapidapi.com/v1/topic_headlines?lang=en&country=IN&topic=nation", {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-key": "d360f6da3cmshb2630ee1accf21ep104e9ajsn17e98fedcaa7",
  //     "x-rapidapi-host": "google-news.p.rapidapi.com"
  //   }
  // })
  // const json = await fetchData.json();
  //   // setArr(json.articles);
  //   console.log(json)


  // }
// //------------------------//

//-----HoliDay Api --abstractapi--//

  //   var url = 'https://holidays.abstractapi.com/v1/?api_key=1ded9263223c4cfea4309acd07e0ea32&country=IN&year='+today.getFullYear()+'&month='+today.getMonth()+1+'&day='+today.getDate();
  //   var req = new Request(url);
  //  async function fetchHoliday(){
  //   var fetchDate = await fetch(req);
  //   const holiday = await fetchDate.json();
  //   setHoil(holiday);
  // }
  // console.log("okk",Hoil)
  // const Checking=()=>{
  //   if (Hoil.length===0) {
  //     setModel(false);
  //   } else {
  //     setModel(true);
  //   }
  // };
// --------------------------------------//
// // --------Latestnews api--------------//
async  function fetchDateMthdByPost(){
    const requestOptions = {
      method: 'POST',
      headers: { 
        'content-type': 'application/json', 
        'x-rapidapi-key': '6b7d574790mshe1565b5ce6e7c36p1a9bfcjsnec6f06d3c90a',
        'x-rapidapi-host': 'latest-news1.p.rapidapi.com'
      },
      body: JSON.stringify({
        author_only: "true",
        content: "true",
        domains: "cnn.com",
        page: "1",
        q: "",
        qInTitle: "",
        topic: ""
      })
    };

    var Newsfetch= await fetch("https://latest-news1.p.rapidapi.com/", requestOptions)
    const news = await Newsfetch.json();
    var NewsData = news.result.Article
    // setArr(json.articles);
    // console.log(news.result.Article)
    setArr({newsData:NewsData})
  }
// // -----------------------------------------//

  useEffect(()=>{
    fetchDateMthdByPost();
    localStorage.setItem(localArr,Arr)
  //  fetchDataMthd();
    // fetchHoliday();
    // Checking();
    // const fetchData = fetch(req);
    // console.log(Articles);
    // const json = fetchData.json();

    // Articles = new Array(json.articles);
    // console.log(Articles);
    // fetchDataMthd().then((data)=>{
    //   Articles = data;
    //   console.log(Articles);
    //   // Articles=new Array(Arr.articles)
    //   // console.log(Articles);
    // }), (err) => {
    //     console.log(err);
    //   };
    
  },[]);







    return(
        <div>
            <Helmet>
              <title>Subrata | News India</title>
          </Helmet>
          <div className="contact">
            {console.log(Arr.newsData)}
            {/* HoliDay Popup */}
            {/* <Modal
                    aria-labelledby="spring-modal-title"
                    aria-describedby="spring-modal-description"
                    className={classes.modal}
                    open={Model}
                    onClose={()=>setModel(false)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={Model}>
                {
                  Hoil.map((item,ind)=>{
                    return(
                        <div className={classes.paper}>
                          <h2 id="spring-modal-title">Today Holiday</h2>
                          <p id="spring-modal-description">
                            {item.name}
                          </p>
                        </div>
                    )
                  })
                }
                  </Fade>
                </Modal> */}
            
            {/* News Data */}

            {
              Arr.newsData.length===0 &&
              <div className="text-center d-block m-5 p-5">
                <div className="spinner-border" role="status" style={{width:"20spx",height:"200px"}}>
                    <div className="spinner-border" role="status" style={{width:"20px",height:"200px"}}>
                        <div className="spinner-border" role="status" style={{width:"20px",height:"200px"}}>
                            <div className="spinner-border" role="status" style={{width:"20px",height:"200px"}}>
                                <span className="sr-only">Loading...</span>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                            <span className="sr-only">Loading...</span>
                        </div>
         </div>
            }
          
            {
              Arr.newsData.map((itm,ind)=>{
                return(
                  <div key={ind} className="d-gird m-5">
                   <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={itm.urlToImage}
                          title={`Publish at :`+itm.publishedAt}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h4" component="h2">
                           {itm.title}
                          </Typography>
                          <Typography gutterBottom variant="subtitle1" component="h2">
                           Author - {itm.author}
                          </Typography>
                          <Typography variant="caption" color="textSecondary" component="p">
                            {itm.description}
                          </Typography>
                          <Typography variant="body1" color="textPrimary" component="p">
                            {itm.content}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary" href={itm.source_url}>
                          {itm.source_name}
                        </Button>
                        <Button size="small" color="primary" href={itm.url}>
                          Read More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                )
              })
            }
          </div>
        </div>
    )
}

export default Contact;