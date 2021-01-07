import {Helmet} from 'react-helmet';
import  React from 'react' ;


const ErrorPage=()=>{
    return(
        <div className="error-page">
        	<Helmet>
              <title>Page Not Found</title>
          </Helmet>
            <h1 className="error_h1">404 | Not Found</h1>
        </div>
    )
}

export default ErrorPage;