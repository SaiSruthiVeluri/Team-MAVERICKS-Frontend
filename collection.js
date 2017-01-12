import React, { Component } from 'react';
class Collection extends Component {
  constructor() {
    // In a constructor, call `super` first if the classNameName extends another classNameName
    super();
  }

  // `render` is called whenever the component's props OR state are updated.
  render() {

    let collections = [
    {
     name:'Sunday Brunch',
     image:require('./images/sb.jpg')

   },
   {
    name:'Frozen Delight',
    image:require('./images/fd.jpg')
  },
  {
    name:'Street Food',
    image:require('./images/street.jpg')
  },
  {
    name:'Fine Dine',
    image:require('./images/street.jpg')
  },
  {
    name:'Barbeque & Grills',
    image:require('./images/bb.jpg')
  },
  {
    name:'Breakfast',
    image:require('./images/bf.jpg')
  }
  ]
return (
  <div id="tf-works">
        <div className="container"> 
            <div className="section-title text-center center">
                <h2>Take a look at our <strong>Collections</strong></h2>
                <div className="line">
                    <hr />
                </div>
                <div className="clearfix"></div>
                
            </div>
            <div className="space"></div>

            <div className="categories">
                
                
                <div className="clearfix"></div>
            </div>

            <div id="lightbox" className="row">

                <div className="col-sm-6 col-md-4 col-lg-4 branding">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <a href="#">
                                <div className="hover-text">
                                    <h4>Logo Design</h4>
                                    <small>Branding</small>
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={require('./images/fd.jpg')} className="img-responsive" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 photography app">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <a href="#">
                                <div className="hover-text">
                                    <h4>Logo Design</h4>
                                    <small>Branding</small>
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={require('./images/fd.jpg')} className="img-responsive" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 branding">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <a href="#">
                                <div className="hover-text">
                                    <h4>Logo Design</h4>
                                    <small>Branding</small>
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={require('./images/fd.jpg')} className="img-responsive" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 branding">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <a href="#">
                                <div className="hover-text">
                                    <h4>Logo Design</h4>
                                    <small>Branding</small>
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={require('./images/fd.jpg')} className="img-responsive" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 web">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <a href="#">
                                <div className="hover-text">
                                    <h4>Logo Design</h4>
                                    <small>Branding</small>
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={require('./images/fd.jpg')} className="img-responsive" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 app">
                    <div className="portfolio-item">
                        <div className="hover-bg">
                            <a href="#">
                                <div className="hover-text">
                                    <h4>Logo Design</h4>
                                    <small>Branding</small>
                                    <div className="clearfix"></div>
                                    <i className="fa fa-plus"></i>
                                </div>
                                <img src={require('./images/fd.jpg')} className="img-responsive" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    </div>

 );
 }
}
export default Collection;


