
// import React from 'react';
// import $ from 'jquery';
// import './admin.scss';

// import { Link } from "react-router-dom";

// class AdminPage extends React.Component {
//   componentDidMount() {
//     // jQuery code from .js file
//     $('#menu-toggle,#menu-overlay').click(function(){
//       $('body').toggleClass('open-menu');
//     });

//     $('#main-nav li a').click(function(){
//       $('#main-nav li').removeClass('active');
//       $(this).parent().addClass('active');
//     });

//     $('#tabs li').click(function(){
//       var clickTarget = $(this).attr('data-target');
//       $('.tab-target').removeClass('targeted');
//       $('#'+clickTarget).addClass("targeted");
//       $('#tabs li').removeClass('active');
//       $(this).addClass('active');
//     });

//     $('#admin-search input').on('focus', function() {
//       $('#header_logo').addClass('hidden');
//     });

//     $('#admin-search input').on('blur', function() {
//       $('#header_logo').removeClass('hidden');
//     });
//   }

//   render() {
//     return (
//       <div>
//         {/* JSX code from your example */}
//         <div>
//   <div id="menu-overlay" />
//   <div id="menu-toggle" className="closed" data-title="Menu">
//     <i className="fa fa-bars" />
//     <i className="fa fa-times" />
//   </div>
//   <header id="main-header">
//     <nav id="sidenav">
//       <div id="sidenav-header">
//         <div id="profile-picture">
//           <img src="http://www.gravatar.com/avatar/fa4df8540bab3cb38f7dfa60c6e0522c.png" />
//         </div>
//         <a href="#" id="profile-link">Jesse Couch</a>
//       </div>
//       <div id="account-actions">
//         <a href="#" data-title="Home"><i className="fa fa-home" /></a>
//         <a href="#" id="messages" data-title="Messages" data-newmessages={1}><i className="fa fa-inbox" /></a>
//         <a href="#" data-title="Settings"><i className="fa fa-cog" /></a>
//       </div>
//       <ul id="main-nav">
//         {/* <li className="active">
//           <a href="#">
//             <i className="fa fa-tachometer" />
//             Dashboard
//           </a>
//         </li> */}
//                 <li className="active">
//           {/* <a href="#"> */}
//             <i className="fa fa-tachometer" />
//             <Link to={"/PortfolioPage"}>
//                 <span>
//                     portfoliopage
//                 </span>
//             </Link>
//           {/* </a> */}
//         </li>
        
        


            

//         <li>
//           <a href="#">
//             <i className="fa fa-check-square-o" />
//             Tasks
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-user" />
//             Contacts
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-calendar" />
//             Calendar
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i className="fa fa-life-ring" />
//             FAQs
//           </a>
//         </li>
//       </ul>
//     </nav>
//     <form id="admin-search">
//       <input type="text" id="search-field" placeholder="Search" />
//       <label htmlFor="search-field" id="search-label" title="Search"><i className="fa fa-search" /></label>
//     </form>
//     <div id="header_logo">
//       <a href="#">Logo</a>
//     </div>
//   </header>
//   <section id="content">
//     <header id="content-header">
//       Header content
//     </header>
//     <nav id="tabs">
//       <ul>
//         <li className="active" data-target="knowledge">Knowledge</li>
//         <li data-target="activity">Activity</li>
//         <li data-target="friends">Friends</li>
//       </ul>
//     </nav>
//     <div className="tab-target targeted" id="knowledge">
//       <p>Knowledge Content</p>
//       <p>Bushwick VHS single-origin coffee, direct trade selfies Tonx chillwave fashion axe McSweeney's roof party four loko Williamsburg ugh. Hashtag farm-to-table keytar, gentrify roof party Vice stumptown polaroid sriracha fingerstache Intelligentsia bitters. You probably haven't heard of them 8-bit pickled pug, cardigan photo booth Schlitz Kickstarter pork belly art party raw denim street art readymade single-origin coffee Carles. Banh mi Pinterest cliche, YOLO ennui quinoa salvia brunch messenger bag twee kitsch sartorial. Cornhole bitters chambray irony, wayfarers PBR&amp;B disrupt Marfa. Austin ennui bespoke Schlitz shabby chic, meggings iPhone. Wes Anderson kale chips you probably haven't heard of them, freegan Vice scenester seitan Cosby sweater Schlitz pop-up dreamcatcher butcher artisan Truffaut roof party.</p>
//       <p>Flexitarian art party keffiyeh, PBR&amp;B seitan Carles Godard XOXO cred Brooklyn pickled. YOLO synth butcher post-ironic, pop-up organic artisan banjo PBR try-hard dreamcatcher plaid messenger bag brunch distillery. McSweeney's cray squid, roof party Blue Bottle irony kitsch before they sold out lo-fi asymmetrical shabby chic twee Tonx pickled try-hard. Artisan hella you probably haven't heard of them selvage, jean shorts locavore photo booth fanny pack mumblecore flannel before they sold out semiotics. Intelligentsia sustainable semiotics fanny pack distillery chillwave deep v, VHS dreamcatcher biodiesel synth. Locavore quinoa American Apparel, tote bag skateboard bespoke Wes Anderson pork belly cliche cred Brooklyn blog authentic flexitarian. Try-hard cray Pitchfork, hella Truffaut flexitarian sartorial sriracha Williamsburg Cosby sweater plaid meggings Helvetica.</p>
//     </div>
//     <div className="tab-target" id="activity">
//       Activity Content
//     </div>
//     <div className="tab-target" id="friends">
//       Friends Content
//     </div>
//   </section>
//   <footer />
// </div>
//       </div>
//     );
//   }
// }

// export default AdminPage;


// import React from 'react'
// // import "./admin.scss"
// import styles from './admin.module.scss';
// import { Link } from "react-router-dom";
// import PorfolioPage from '../portfolio/PorfolioPage';
// // Frontend\src\portfolio\PorfolioPage.jsx
// function AdminPage() {
//   return (
    
//     <div className="admin-panel clearfix">
    
//   <div className="slidebar">
  
//     <div className="logo">
//       <a href />
//     </div>
//     <ul>
//       <li><a href="#dashboard" id="targeted">dashboard</a></li>
      
//       <li><a href="#posts">posts</a></li>

// {/* <li>
//         <Link to={"/PortfolioPage"}>
//               <span>
//                  portfoliopage
//                </span>
//        </Link>
//        </li> */}

//       <li><a href="#media">media</a></li>
//       <li><a href="#pages">pages</a></li>
//       <li><a href="#links">links</a></li>
//       <li><a href="#comments">comments</a></li>
//       <li><a href="#widgets">widgets</a></li>
//       <li><a href="#plugins">plugins</a></li>
//       <li><a href="#users">users</a></li>
//       <li><a href="#tools">tools</a></li>
//       <li><a href="#settings">settings</a></li>
//     </ul>
//   </div>
//   <div className="main">
//     <ul className="topbar clearfix">
//       <li><a href="#">q</a></li>
//       <li><a href="#">p</a></li>
//       <li><a href="#">o</a></li>
//       <li><a href="#">f</a></li>
//       <li><a href="#">n</a></li>
//     </ul>

//     <div className="mainContent clearfix">
//       <div id="dashboard">
//         <h2 className="header"><span className="icon" />Dashboard</h2>
//         <div className="monitor">
//           <h4>Right Now</h4>
//           <div className="clearfix">
//             <ul className="content">
//               <li>content</li>
//               <li className="posts"><span className="count">179</span><a href>posts</a></li>
//               <li className="pages"><span className="count">13</span><a href>pages</a></li>
//               <li className="categories"><span className="count">21</span><a href>categories</a></li>
//               <li className="tags"><span className="count">305</span><a href>tags</a></li>
//             </ul>
//             <ul className="discussions">
//               <li>discussions</li>
//               <li className="comments"><span className="count">353</span><a href>comments</a></li>
//               <li className="approved"><span className="count">319</span><a href>approved</a></li>
//               <li className="pending"><span className="count">0</span><a href>pending</a></li>
//               <li className="spam"><span className="count">34</span><a href>spam</a></li>
//             </ul>
//           </div>
//           <p>Theme <a href>Twenty Eleven</a> with <a href>3 widgets</a></p>
//         </div>
//         <div className="quick-press">
//           <h4>Quick Press</h4>
//           <form action method="post">
//             <input type="text" name="title" placeholder="Title" />
//             <input type="text" name="content" placeholder="Content" />
//             <input type="text" name="tags" placeholder="Tags" />
//             <button type="button" className="save">l</button>
//             <button type="button" className="delet">m</button>
//             <button type="submit" className="submit" name="submit">Publish</button>
//           </form>
//         </div>
//       </div>

//       <div id="posts">
//         <h2 className="header">

//             {/* posts */}
//             {/* <PortfolioPage/> */}
//             xyz lalala
            
//             </h2>

//             in posts
//             {/* <PorfolioPage/> */}
//       </div>

//       <div id="media">
//         <h2 className="header">media</h2>
//       </div>
//       <div id="pages">
//         <h2 className="header">pages</h2>
//       </div>
//       <div id="links">
//         <h2 className="header">links</h2>
//       </div>
//       <div id="comments">
//         <h2 className="header">comments</h2>
//       </div>
//       <div id="widgets">
//         <h2 className="header">widgets</h2>
//       </div>
//       <div id="plugins">
//         <h2 className="header">plugins</h2>
//       </div>
//       <div id="users">
//         <h2 className="header">users</h2>
//       </div>
//       <div id="tools">
//         <h2 className="header">tools</h2>
//       </div>
//       <div id="settings">
//         <h2 className="header">settings</h2>
//       </div>
//     </div>
//     <ul className="statusbar">
//       <li><a href /></li>
//       <li><a href /></li>
//       <li className="profiles-setting"><a href>s</a></li>
//       <li className="logout"><a href>k</a></li>
//     </ul>
//   </div>
// </div>

//   )
// }

// export default AdminPage




import React from 'react';
import { Link } from 'react-router-dom';
import styles from './admin.module.scss'; // Import CSS Module


function AdminPage() {
  return (
    <div className={styles['admin-panel']} /* Using scoped class name */>
      <div className={styles.slidebar}>
        <div className={styles.logo}>
          <a href="/" /> {/* Empty link attribute */}
        </div>
        <ul>
          <li>
            <a href="#dashboard" id={styles.targeted}>
              dashboard
            </a>
          </li>
          <li>
            <a href="#posts">
              posts
            </a>
          </li>
          {/* <li>
            <Link to="/PortfolioPage">
              <span>Portfolio Page</span>
            </Link>
          </li> */}
          <li>
            <a href="#media">media</a>
          </li>
          <li>
            <a href="#pages">pages</a>
          </li>
          <li>
            <a href="#links">links</a>
          </li>
          <li>
            <a href="#comments">comments</a>
          </li>
          {/* Add other items similarly */}
        </ul>
      </div>

      <div className={styles.main}>
        <ul className={styles.topbar}>
          <li>
            <a href="#">q</a>
          </li>
          <li>
            <a href="#">p</a>
          </li>
          {/* Add other items */}
        </ul>

        <div className={styles.mainContent}>
          <div id="dashboard">
            <h2 className={styles.header}>
              <span className={styles.icon} /> Dashboard
            </h2>
            {/* Add other content similarly */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
